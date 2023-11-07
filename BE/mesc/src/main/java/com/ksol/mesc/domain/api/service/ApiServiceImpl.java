package com.ksol.mesc.domain.api.service;

import com.ksol.mesc.domain.api.classes.Table;
import com.ksol.mesc.domain.api.dto.request.DeveloperDataRequestDto;
import com.ksol.mesc.domain.api.dto.request.DeveloperQueryRequestDto;
import com.ksol.mesc.domain.api.dto.request.WorkerDataRequestDto;
import com.ksol.mesc.domain.api.dto.request.WorkerQueryRequestDto;
import com.ksol.mesc.domain.api.dto.response.DeveloperDataResponseDto;
import com.ksol.mesc.domain.common.CommonResponseDto;
import com.ksol.mesc.domain.common.JsonResponse;
import com.ksol.mesc.domain.group.dto.response.GroupMemberResponse;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mesc.global.error.exception.MesServerException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.http.client.reactive.ClientHttpRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.LinkedHashMap;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ApiServiceImpl implements ApiService {

    private final WebClient webClient;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    @Override
    public String getStartMessage(String name) {
        return "안녕하세요! " + name + "님\n무엇을 도와드릴까요?? 아래 버튼을 눌러 원하시는 작업을 선택해주세요!!";
    }

    @Override
    public LinkedHashMap<String, Object> getTableByQuery(String query) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        Object data = webClient.post()
                .uri("/developer/data")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(new DeveloperDataRequestDto(query))
                .retrieve()
                .toEntity(JsonResponse.class)
                .onErrorMap(e -> new MesServerException(e.getMessage()))
                .block()
                .getBody()
                .getData();
        return (LinkedHashMap<String, Object>)data;
    }

    @Override
    public LinkedHashMap<String, Object> getCountsByQuery(String query) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        Object data = webClient.post()
                .uri("/developer/query")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(new DeveloperQueryRequestDto(query))
                .retrieve()
                .toEntity(JsonResponse.class)
                .onErrorMap(e -> {
                    log.error(e.getMessage() + "d");
                    return new MesServerException(e.getMessage());})
                .block()
                .getBody()
                .getData();
        return (LinkedHashMap<String, Object>)data;
    }

    @Override
    public LinkedHashMap<String, Object> getTableByActionId(Integer actionId, String conditions) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        Object data = webClient.post()
                .uri("/worker/data/" + actionId)
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(new WorkerDataRequestDto(conditions)), WorkerDataRequestDto.class)
                .retrieve()
                .toEntity(JsonResponse.class)
                .onErrorMap(e -> new MesServerException(e.getMessage()))
                .block()
                .getBody()
                .getData();
        return (LinkedHashMap<String, Object>)data;
    }

    @Override
    public LinkedHashMap<String, Object> getCountsByActionId(Integer actionId, String conditions) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        Object data = webClient.post()
                .uri("/worker/query/" + actionId)
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(new WorkerQueryRequestDto(conditions))
                .retrieve()
                .toEntity(JsonResponse.class)
                .onErrorMap(e -> new MesServerException(e.getMessage()))
                .block()
                .getBody()
                .getData();
        return (LinkedHashMap<String, Object>)data;
    }
}
