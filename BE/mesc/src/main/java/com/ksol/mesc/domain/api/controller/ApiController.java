package com.ksol.mesc.domain.api.controller;

import com.ksol.mesc.domain.api.dto.response.MessageResponseDto;
import com.ksol.mesc.domain.common.CommonResponseDto;
import com.ksol.mesc.domain.log.dto.request.LogRequestDto;
import com.ksol.mesc.domain.log.dto.response.LogResponseDto;
import com.ksol.mesc.global.error.exception.InvalidValueException;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class ApiController {

    @GetMapping("/start-message")
    public ResponseEntity<CommonResponseDto<MessageResponseDto>> getStartMessage (Authentication authentication) {
        String name = authentication.getName();
        String message = "안녕하세요! " + name + "님\n무엇을 도와드릴까요?? 아래 버튼을 눌러 원하시는 작업을 선택해주세요!!";

        MessageResponseDto messageDto = new MessageResponseDto(message);
        return new ResponseEntity<>(CommonResponseDto.success(messageDto), HttpStatus.OK);
    }
}
