package com.ksol.mesc.domain.block.service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ksol.mesc.domain.api.service.ApiService;
import com.ksol.mesc.domain.block.dto.request.CardReqDto;
import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.block.repository.BlockRepository;
import com.ksol.mesc.domain.card.dto.request.CardReq;
import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.card.entity.CardType;
import com.ksol.mesc.domain.card.repository.CardRepository;
import com.ksol.mesc.domain.common.dto.response.JsonResponse;
import com.ksol.mesc.domain.component.dto.request.ComponentReq;
import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.entity.ComponentType;
import com.ksol.mesc.domain.component.repository.ComponentRepository;
import com.ksol.mesc.domain.component.type.button.dto.ButtonRes;
import com.ksol.mesc.domain.component.type.button.entity.Button;
import com.ksol.mesc.domain.component.type.button.repository.ButtonRepository;
import com.ksol.mesc.domain.component.type.checkbox.dto.CheckboxRes;
import com.ksol.mesc.domain.component.type.checkbox.entity.Checkbox;
import com.ksol.mesc.domain.component.type.checkbox.repository.CheckboxRepository;
import com.ksol.mesc.domain.component.type.dropdown.dto.DropdownRes;
import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;
import com.ksol.mesc.domain.component.type.dropdown.repository.DropdownRepository;
import com.ksol.mesc.domain.component.type.label.Label;
import com.ksol.mesc.domain.component.type.label.LabelRepository;
import com.ksol.mesc.domain.component.type.label.dto.LabelRes;
import com.ksol.mesc.domain.component.type.values.dto.ValuesRes;
import com.ksol.mesc.domain.component.type.values.entity.ComponentValue;
import com.ksol.mesc.domain.component.type.values.repository.ValuesRepository;
import com.ksol.mesc.domain.log.service.LogSerivce;
import com.ksol.mesc.domain.section.Section;
import com.ksol.mesc.domain.section.repository.SectionRepository;
import com.ksol.mesc.domain.user.service.UserServiceImpl;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mesc.global.error.ErrorCode;
import com.ksol.mesc.global.error.exception.BusinessException;
import com.ksol.mesc.global.error.exception.MesServerException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BlockService {
	//component repository
	private final BlockRepository blockRepository;
	private final CardRepository cardRepository;
	private final ComponentRepository componentRepository;
	private final ButtonRepository buttonRepository;
	private final LabelRepository labelRepository;
	private final CheckboxRepository checkboxRepository;
	private final DropdownRepository dropdownRepository;
	private final ValuesRepository valuesRepository;
	private final SectionRepository sectionRepository;

	//export lib
	private final JwtAuthenticationFilter jwtAuthenticationFilter;
	private final WebClient webClient;

	private final UserServiceImpl userService;
	private final LogSerivce logSerivce;
	private final ApiService apiService;

	//블록 추가
	public void addBlock(Block block) {
		blockRepository.save(block);
	}

	//블록 수정
	public void updateBlock(List<CardReq> cardReqList) {
		for (CardReq cardReq : cardReqList) {
			//카드가 존재하지 않으면 추가, 존재하면 카드 수정
			Card card = Card.toEntity(cardReq);
			Card newCard = cardRepository.save(card);
			log.info("newCard : {}", newCard);

			// 컴포넌트 x -> 추가
			// 컴포넌트 O -> 수정
			List<ComponentReq> componentList = cardReq.getComponentPairReq().getComponentList();

			if (cardReq.getId() == null) {
				for (ComponentReq componentReq : componentList) {
					componentReq.setCardId(newCard.getId());
				}
			}

			List<Object> objectList = cardReq.getComponentPairReq().getObjectList();
			for (int i = 0; i < componentList.size(); i++) {
				ComponentReq componentReq = componentList.get(i);
				Object object = objectList.get(i);

				//component 없으면 생성
				if (componentReq.getId() == null) {
					//type 별 생성
					saveComponent(componentReq.getType(), object);
					//dto에 type ID 추가
					//
					Component component = Component.toEntity(componentReq);
					componentRepository.save();
				} else {
					ComponentType componentType = componentReq.getType();
					saveComponent(componentType, object);
				}
			}
		}
	}

	//type 별 객체 수정
	public void saveComponent(ComponentType componentType, Object object) {
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			String json = objectMapper.writeValueAsString(object);

			switch (componentType) {
				case BU:
					saveEntity(json, Button.class, buttonRepository);
					break;
				case CB:
					saveEntity(json, Checkbox.class, checkboxRepository);
					break;
				case DD:
					saveEntity(json, Dropdown.class, dropdownRepository);
					break;
				case LA:
					saveEntity(json, Label.class, labelRepository);
					break;
				default:
					throw new IllegalArgumentException("Invalid ComponentType");
			}
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}

	private <T> T saveEntity(String json, Class<T> entityClass, JpaRepository<T, Integer> repository) {
		T entity;
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			entity = objectMapper.readValue(json, entityClass);
			return repository.save(entity);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}

	//블록 조회
	public LinkedHashMap<String, Object> selectBlockInfo(Integer blockId, CardReqDto cardReqDto, Integer userId) {
		//블록 조회
		Block block = blockRepository.findById(blockId)
			.orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
		LinkedHashMap<String, Object> objMap = new LinkedHashMap<>();

		objMap.put("blockId", block.getId());
		objMap.put("isPossible", block.getIsPossible() ? true : false);
		//		log.info("block={}", block);

		//블록과 연결된 카드 조회
		List<Card> cardList = cardRepository.findByBlockId(blockId);

		//카드 정보 저장
		List<LinkedHashMap<String, Object>> cardMapList = new ArrayList<>();

		//카드 조회
		for (Card card : cardList) {
			cardMapList.add(selectCardByType(card, cardReqDto, userId));
		}

		objMap.put("cardList", cardMapList);

		// 바로가기 버튼 섹션 조회
		List<Section> byBlockId = sectionRepository.findByBlockId(blockId);

		Integer sectionId = 0;
		if (!byBlockId.isEmpty()) {
			sectionId = byBlockId.get(0).getSectionType();
			System.out.println("byBlockId = " + byBlockId.get(0));
		}
		objMap.put("section", sectionId);
		return objMap;
	}

	//card type에 따른 조회
	public LinkedHashMap<String, Object> selectCardByType(Card card, CardReqDto cardReqDto, Integer myId) {
		//카드 정보 저장
		LinkedHashMap<String, Object> cardMap = new LinkedHashMap<>();
		CardType cardType = card.getCardType();

		cardMap.put("cardId", card.getId());
		cardMap.put("cardType", card.getCardType());
		cardMap.put("cardName", card.getName());
		cardMap.put("content", card.getContent());

		//card Typee에 따른 조회
		if (cardType == CardType.DT) {        //dynamic Text
			String content = card.getContent();
			Map<String, String> map = cardReqDto.getVariables();
			for (String key : map.keySet()) {
				content = content.replace("{" + key + "}", map.get(key));
			}
			cardMap.put("cardType", CardType.TX);
			cardMap.put("content", content);
		} else if (cardType == CardType.QT) {    //query text
			if (cardReqDto.getActionId() != null)
				cardMap.putAll((LinkedHashMap<String, Object>)requestPostToMes("/worker/query/", cardReqDto, cardType));
			else    //single Table --> 수정 필요
				cardMap.putAll((LinkedHashMap<String, Object>)requestPostToMes("/data/", cardReqDto, cardType));
		} else if (cardType == CardType.TA) {    //table 조회
			LinkedHashMap<String, Object> tableInfo = (LinkedHashMap<String, Object>)requestPostToMes("/worker/data/",
				cardReqDto, cardType);
			cardMap.put("label", tableInfo.get("label"));
			tableInfo.remove("label");
			cardMap.put("table", tableInfo);
		} else if (cardType == CardType.STA) {    //single table 조회
			cardMap.put("singleTable", requestPostToMes("/developer/data", cardReqDto, cardType));
		} else if (cardType == CardType.RE) {    //보고
			LinkedHashMap<String, List<LinkedHashMap<String, Object>>> m = (LinkedHashMap<String, List<LinkedHashMap<String, Object>>>)userService.selectAllUser();
			List<Object> userListWithoutMe = new ArrayList<>();
			if (m != null) {
				List<LinkedHashMap<String, Object>> userList = m.get("userList");
				userList.forEach(user -> {
					Integer userId = (Integer)user.get("userId");

					if (userId != myId) {
						userListWithoutMe.add(user);
					}
				});
			}
			cardMap.put("userList", userListWithoutMe);
		} else if (cardType == CardType.QU) {    //query 실행
			//			LinkedHashMap<String, Object> tableByQuery = apiService.getTableByQuery(cardReqDto.getQuery());
			////			tableByQuery.entrySet().forEach(key -> {
			////				System.out.println("key = " + key);
			////				System.out.println("tableByQuery = " + tableByQuery.get(key));
			////			});
			cardMap.putAll(apiService.getTableByQuery(cardReqDto.getQuery()));
		} else if (cardType == CardType.LO) {    //로그
			String keyword = cardReqDto.getKeyword();
			String date = cardReqDto.getDate();
			List<String> levelList = cardReqDto.getLevelList();
			String command = logSerivce.getCommand(keyword, date, levelList);
			cardMap.put("command", command);
			cardMap.put("logs", logSerivce.getLogs(command));
		} else if (cardType == CardType.DTX) {    // 동적 텍스트
			String content = card.getContent();
			cardMap.put("content", getDynamicString(content, card.getContentKey()));
			cardMap.put("cardType", CardType.TX);
		} else if (cardType.toString().startsWith(CardType.CH.toString())) {    // 일반 챗봇
			cardMap.put("title", card.getName());
		} else if (cardType == CardType.QTX) {    // insert,update,delete 결과
			cardMap.putAll(apiService.getCountsByQuery(cardReqDto.getQuery()));
			cardMap.put("cardType", CardType.TX);
		}

		//component 조회
		List<Component> componentList = componentRepository.findByCard(card);
		log.info("cardType : {}, componentList : {}", cardType, componentList);
		cardMap.putAll(selectComponentByType(componentList));

		return cardMap;
	}

	//component type에 따른 조회
	public LinkedHashMap<String, Object> selectComponentByType(List<Component> componentList) {
		LinkedHashMap<String, Object> map = new LinkedHashMap<>();
		List<ButtonRes> buttonList = new ArrayList<>();
		List<CheckboxRes> checkboxList = new ArrayList<>();
		List<LabelRes> labelList = new ArrayList<>();
		List<DropdownRes> dropdownList = new ArrayList<>();

		for (Component component : componentList) {
			ComponentType componentType = component.getComponentType();
			if (componentType == ComponentType.BU) {    //Button
				Optional<Button> button = buttonRepository.findById(component.getLinkId());
				if (button.isEmpty())
					continue;
				buttonList.add(ButtonRes.toResponse(button.get()));
			} else if (componentType == ComponentType.LA) {    //Label
				Optional<Label> label = labelRepository.findById(component.getLinkId());
				if (label.isEmpty())
					continue;
				labelList.add(LabelRes.toResponse(label.get()));
			} else if (componentType == ComponentType.CB) {    //Checkbox
				Optional<Checkbox> checkbox = checkboxRepository.findById(component.getLinkId());
				if (checkbox.isEmpty())
					continue;
				checkboxList.add(CheckboxRes.toResponse(checkbox.get()));
			} else if (componentType == ComponentType.DD) {    //Dropdown
				Optional<Dropdown> dropdownOpt = dropdownRepository.findById(component.getLinkId());
				if (dropdownOpt.isEmpty())
					continue;
				Dropdown dropdown = dropdownOpt.get();
				List<ComponentValue> valuesList = valuesRepository.findByDropdown(dropdown);
				List<ValuesRes> valuesResList = new ArrayList<>();
				for (ComponentValue cValues : valuesList) {
					valuesResList.add(ValuesRes.toResponse(cValues));
				}
				dropdownList.add(DropdownRes.toResponse(dropdown, valuesResList));
			}
		}

		if (!buttonList.isEmpty())
			map.put("button", buttonList);
		if (!checkboxList.isEmpty())
			map.put("checkbox", checkboxList);
		if (!labelList.isEmpty())
			map.put("cLabel", labelList);
		if (!dropdownList.isEmpty())
			map.put("dropdown", dropdownList);

		return map;
	}

	//mes에 post api 요청
	public Object requestPostToMes(String url, CardReqDto cardReqDto, CardType cardType) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		if (cardType == CardType.STA) {
			cardReqDto.setActionId(null);
		}
		if (cardReqDto.getActionId() != null)
			url += cardReqDto.getActionId();

		return webClient.post()
			.uri(url)
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.contentType(MediaType.APPLICATION_JSON)
			.body(BodyInserters.fromValue(cardReqDto))
			.retrieve()
			.toEntity(JsonResponse.class)
			.block()
			.getBody()
			.getData();
	}

	private String getDynamicString(String url, String key) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		Object data = webClient
			.mutate()
			.baseUrl(url)
			.build()
			.get()
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.retrieve()
			.toEntity(JsonResponse.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody()
			.getData();
		LinkedHashMap<String, Object> hashMap = (LinkedHashMap<String, Object>)data;
		return (String)hashMap.get(key);
	}
}
