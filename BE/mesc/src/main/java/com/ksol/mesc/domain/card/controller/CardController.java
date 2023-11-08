package com.ksol.mesc.domain.card.controller;

import java.security.Principal;
import java.util.LinkedHashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.block.dto.request.CardReqDto;
import com.ksol.mesc.domain.block.service.BlockService;
import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.card.service.CardService;
import com.ksol.mesc.domain.common.CommonResponseDto;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/card")
@RequiredArgsConstructor
public class CardController {
	private final CardService cardService;
	private final BlockService blockService;

	@Operation(summary = "카드 조회 API", description = "요청한 카드와 엮여 있는 정보를 조회한다.")
	@PostMapping("/{cardId}")
	public ResponseEntity<CommonResponseDto<?>> selectCard(@Parameter(description = "카드 id", required = true)
	@PathVariable @Valid Integer cardId, @Parameter(description = "카드 정보")
	@RequestBody @Valid CardReqDto cardReqDto, Principal principal) {
		Integer userId = Integer.parseInt(principal.getName());
		Card card = cardService.selectCard(cardId);

		//카드 번호가 존재하지 않을 때
		if (card == null)
			return ResponseEntity.badRequest().body(CommonResponseDto.error(400, "Don't exist cardId"));

		LinkedHashMap<String, Object> responseMap = blockService.selectCardByType(card, cardReqDto, userId);

		return ResponseEntity.ok(CommonResponseDto.success(responseMap));
	}
}
