package com.ksol.mes.domain.developer.controller;

import com.ksol.mes.domain.developer.dto.request.DeveloperDataRequestDto;
import com.ksol.mes.domain.developer.dto.request.DeveloperQueryRequestDto;
import com.ksol.mes.domain.developer.dto.response.DeveloperDataResponseDto;
import com.ksol.mes.domain.developer.dto.response.DeveloperQueryResponseDto;
import com.ksol.mes.domain.developer.service.DeveloperService;
import com.ksol.mes.global.util.jdbc.Table;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/developer")
@RequiredArgsConstructor
@Slf4j
public class DeveloperController {

    private final DeveloperService developerService;

    private final static String SUCCESS = "SUCCESS";
    private final static String FAIL = "FAIL";

    @PostMapping("/data")
    public ResponseEntity<DeveloperDataResponseDto> getData (@RequestBody @Validated DeveloperDataRequestDto developerDataRequestDto) {
        DeveloperDataResponseDto developerDataResponseDto = null;
        try {
            Table table = developerService.getTable(developerDataRequestDto.getQuery());
            developerDataResponseDto = new DeveloperDataResponseDto(table);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(developerDataResponseDto, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(developerDataResponseDto, HttpStatus.OK);
    }

    @PostMapping("/query")
    public ResponseEntity<DeveloperQueryResponseDto> executeQuery (@RequestBody @Validated DeveloperQueryRequestDto developerQueryRequestDto) {
        DeveloperQueryResponseDto developerUpdateResponseDto = new DeveloperQueryResponseDto();
        try {
            Integer modifiedCount = developerService.executeQuery(developerQueryRequestDto.getQuery());
            developerUpdateResponseDto.setModifiedCount(modifiedCount);
        } catch (SQLException e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(developerUpdateResponseDto, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(developerUpdateResponseDto, HttpStatus.OK);
    }
}
