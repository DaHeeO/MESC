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

	//블록 추가
	public void addBlock(Block block) {
		blockRepository.save(block);
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

		for (Component component : componentList) {
			if (component.getComponentType() == ComponentType.BU) {    //Button
				Button button = buttonRepository.findByComponent(component);
				buttonList.add(ButtonRes.toResponse(button));
			} else if (component.getComponentType() == ComponentType.La) {    //Label
				Label label = labelRespository.findByComponent(component);
				labelList.add(LabelRes.toResponse(label));
			} else if (component.getComponentType() == ComponentType.CB) {
				Checkbox checkbox = checkboxRepository.findByComponent(component);
				checkboxList.add(CheckboxRes.toResponse(checkbox));
			} else if (component.getComponentType() == ComponentType.DD) {
				Dropdown dropdown = dropdownRepository.findByComponent(component);
				dropdownList.add(DropdownRes.toResponse(dropdown));
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
