package com.ksol.mesc.domain.block.service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Optional;

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
	private final JwtAuthenticationFilter jwtAuthenticationFilter;
	private final WebClient webClient;
	private final ButtonRepository buttonRepository;
	private final LabelRespository labelRespository;
	private final CheckboxRepository checkboxRepository;
	private final DropdownRepository dropdownRepository;
	private final DirectButtonRepository directButtonRepository;

	//블록 추가
	public void addBlock(Block block) {
		blockRepository.save(block);
	}

	//블록 수정
	public void updateBlock() {
		return;
	}

	//블록 조회
	public LinkedHashMap<String, Object> selectBlockInfo(Integer blockId, BlockReqDto blockReqDto) {
		//블록 조회
		Optional<Block> blockOpt = blockRepository.findById(blockId);
		LinkedHashMap<String, Object> objMap = new LinkedHashMap<>();
		if (blockOpt.isEmpty())
			return null;

		// objMap.put("block", BlockInfoDto.toResponse(blockOpt.get()));
		objMap.put("blockId", blockOpt.get().getId());

		//블록과 연결된 카드 조회
		List<Card> cardList = cardRepository.findByBlockId(blockId);
		//카드 정보 저장
		List<LinkedHashMap<String, Object>> cardMapList = new ArrayList<>();

		//카드 조회
		for (Card card : cardList) {
			LinkedHashMap<String, Object> cardMap = new LinkedHashMap<>();
			CardType cardType = card.getCardType();

			cardMap.put("cardId", card.getId());
			cardMap.put("cardType", card.getCardType());
			cardMap.put("content", card.getContent());

			if (cardType == CardType.QU) {    //query text
				Object obj = requestPostToMes("/worker/query/", blockReqDto);
				log.info("type : {}", requestPostToMes("/worker/query/", blockReqDto).getClass());
				cardMap.putAll((LinkedHashMap<String, Object>)requestPostToMes("/worker/query/", blockReqDto));
			} else if (cardType == CardType.TA) {    //table 조회
				cardMap.put("table", requestPostToMes("/worker/data/", blockReqDto));
			}

			//component 조회
			List<Component> componentList = componentRepository.findByCard(card);
			cardMap.putAll(selectComponentByType(componentList));
			cardMapList.add(cardMap);
		}

		objMap.put("cardList", cardMapList);
		return objMap;
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

		return map;
	}

	//mes에 post api 요청
	public Object requestPostToMes(String url, BlockReqDto blockReqDto) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();

		return webClient.post()
			.uri(url + blockReqDto.getActionId())
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
}
