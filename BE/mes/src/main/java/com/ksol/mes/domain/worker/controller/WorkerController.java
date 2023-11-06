package com.ksol.mes.domain.worker.controller;

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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mes/worker")
@RequiredArgsConstructor
@Slf4j
public class WorkerController {

    private final WorkerService workerService;

    @PostMapping("/query/{actionId}")
    public ResponseEntity<WorkerQueryResponseDto> getQuery(
            @PathVariable(required = true) Integer actionId,
            @RequestBody @Validated WorkerQueryRequestDto workerQueryRequestDto) {
        String query = workerService.getQuery(actionId, workerQueryRequestDto.getConditions());
        WorkerQueryResponseDto responseDto = new WorkerQueryResponseDto(query);
        if (query != null) {
            return new ResponseEntity<>(responseDto, HttpStatus.OK);
        }
        return new ResponseEntity<>(responseDto, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/data/{actionId}")
    public ResponseEntity<WorkerDataResponseDto> getData(
            @PathVariable(required = true) Integer actionId,
            @RequestBody @Validated WorkerDataRequestDto workerDataRequestDto) {
        WorkerDataResponseDto workerDataResponseDto = null;
        try {
            Table table = workerService.getTable(actionId, workerDataRequestDto.getConditions());
            log.info("table : {}", table);
            workerDataResponseDto = new WorkerDataResponseDto(table);
            log.info("workerDataResponseDto : {}", workerDataResponseDto);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(workerDataResponseDto, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(workerDataResponseDto, HttpStatus.OK);
    }
}
