package com.ksol.mesc.domain.action.controller;

import java.util.LinkedHashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.action.service.ActionService;
import com.ksol.mesc.domain.common.dto.response.CommonResponseDto;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/action")
public class ActionController {
	private final ActionService actionService;

	@Operation(summary = "액션맵 조회 API", description = "액션맵을 DB에서 조회한다.")
	@GetMapping
	public ResponseEntity<CommonResponseDto<?>> selectActionMap() {
		LinkedHashMap<String, Object> responseMap = actionService.selectActionMap();

		return ResponseEntity.ok(CommonResponseDto.success(responseMap));
	}

}
