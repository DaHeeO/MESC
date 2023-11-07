package com.ksol.mes.domain.developer.controller;

import com.ksol.mes.domain.common.CommonResponseDto;
import com.ksol.mes.domain.developer.dto.request.DeveloperDataRequestDto;
import com.ksol.mes.domain.developer.dto.request.DeveloperQueryRequestDto;
import com.ksol.mes.domain.developer.dto.response.DeveloperDataResponseDto;
import com.ksol.mes.domain.developer.dto.response.DeveloperQueryResponseDto;
import com.ksol.mes.global.util.jdbc.SQLErrorResponseDto;
import com.ksol.mes.domain.developer.service.DeveloperService;
import com.ksol.mes.global.error.ErrorCode;
import com.ksol.mes.global.error.exception.InvalidValueException;
import com.ksol.mes.global.util.jdbc.Table;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/mes/developer")
@RequiredArgsConstructor
@Slf4j
public class DeveloperController {

    private final DeveloperService developerService;

    @PostMapping("/data")
    public ResponseEntity<CommonResponseDto<?>> getData (@RequestBody @Validated DeveloperDataRequestDto developerDataRequestDto, BindingResult bindingResult) {
        checkValidates(bindingResult);
        DeveloperDataResponseDto developerDataResponseDto;

        try {
            Table table = developerService.getTable(developerDataRequestDto.getQuery());
            developerDataResponseDto = new DeveloperDataResponseDto(table);
        } catch (SQLException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(CommonResponseDto.success(new SQLErrorResponseDto(e.getMessage())), HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(CommonResponseDto.success(developerDataResponseDto), HttpStatus.OK);
    }

    @PostMapping("/query")
    public ResponseEntity<CommonResponseDto<?>> executeQuery (@RequestBody @Validated DeveloperQueryRequestDto developerQueryRequestDto, BindingResult bindingResult) {
        checkValidates(bindingResult);
        DeveloperQueryResponseDto developerUpdateResponseDto = new DeveloperQueryResponseDto();
        try {
            Integer modifiedCount = developerService.executeQuery(developerQueryRequestDto.getQuery());
            developerUpdateResponseDto.setModifiedCount(modifiedCount);
        } catch (SQLException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(CommonResponseDto.success(new SQLErrorResponseDto(e.getMessage())), HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(CommonResponseDto.success(developerUpdateResponseDto), HttpStatus.OK);
    }

    private static void checkValidates(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InvalidValueException(bindingResult.getFieldError().getDefaultMessage());
        }
    }
}
