package com.ksol.mesc.domain.block.service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Optional;

import com.ksol.mesc.global.error.ErrorCode;
import com.ksol.mesc.global.error.exception.BusinessException;
import com.ksol.mesc.global.error.exception.MesServerException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.block.dto.request.BlockReqDto;
import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.block.repository.BlockRepository;
import com.ksol.mesc.domain.card.Card;
import com.ksol.mesc.domain.card.CardType;
import com.ksol.mesc.domain.card.dto.request.CardReq;
import com.ksol.mesc.domain.card.repository.CardRepository;
import com.ksol.mesc.domain.common.JsonResponse;
import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.entity.ComponentType;
import com.ksol.mesc.domain.component.repository.ComponentRepository;
import com.ksol.mesc.domain.component.type.button.Button;
import com.ksol.mesc.domain.component.type.button.ButtonRepository;
import com.ksol.mesc.domain.component.type.button.dto.ButtonRes;
import com.ksol.mesc.domain.component.type.checkbox.Checkbox;
import com.ksol.mesc.domain.component.type.checkbox.CheckboxRepository;
import com.ksol.mesc.domain.component.type.checkbox.dto.CheckboxRes;
import com.ksol.mesc.domain.component.type.directbutton.DirectButton;
import com.ksol.mesc.domain.component.type.directbutton.DirectButtonRepository;
import com.ksol.mesc.domain.component.type.directbutton.DirectButtonRes;
import com.ksol.mesc.domain.component.type.dropdown.Dropdown;
import com.ksol.mesc.domain.component.type.dropdown.DropdownRepository;
import com.ksol.mesc.domain.component.type.dropdown.dto.DropdownRes;
import com.ksol.mesc.domain.component.type.label.Label;
import com.ksol.mesc.domain.component.type.label.LabelRespository;
import com.ksol.mesc.domain.component.type.label.dto.LabelRes;
import com.ksol.mesc.domain.log.service.LogSerivce;
import com.ksol.mesc.domain.user.service.UserServiceImpl;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BlockService {
	private final BlockRepository blockRepository;
	private final CardRepository cardRepository;
	private final ComponentRepository componentRepository;
	private final ButtonRepository buttonRepository;
	private final LabelRespository labelRespository;
	private final CheckboxRepository checkboxRepository;
	private final DropdownRepository dropdownRepository;
	private final DirectButtonRepository directButtonRepository;

	private final JwtAuthenticationFilter jwtAuthenticationFilter;
	private final WebClient webClient;

	private final UserServiceImpl userService;
	private final LogSerivce logSerivce;

	//블록 추가
	public void addBlock(Block block) {
		blockRepository.save(block);
	}

	//블록 수정
	public void updateBlock(List<CardReq> cardReqList) {
		for (CardReq cardReq : cardReqList) {
			//카드가 존재하지 않으면 추가, 존재하면 카드 수정
			Optional<Card> cardOpt = cardRepository.findById(cardReq.getId());
			Card card = Card.toEntity(cardReq);
			Card newCard = cardRepository.save(card);
			log.info("newCard : {}", newCard);

			//컴포넌트 추가 혹은 수정
			// List<Component> componentList = cardReq.getComponentTypeReq().getComponentList();
			// List<Object> objectList = cardReq.getComponentTypeReq().getObjectList();
			//
			// Optional<Component> component = componentRepository.fi
		}

		return;
	}

	//블록 조회
	public LinkedHashMap<String, Object> selectBlockInfo(Integer blockId, BlockReqDto blockReqDto) {
		//블록 조회
		Block block = blockRepository.findById(blockId).orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
		LinkedHashMap<String, Object> objMap = new LinkedHashMap<>();

		objMap.put("blockId", block.getId());
		log.info("block={}", block);

		//블록과 연결된 카드 조회
		List<Card> cardList = cardRepository.findByBlockId(blockId);
		cardList.stream().forEach(c -> log.info("card={}", c));
		//카드 정보 저장
		List<LinkedHashMap<String, Object>> cardMapList = new ArrayList<>();

		//카드 조회
		for (Card card : cardList) {
			cardMapList.add(selectCardByType(card, blockReqDto));
		}

		objMap.put("cardList", cardMapList);
		return objMap;
	}

	//card type에 따른 조회
	public LinkedHashMap<String, Object> selectCardByType(Card card, BlockReqDto blockReqDto) {
		//카드 정보 저장
		LinkedHashMap<String, Object> cardMap = new LinkedHashMap<>();
		CardType cardType = card.getCardType();

		cardMap.put("cardId", card.getId());
		cardMap.put("cardType", card.getCardType());
		cardMap.put("content", card.getContent());

		if (cardType == CardType.QU) {    //query text
			cardMap.putAll((LinkedHashMap<String, Object>)requestPostToMes("/worker/query/", blockReqDto));
		} else if (cardType == CardType.TA) {    //table 조회
			cardMap.put("table", requestPostToMes("/worker/data/", blockReqDto));
		} else if (cardType == CardType.STA) {    //single table 조회
			cardMap.put("singleTable", requestPostToMes("/worker/data/", blockReqDto));
		} else if (cardType == CardType.RE) {    //보고
			cardMap.putAll((LinkedHashMap<String, Object>)userService.selectAllUser());
		} else if (cardType == CardType.LO) {    //로그

		} else if (cardType == CardType.DTX) {    // 동적 텍스트
			String content = card.getContent();
			cardMap.put("content", getDynamicString(content, card.getContentKey()));
			cardMap.put("cardType", CardType.TX);
		} else if (cardType.toString().startsWith(CardType.CH.toString())) {    // 일반 챗봇
			cardMap.put("title", card.getName());
		}

		//component 조회
		List<Component> componentList = componentRepository.findByCard(card);
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
		List<DirectButtonRes> directButtonList = new ArrayList<>();

		for (Component component : componentList) {
			if (component.getComponentType() == ComponentType.BU) {    //Button
				Optional<Button> button = buttonRepository.findById(component.getLinkId());
				if (button.isEmpty())
					continue;
				buttonList.add(ButtonRes.toResponse(button.get()));
			} else if (component.getComponentType() == ComponentType.LA) {    //Label
				Optional<Label> label = labelRespository.findById(component.getLinkId());
				if (label.isEmpty())
					continue;
				labelList.add(LabelRes.toResponse(label.get()));
			} else if (component.getComponentType() == ComponentType.CB) {    //Checkbox
				Optional<Checkbox> checkbox = checkboxRepository.findById(component.getLinkId());
				if (checkbox.isEmpty())
					continue;
				checkboxList.add(CheckboxRes.toResponse(checkbox.get()));
			} else if (component.getComponentType() == ComponentType.DD) {    //Dropdown
				Optional<Dropdown> dropdown = dropdownRepository.findById(component.getLinkId());
				if (dropdown.isEmpty())
					continue;
				dropdownList.add(DropdownRes.toResponse(dropdown.get()));
			} else if (component.getComponentType() == ComponentType.DB) {    //DirectButton
				Optional<DirectButton> directButton = directButtonRepository.findById(component.getLinkId());
				if (directButton.isEmpty())
					continue;
				directButtonList.add(DirectButtonRes.toResponse(directButton.get()));
			}
		}

		if (!buttonList.isEmpty())
			map.put("button", buttonList);
		if (!checkboxList.isEmpty())
			map.put("checkbox", checkboxList);
		if (!labelList.isEmpty())
			map.put("label", labelList);
		if (!dropdownList.isEmpty())
			map.put("dropdown", dropdownList);
		if (!directButtonList.isEmpty())
			map.put("directButton", directButtonList);

		return map;
	}

	//mes에 post api 요청
	public Object requestPostToMes(String url, BlockReqDto blockReqDto) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		if (blockReqDto.getActionId() != null)
			url += blockReqDto.getActionId();

		return webClient.post()
			.uri(url)
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.contentType(MediaType.APPLICATION_JSON)
			.body(BodyInserters.fromValue(blockReqDto))
			.retrieve()
			.toEntity(JsonResponse.class)
			// .toEntity(WorkerDataResponseDto.class)
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
		LinkedHashMap<String, Object> hashMap = (LinkedHashMap<String, Object>) data;
		return (String) hashMap.get(key);
	}
}
