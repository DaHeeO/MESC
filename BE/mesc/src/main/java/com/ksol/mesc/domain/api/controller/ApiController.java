package com.ksol.mesc.domain.api.controller;

import com.ksol.mesc.domain.api.dto.request.DeveloperDataRequestDto;
import com.ksol.mesc.domain.api.dto.request.DeveloperQueryRequestDto;
import com.ksol.mesc.domain.api.dto.request.WorkerDataRequestDto;
import com.ksol.mesc.domain.api.dto.request.WorkerQueryRequestDto;
import com.ksol.mesc.domain.api.dto.response.DeveloperDataResponseDto;
import com.ksol.mesc.domain.api.dto.response.MessageResponseDto;
import com.ksol.mesc.domain.api.service.ApiService;
import com.ksol.mesc.domain.common.CommonResponseDto;
import com.ksol.mesc.domain.log.dto.request.LogRequestDto;
import com.ksol.mesc.domain.log.dto.response.LogResponseDto;
import com.ksol.mesc.domain.user.entity.User;
import com.ksol.mesc.domain.user.service.UserService;
import com.ksol.mesc.global.error.exception.InvalidValueException;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class ApiController {
    private final ApiService apiService;
    private final UserService userService;

    @GetMapping("/start-message")
    public ResponseEntity<CommonResponseDto<MessageResponseDto>> getStartMessage (Authentication authentication) {
        Integer userId = Integer.parseInt(authentication.getName());
        String name = userService.findById(userId).getRealName();
        String message = apiService.getStartMessage(name);
        MessageResponseDto messageDto = new MessageResponseDto(message);
        return new ResponseEntity<>(CommonResponseDto.success(messageDto), HttpStatus.OK);
    }

    @PostMapping("/developer/data")
    public ResponseEntity<CommonResponseDto> getDeveloperData (@RequestBody @Validated DeveloperDataRequestDto developerDataRequestDto, BindingResult bindingResult) {
        checkValidates(bindingResult);
        String query = developerDataRequestDto.getQuery();
        return apiService.getTableByQuery(query);
    }

    @PostMapping("/developer/query")
    public ResponseEntity<CommonResponseDto> getDeveloperQuery (@RequestBody @Validated DeveloperQueryRequestDto DeveloperQueryRequestDto, BindingResult bindingResult) {
        checkValidates(bindingResult);
        String query = DeveloperQueryRequestDto.getQuery();
        return apiService.getCountsByQuery(query);
    }

    @PostMapping("/worker/data/{actionId}")
    public ResponseEntity<CommonResponseDto> getWorkerData (@PathVariable(required = true) Integer actionId,
                                                            @RequestBody @Validated WorkerDataRequestDto workerDataRequestDto,
                                                            BindingResult bindingResult) {
        checkValidates(bindingResult);
        String conditions = workerDataRequestDto.getConditions();
        ResponseEntity<CommonResponseDto> tableByActionId = apiService.getTableByActionId(actionId, conditions);
        System.out.println("tableByActionId = " + tableByActionId);
        return tableByActionId;
    }

    @PostMapping("/worker/query/{actionId}")
    public ResponseEntity<CommonResponseDto> getWorkerQuery (@PathVariable(required = true) Integer actionId,
                                                             @RequestBody @Validated WorkerQueryRequestDto workerQueryRequestDto,
                                                             BindingResult bindingResult) {
        checkValidates(bindingResult);
        String conditions = workerQueryRequestDto.getConditions();
        return apiService.getCountsByActionId(actionId, conditions);
    }

    private static void checkValidates(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InvalidValueException(bindingResult.getFieldError().getDefaultMessage());
        }
    }
}
