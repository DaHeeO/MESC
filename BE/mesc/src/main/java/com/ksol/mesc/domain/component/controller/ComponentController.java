package com.ksol.mesc.domain.component.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.block.dto.request.ComponentListDto;
import com.ksol.mesc.domain.block.service.BlockService;
import com.ksol.mesc.domain.common.dto.response.CommonResponseDto;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/component")
public class ComponentController {
	private final BlockService blockService;

	@Operation(summary = "컴포넌트 추가 및 수정 API", description = "컴포넌트를 DB에 저장한다.")
	@PostMapping("/admin/{cardId}")
	public ResponseEntity<CommonResponseDto<?>> addComponentByCard(@Parameter(description = "카드 ID", required = true)
	@PathVariable @Valid Integer cardId, @Parameter(description = "컴포넌트 정보", required = true)
	@RequestBody @Validated ComponentListDto componentList) {
		blockService.addComponentByCard(cardId, componentList);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}
}
