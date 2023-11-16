package com.ksol.mes.domain.worker.controller;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mes.domain.common.dto.response.CommonResponseDto;
import com.ksol.mes.domain.worker.dto.request.WorkerDataRequestDto;
import com.ksol.mes.domain.worker.dto.request.WorkerQueryRequestDto;
import com.ksol.mes.domain.worker.dto.response.WorkerDataResponseDto;
import com.ksol.mes.domain.worker.dto.response.WorkerQueryResponseDto;
import com.ksol.mes.domain.worker.service.WorkerService;
import com.ksol.mes.global.error.exception.InvalidValueException;
import com.ksol.mes.global.util.jdbc.SQLErrorResponseDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/mes/worker")
@RequiredArgsConstructor
@Slf4j
public class WorkerController {

	private final WorkerService workerService;

	// @PostMapping("/query/{actionId}/{page}")
	@PostMapping("/query/{actionId}")
	public ResponseEntity<CommonResponseDto<?>> getQuery(
		// @PathVariable(required = true) Integer page,
		@PathVariable(required = true) Integer actionId,
		@RequestBody @Validated WorkerQueryRequestDto workerQueryRequestDto,
		BindingResult bindingResult) {
		checkValidates(bindingResult);
		String query = null;
		try {
			query = workerService.getQuery(actionId, workerQueryRequestDto.getConditions());
			// query = workerService.getQuery(actionId, workerQueryRequestDto.getConditions(), page);
		} catch (SQLException e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(CommonResponseDto.success(new SQLErrorResponseDto(e.getMessage())),
				HttpStatus.ACCEPTED);
		}
		WorkerQueryResponseDto responseDto = new WorkerQueryResponseDto(query);
		if (query != null) {
			return new ResponseEntity<>(CommonResponseDto.success(responseDto), HttpStatus.OK);
		}
		return new ResponseEntity<>(CommonResponseDto.success(responseDto), HttpStatus.ACCEPTED);
	}

	// @PostMapping("/data/{actionId}/{page}")
	@PostMapping("/data/{actionId}")
	public ResponseEntity<CommonResponseDto<?>> getData(
		// @PathVariable(required = true) Integer page,
		@PathVariable(required = true) Integer actionId,
		@RequestBody @Validated WorkerDataRequestDto workerDataRequestDto,
		BindingResult bindingResult) {
		checkValidates(bindingResult);
		WorkerDataResponseDto workerDataResponseDto = null;
		try {
			// Table table = workerService.getTable(actionId, workerDataRequestDto.getConditions());
			List<String> queryList = workerDataRequestDto.getQueryList();
			log.info("getQueryLis : {}", queryList);
			Map<String, Object> tableInfo = workerService.getTable(actionId, workerDataRequestDto.getConditions(),
				queryList);
			// Map<String, Object> tableInfo = workerService.getTable(actionId, workerDataRequestDto.getConditions(),
			// 	page, queryList);
			workerDataResponseDto = new WorkerDataResponseDto(tableInfo);
			log.info("workerResponseDto : {}", workerDataResponseDto);
		} catch (SQLException e) {
			log.debug(e.getMessage());
			return new ResponseEntity<>(CommonResponseDto.success(new SQLErrorResponseDto(e.getMessage())),
				HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(CommonResponseDto.success(workerDataResponseDto), HttpStatus.OK);
	}

	private static void checkValidates(BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			throw new InvalidValueException(bindingResult.getFieldError().getDefaultMessage());
		}
	}
}
