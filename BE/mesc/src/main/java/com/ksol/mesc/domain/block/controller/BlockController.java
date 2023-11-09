package com.ksol.mesc.domain.block.controller;

import java.util.LinkedHashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.block.dto.request.BlockReqDto;
import com.ksol.mesc.domain.block.service.BlockService;
import com.ksol.mesc.domain.card.dto.request.CardReq;
import com.ksol.mesc.domain.common.dto.response.CommonResponseDto;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/block")
@Slf4j
public class BlockController {
	private final BlockService blockService;

	@Operation(summary = "블록 추가 API", description = "새로운 블록을 DB에 저장한다.")
	@PostMapping("/admin")
	public ResponseEntity<CommonResponseDto<?>> addBlock(@Parameter(description = "블록명", required = true)
	@RequestBody BlockReqDto blockReqDto, Authentication authentication) {
		blockService.addBlockContent(blockReqDto);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	//
	@Operation(summary = "블록 내용 수정 API", description = "수정된 블록과 엮여 있는 정보를 DB에 저장한다.")
	@PatchMapping("/admin/{blockId}")
	public ResponseEntity<CommonResponseDto<?>> updateBlock(@Parameter(description = "블록 id", required = true)
	@PathVariable @Valid Integer blockId, @Parameter(description = "블록 정보")
	@RequestBody @Validated BlockReqDto blockReqDto) {
		blockService.updateBlockContent(blockId, blockReqDto);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "블록 내용 삭제 API", description = "수정된 블록과 엮여 있는 정보를 DB에 저장한다.")
	@DeleteMapping("/admin/{blockId}")
	public ResponseEntity<CommonResponseDto<?>> deleteBlock(@Parameter(description = "블록 id", required = true)
	@PathVariable @Valid Integer blockId, @Parameter(description = "블록 정보")
	@RequestBody @Validated BlockReqDto blockReqDto) {
		blockService.deleteBlockContent(blockId, blockReqDto);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "블록 조회 API", description = "요청한 블록과 엮여 있는 정보를 조회한다.")
	@PostMapping("/{blockId}")
	public ResponseEntity<CommonResponseDto<?>> selectBlock(
		@Parameter(description = "블록 id", required = true)
		@PathVariable @Valid Integer blockId,
		@Parameter(description = "카드 정보")
		@RequestBody @Validated CardReq cardReqDto,
		Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		LinkedHashMap<String, Object> responseMap = blockService.selectBlockInfo(blockId, cardReqDto, userId);

		return ResponseEntity.ok(CommonResponseDto.success(responseMap));
	}
}
