package com.ksol.mesc.domain.component.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.block.dto.request.ComponentListDto;
import com.ksol.mesc.domain.block.service.BlockService;
import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.common.dto.response.CommonResponseDto;
import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.service.ComponentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/component")
public class ComponentController {
	private final BlockService blockService;
	private final ComponentService componentService;

	@Operation(summary = "컴포넌트 추가 및 수정 API", description = "컴포넌트를 DB에 저장한다.")
	@PostMapping("/admin/{cardId}")
	public ResponseEntity<CommonResponseDto<?>> addComponentByCard(@Parameter(description = "카드 ID", required = true)
	@PathVariable @Valid Integer cardId, @Parameter(description = "컴포넌트 정보", required = true)
	@RequestBody @Validated ComponentListDto componentList) {
		blockService.addComponentByCard(cardId, componentList);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "컴포넌트 삭제 API", description = "해당 컴포넌트를 삭제한다.")
	@DeleteMapping("/admin/{cardId}/{componentId}")
	public ResponseEntity<CommonResponseDto<?>> deleteComponentByCard(@Parameter(description = "카드 ID", required = true)
	@PathVariable @Valid Integer cardId, @Parameter(description = "컴포넌트 ID", required = true)
	@PathVariable @Valid Integer componentId) {
		//컴포넌트 존재 확인
		//존재하면 삭제 -> 연관된 것도 삭제
		Component component = componentService.deleteComponentById(componentId);
		blockService.updateComponentEntityByType(component);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}
}
