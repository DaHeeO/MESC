package com.ksol.mesc.developer.controller;

import com.ksol.mesc.developer.dto.request.DeveloperDataRequestDto;
import com.ksol.mesc.developer.dto.response.DeveloperDataResponseDto;
import com.ksol.mesc.developer.service.DeveloperService;
import com.ksol.mesc.util.jdbc.Table;
import com.ksol.mesc.worker.service.WorkerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/developer")
@RequiredArgsConstructor
@Slf4j
public class DeveloperController {

    private final DeveloperService developerService;

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
}
