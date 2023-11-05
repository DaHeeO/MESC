package com.ksol.mes.domain.worker.controller;

import com.ksol.mes.domain.common.CommonResponseDto;
import com.ksol.mes.global.error.ErrorCode;
import com.ksol.mes.global.error.exception.InvalidValueException;
import com.ksol.mes.global.util.jdbc.Table;
import com.ksol.mes.domain.worker.dto.request.WorkerDataRequestDto;
import com.ksol.mes.domain.worker.dto.request.WorkerQueryRequestDto;
import com.ksol.mes.domain.worker.dto.response.WorkerDataResponseDto;
import com.ksol.mes.domain.worker.dto.response.WorkerQueryResponseDto;
import com.ksol.mes.domain.worker.service.WorkerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/worker")
@RequiredArgsConstructor
@Slf4j
public class WorkerController {

    private final WorkerService workerService;

    @PostMapping("/query/{actionId}")
    public ResponseEntity<CommonResponseDto<WorkerQueryResponseDto>> getQuery(
            @PathVariable(required = true) Integer actionId,
            @RequestBody @Validated WorkerQueryRequestDto workerQueryRequestDto,
            BindingResult bindingResult) {
        checkValidates(bindingResult);
        String query = null;
        try {
            query = workerService.getQuery(actionId, workerQueryRequestDto.getConditions());
        } catch (SQLException e) {
            log.info(e.getMessage());
            return new ResponseEntity<>(CommonResponseDto.error(ErrorCode.SQL_QUERY_ERROR.getStatus(), e.getMessage()), HttpStatus.BAD_REQUEST);
        }
        WorkerQueryResponseDto responseDto = new WorkerQueryResponseDto(query);
        if (query != null) {
            return new ResponseEntity<>(CommonResponseDto.success(responseDto), HttpStatus.OK);
        }
        return new ResponseEntity<>(CommonResponseDto.success(responseDto), HttpStatus.NOT_FOUND);
    }

    @PostMapping("/data/{actionId}")
    public ResponseEntity<CommonResponseDto<WorkerDataResponseDto>> getData(
            @PathVariable(required = true) Integer actionId,
            @RequestBody @Validated WorkerDataRequestDto workerDataRequestDto,
            BindingResult bindingResult) {
        checkValidates(bindingResult);
        WorkerDataResponseDto workerDataResponseDto = null;
        try {
            Table table = workerService.getTable(actionId, workerDataRequestDto.getConditions());
            workerDataResponseDto = new WorkerDataResponseDto(table);
        } catch (SQLException e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(CommonResponseDto.error(ErrorCode.SQL_QUERY_ERROR.getStatus(), e.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(CommonResponseDto.success(workerDataResponseDto), HttpStatus.OK);
    }

    private static void checkValidates(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InvalidValueException(bindingResult.getFieldError().getDefaultMessage());
        }
    }
}
