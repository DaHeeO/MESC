package com.ksol.mesc.worker.controller;

import com.ksol.mesc.worker.dto.request.WorkerQueryRequestDto;
import com.ksol.mesc.worker.service.WorkerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/worker")
@RequiredArgsConstructor
@Slf4j
public class WorkerController {

    private final WorkerService workerService;

    @PostMapping("/query/{actionId}")
    public ResponseEntity<String> getQuery(
            @PathVariable(required = true) Integer actionId,
            @RequestBody @Validated WorkerQueryRequestDto workerQueryRequestDto) {
        String query = workerService.getQuery(actionId, workerQueryRequestDto.getConditions());
        if (query != null) {
            return new ResponseEntity<>(query, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
