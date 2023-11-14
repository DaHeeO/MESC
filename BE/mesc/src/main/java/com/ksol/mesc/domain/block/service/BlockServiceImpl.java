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
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ksol.mesc.domain.api.service.ApiService;
import com.ksol.mesc.domain.block.dto.request.BlockInfoDto;
import com.ksol.mesc.domain.block.dto.request.BlockReqDto;
import com.ksol.mesc.domain.block.dto.request.CardReqDto;
import com.ksol.mesc.domain.block.dto.response.BlockRes;
import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.block.repository.BlockRepository;
import com.ksol.mesc.domain.card.dto.request.CardReq;
import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.card.entity.CardType;
import com.ksol.mesc.domain.card.repository.CardRepository;
import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.common.dto.response.JsonResponse;
import com.ksol.mesc.domain.component.dto.request.ComponentReq;
import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.entity.ComponentType;
import com.ksol.mesc.domain.component.repository.ComponentRepository;
import com.ksol.mesc.domain.component.type.button.dto.ButtonRes;
import com.ksol.mesc.domain.component.type.button.entity.Button;
import com.ksol.mesc.domain.component.type.button.repository.ButtonRepository;
import com.ksol.mesc.domain.component.type.checkbox.dto.response.CheckboxRes;
import com.ksol.mesc.domain.component.type.checkbox.entity.Checkbox;
import com.ksol.mesc.domain.component.type.checkbox.repository.CheckboxRepository;
import com.ksol.mesc.domain.component.type.dropdown.dto.response.DropdownRes;
import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;
import com.ksol.mesc.domain.component.type.dropdown.repository.DropdownRepository;
import com.ksol.mesc.domain.component.type.values.dto.ValuesRes;
import com.ksol.mesc.domain.component.type.values.entity.ComponentValue;
import com.ksol.mesc.domain.component.type.values.repository.ValuesRepository;
import com.ksol.mesc.domain.log.service.LogSerivce;
import com.ksol.mesc.domain.section.Section;
import com.ksol.mesc.domain.section.repository.SectionRepository;
import com.ksol.mesc.domain.user.service.UserServiceImpl;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mesc.global.error.exception.EntityNotFoundException;
import com.ksol.mesc.global.error.exception.MesServerException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BlockServiceImpl implements BlockService {
	//component repository
	private final BlockRepository blockRepository;
	private final CardRepository cardRepository;
	private final ComponentRepository componentRepository;
	private final ButtonRepository buttonRepository;
	private final CheckboxRepository checkboxRepository;
	private final DropdownRepository dropdownRepository;
	private final ValuesRepository valuesRepository;
	private final SectionRepository sectionRepository;

	//userService
	private final UserServiceImpl userService;
	private final LogSerivce logSerivce;
	private final ApiService apiService;

	//export lib
	private final JwtAuthenticationFilter jwtAuthenticationFilter;
	private final WebClient webClient;

	//전체 블록 조회
	public List<BlockRes> selectAllBlock() {
		List<Block> blockList = blockRepository.findAllByActive(EntityState.ACTIVE);
		List<BlockRes> blockRes = new ArrayList<>();

		for (Block block : blockList) {
			blockRes.add(BlockRes.toResponse(block));
		}

		return blockRes;
	}

	//블록 조회
	@Override
	public LinkedHashMap<String, Object> selectBlockInfo(Integer blockId, CardReqDto cardReqDto, Integer userId) {
		//블록 조회
		Block block = blockRepository.findActiveById(blockId, EntityState.ACTIVE)
			.orElseThrow(() -> new EntityNotFoundException("Active Block Not Found"));
		LinkedHashMap<String, Object> objMap = new LinkedHashMap<>();

		objMap.put("blockId", block.getId());
		objMap.put("isPossible", block.getIsPossible() ? true : false);

		//블록과 연결된 카드 조회
		List<Card> cardList = cardRepository.findByBlockId(blockId, EntityState.ACTIVE);

		//카드 정보 저장
		List<LinkedHashMap<String, Object>> cardMapList = new ArrayList<>();

		//카드 조회
		for (Card card : cardList) {
			LinkedHashMap<String, Object> cardMap = selectCardByType(card, cardReqDto, userId);
			if (cardMap.get("result") != null) {
				objMap.put("isPossible", !(Boolean)cardMap.get("result"));
				cardMap.remove("result");
			}
			cardMapList.add(cardMap);
		}

		objMap.put("cardList", cardMapList);

		// 바로가기 버튼 섹션 조회
		List<Section> byBlockId = sectionRepository.findByBlockId(blockId);

		Integer sectionId = 0;
		if (!byBlockId.isEmpty()) {
			sectionId = byBlockId.get(0).getSectionType();
		}
		objMap.put("section", sectionId);
		return objMap;
	}

	@Transactional
	public BlockRes addBlock(BlockReqDto blockReqDto) {
		BlockInfoDto blockInfoDto = blockReqDto.getBlockInfo();
		Block block = blockRepository.save(Block.toEntity(blockInfoDto));
		BlockRes blockRes = BlockRes.toResponse(block);

		return blockRes;
	}

	//블록 추가
	@Override
	@Transactional
	public void addBlockContent(BlockReqDto blockReqDto) {
		BlockInfoDto blockInfoDto = blockReqDto.getBlockInfo();
		List<CardReq> cardReqList = blockReqDto.getCardReqList();
		List<ComponentReq> componentReqs = blockReqDto.getComponentList();

		// //1. 블록 추가
		Block block = saveBlock(blockInfoDto);

		if (cardReqList != null) {
			for (CardReq cardReq : cardReqList) {
				cardReq.setBlock(block);
			}
		}

		//2. 카드 추가 + 관련 컴포넌트 추가
		if (cardReqList != null) {
			log.info("cardReqList 수행");
			saveCardAndComponent(cardReqList);
		}

		//컴포넌트 추가
		if (componentReqs != null) {
			log.info("component 수행");
			saveComponent(componentReqs);
		}
	}

	//블록 수정
	@Override
	@Transactional
	public void updateBlockContent(Integer blockId, BlockReqDto blockReqDto) {
		BlockInfoDto blockInfoDto = blockReqDto.getBlockInfo();
		List<CardReq> cardReqList = blockReqDto.getCardReqList();
		List<ComponentReq> componentReqs = blockReqDto.getComponentList();

		//수정 요청 블록과 api 블록 번호 비교
		if (!blockId.equals(blockInfoDto.getId())) {
			throw new EntityNotFoundException("Block And Request Block Mismatch");
		}

		//블록 존재 확인
		Block block = blockRepository.findActiveById(blockId, EntityState.ACTIVE)
			.orElseThrow(() -> new EntityNotFoundException("Active Block Not Found"));

		//1. 블록 수정
		blockRepository.save(block);
		// if (blockInfoDto.getIsEditable()) {
		// 	cardReqList = saveBlock(blockInfoDto, cardReqList);
		// } else {
		// 	if (cardReqList != null) {
		// 		for (CardReq cardReq : cardReqList) {
		// 			cardReq.setBlock(block);
		// 		}
		// 	}
		// }

		//2. 카드 수정
		if (cardReqList != null) {
			saveCardAndComponent(cardReqList);
		}

		//3. 컴포넌트 수정
		if (componentReqs != null) {
			saveComponent(componentReqs);
		}
	}

	//블록 삭제
	@Transactional
	public void deleteBlock(Integer blockId) {
		Block block = blockRepository.findActiveById(blockId, EntityState.ACTIVE)
			.orElseThrow(() -> new EntityNotFoundException("Block Not Found"));
		blockRepository.updateState(blockId, EntityState.DELETE);

		List<Card> cardList = cardRepository.findByBlockId(blockId, EntityState.ACTIVE);
		if (cardList == null)
			return;
		for (Card card : cardList) {
			cardRepository.updateState(card.getId(), EntityState.DELETE);
			List<Component> componentList = componentRepository.findByCard(card, EntityState.ACTIVE);

			for (Component component : componentList) {
				componentRepository.updateState(component.getId(), EntityState.DELETE);
				updateComponentByType(component);
			}
		}
	}

	//블록 component 삭제
	@Override
	@Transactional
	public void deleteBlockContent(Integer blockId, BlockReqDto blockReqDto) {
		BlockInfoDto blockInfoDto = blockReqDto.getBlockInfo();
		List<CardReq> cardReqList = blockReqDto.getCardReqList();
		List<ComponentReq> componentReqList = blockReqDto.getComponentList();

		//1. 블록 삭제의 경우 -> 블록 연관된 것 삭제
		if (blockInfoDto != null && blockInfoDto.getIsEditable()) {
			blockRepository.updateState(blockId, EntityState.DELETE);
			List<Card> cardList = cardRepository.findByBlockId(blockId, EntityState.ACTIVE);

			for (Card card : cardList) {
				cardRepository.updateState(card.getId(), EntityState.DELETE);
				List<Component> componentList = componentRepository.findByCard(card, EntityState.ACTIVE);

				for (Component component : componentList) {
					componentRepository.updateState(component.getId(), EntityState.DELETE);
					updateComponentByType(component);
				}
			}
			return;
		}

		//2. 카드 삭제의 경우 -> 연관된 것 삭제
		if (cardReqList != null) {
			for (CardReq cardReq : cardReqList) {
				cardReq.setBlockId(blockId);
				Card card = Card.toEntity(cardReq);
				cardRepository.updateState(card.getId(), EntityState.DELETE);
				List<Component> componentList = componentRepository.findByCard(card, EntityState.ACTIVE);

				for (Component component : componentList) {
					updateComponentByType(component);
				}
			}
		}

		//3. 컴포넌트 삭제의 경우
		if (componentReqList != null) {
			for (ComponentReq componentReq : componentReqList) {
				Component component = Component.toEntity(componentReq);
				updateComponentByType(component);
			}
		}
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void updateComponentByType(Component component) {
		ComponentType componentType = component.getComponentType();
		Integer id = component.getLinkId();
		componentRepository.updateState(component.getId(), EntityState.DELETE);

		switch (componentType) {
			case BU:
				buttonRepository.updateState(id, EntityState.DELETE);
				break;
			case CB:
				checkboxRepository.updateState(id, EntityState.DELETE);
				break;
			case DD:
				dropdownRepository.updateState(id, EntityState.DELETE);
				Dropdown dropdown = dropdownRepository.findById(id)
					.orElseThrow(() -> new EntityNotFoundException("Dropdown Not Found"));
				List<ComponentValue> cValueList = valuesRepository.findByDropdown(dropdown, EntityState.ACTIVE);
				for (ComponentValue cv : cValueList) {
					valuesRepository.updateState(cv.getId(), EntityState.DELETE);
				}

				break;
			default:
				throw new IllegalArgumentException("Invalid ComponentType");
		}
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public Block saveBlock(BlockInfoDto blockInfoDto) {
		if (blockInfoDto.getId() == null) {
			return blockRepository.save(Block.toEntity(blockInfoDto));
		} else {
			return blockRepository.findActiveById(blockInfoDto.getId(), EntityState.ACTIVE).orElseThrow(
				() -> new EntityNotFoundException("Block Not Found")
			);
		}
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void saveCardAndComponent(List<CardReq> cardReqList) {
		for (CardReq cardReq : cardReqList) {
			Card savedCard = cardRepository.save(Card.toEntity(cardReq));
			List<ComponentReq> componentReqList = cardReq.getComponentList();
			if (componentReqList == null)
				continue;
			Integer componentSize = cardReq.getComponentList().size();
			for (int i = 0; i < componentSize; i++) {
				//3. 컴포넌트 추가
				ComponentReq componentReq = componentReqList.get(i);
				componentReq.setCard(savedCard);
				Object object = componentReq.getObject();

				//3-1. 요소 추가 + 컴포넌트 추가
				ComponentType componentType = componentReq.getType();
				saveComponentByType(componentType, object, componentReq);
			}
		}
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public void saveComponent(List<ComponentReq> componentReqs) {
		for (ComponentReq componentReq : componentReqs) {
			Card card = cardRepository.findById(componentReq.getCardId())
				.orElseThrow(() -> new EntityNotFoundException("Active Card Not Found"));
			componentReq.setCard(card);
			Object object = componentReq.getObject();

			//3-1. 요소 수정 + 컴포넌트 수정
			ComponentType componentType = componentReq.getType();
			saveComponentByType(componentType, object, componentReq);
		}
	}

	//type 별 객체 저장
	@Transactional(propagation = Propagation.REQUIRED)
	public void saveComponentByType(ComponentType componentType, Object object, ComponentReq componentReq) {
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			String json = objectMapper.writeValueAsString(object);

			switch (componentType) {
				case BU:
					Button button = saveEntity(json, Button.class, buttonRepository);
					componentReq.setLinkId(button.getId());
					break;
				case CB:
					Checkbox checkbox = saveEntity(json, Checkbox.class, checkboxRepository);
					componentReq.setLinkId(checkbox.getId());
					break;
				case DD:
					DropdownRes dropdownRes = objectMapper.readValue(json, DropdownRes.class);
					Dropdown dropdown = Dropdown.toEntity(dropdownRes);
					dropdownRepository.save(dropdown);
					componentReq.setLinkId(dropdown.getId());

					//value 추가
					List<ValuesRes> cValueList = dropdownRes.getValuesList();
					for (ValuesRes cv : cValueList) {
						cv.setDropdown(dropdown);
						valuesRepository.save(ComponentValue.toEntity(cv));
					}
					break;
				default:
					throw new IllegalArgumentException("Invalid ComponentType");
			}

			//컴포넌트 추가
			Component component = Component.toEntity(componentReq);
			componentRepository.save(component);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public <T> T saveEntity(String json, Class<T> entityClass, JpaRepository<T, Integer> repository) {
		T entity;
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			entity = objectMapper.readValue(json, entityClass);
			return repository.save(entity);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
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
		String content = null;

		switch (cardType) {
			case DT:    //dynamic Text
				content = card.getContent();
				Map<String, String> map = cardReqDto.getVariables();
				if (map != null) {
					for (String key : map.keySet()) {
						content = content.replace("{" + key + "}", map.get(key));
					}
				}
				cardMap.put("cardType", CardType.TX);
				cardMap.put("content", content);
				break;
			case DTX:
				content = card.getContent();
				cardMap.put("content", getDynamicString(content, card.getContentKey()));
				cardMap.put("cardType", CardType.TX);
				break;
			case TA:    //공정 Table
				LinkedHashMap<String, Object> tableInfo = (LinkedHashMap<String, Object>)requestPostToMes(
					"/worker/data/",
					cardReqDto, cardType);
				cardMap.put("title", cardReqDto.getTitle());
				cardMap.put("labels", tableInfo.get("label"));
				tableInfo.remove("label");
				cardMap.put("table", tableInfo);
				break;
			case STA:    //단일 Table
				cardMap.put("singleTable", requestPostToMes("/developer/data", cardReqDto, cardType));
				break;
			case QU:    //select 쿼리 입력
				LinkedHashMap<String, Object> tableByQuery = apiService.getTableByQuery(cardReqDto.getQuery(), 1);
				Boolean result = (Boolean)tableByQuery.get("result");
				cardMap.put("result", result);
				if (result) {
					tableByQuery.remove("result");
					cardMap.put("table", tableByQuery);
				} else {
					cardMap.putAll(tableByQuery);
				}
				break;
			case QR:
				String query = cardReqDto.getQuery();
				LinkedHashMap<String, Object> tableByQueryRollback = apiService.getTableByQueryRollback(query, 1);
				result = (Boolean)tableByQueryRollback.get("result");
				cardMap.put("result", result);
				tableByQueryRollback.remove("result");
				if (result) {
					cardMap.put("title", ((List<String>)tableByQueryRollback.get("tableList")).get(0));
					tableByQueryRollback.remove("tableList");
					cardMap.put("table", tableByQueryRollback);
				} else {
					cardMap.putAll(tableByQueryRollback);
				}
				break;
			case QTX:    // insert,update,delete 결과
				cardMap.putAll(apiService.getCountsByQuery(cardReqDto.getQuery()));
				break;
			case RE:    //보고
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
				break;
			case LO:    //로그
				String keyword = cardReqDto.getKeyword();
				String date = cardReqDto.getDate();
				List<String> levelList = cardReqDto.getLevelList();
				String command = logSerivce.getCommand(keyword, date, levelList);
				cardMap.put("command", command);
				cardMap.put("logs", logSerivce.getLogs(command));
				break;
			case CH, CH1, CH2:// 일반 챗봇
				cardMap.put("title", card.getName());
				break;
			// default:
			// 	throw new IllegalArgumentException("Invalid ComponentType");
		}

		//component 조회
		List<Component> componentList = componentRepository.findByCard(card, EntityState.ACTIVE);
		// log.debug("cardType : {}, componentList : {}", cardType, componentList);
		cardMap.putAll(selectComponentByType(componentList));

		return cardMap;
	}

	//component type에 따른 조회
	public LinkedHashMap<String, List<Object>> selectComponentByType(List<Component> componentList) {
		LinkedHashMap<String, List<Object>> compMap = new LinkedHashMap<>();
		String[] cType = {"button", "checkbox", "dropdown"};
		compMap.put("button", new ArrayList<>());
		compMap.put("checkbox", new ArrayList<>());
		compMap.put("dropdown", new ArrayList<>());

		for (Component component : componentList) {
			ComponentType componentType = component.getComponentType();
			switch (componentType) {
				case BU:
					Optional<Button> button = buttonRepository.findById(component.getLinkId());
					if (button.isEmpty())
						break;
					compMap.get("button").add(ButtonRes.toResponse(button.get()));
					break;
				case CB:
					Optional<Checkbox> checkbox = checkboxRepository.findById(component.getLinkId());
					if (checkbox.isEmpty())
						break;
					compMap.get("checkbox").add(CheckboxRes.toResponse(checkbox.get()));
					break;
				case DD:
					Optional<Dropdown> dropdownOpt = dropdownRepository.findById(component.getLinkId());
					if (dropdownOpt.isEmpty())
						break;
					Dropdown dropdown = dropdownOpt.get();
					List<ComponentValue> valuesList = valuesRepository.findByDropdown(dropdown, EntityState.ACTIVE);
					List<ValuesRes> valuesResList = new ArrayList<>();

					for (ComponentValue cValues : valuesList) {
						valuesResList.add(ValuesRes.toResponse(cValues));
					}
					compMap.get("dropdown").add(DropdownRes.toResponse(dropdown, valuesResList));
					break;
				default:
					throw new IllegalArgumentException("Invalid ComponentType");

			}
		}

		List<String> keys = new ArrayList<>(compMap.keySet());
		for (int i = 0; i < keys.size(); i++) {
			String key = keys.get(i);
			if (compMap.get(key).isEmpty()) {
				compMap.remove(key);
			}
		}

		return compMap;
	}

	//mes에 post api 요청
	@Override
	public Object requestPostToMes(String url, CardReqDto cardReqDto, CardType cardType) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		if (cardType == CardType.STA) {
			cardReqDto.setActionId(null);
		}
		if (cardReqDto.getActionId() != null)
			url += cardReqDto.getActionId();

		return webClient.post()
			.uri(url + "/1")
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
