package com.ksol.mes.domain.admin.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mes.domain.admin.dto.ActionMapDto;
import com.ksol.mes.domain.admin.dto.ActionMapRes;
import com.ksol.mes.domain.admin.service.ActionMapService;
import com.ksol.mes.domain.common.dto.response.CommonResponseDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/mes/admin/action")
@RequiredArgsConstructor
@Slf4j
public class ActionMapController {
	private final ActionMapService actionMapService;

	@GetMapping
	public ResponseEntity<CommonResponseDto<?>> selectActionMap() {
		List<ActionMapDto> actionMapList = actionMapService.selectActionMap();
		ActionMapRes actionMapRes = new ActionMapRes(actionMapList);
		return ResponseEntity.ok(CommonResponseDto.success(actionMapRes));
	}
}
