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
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<CommonResponseDto> getTableByQuery(String query) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        return webClient.post()
                .uri("/developer/data")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .bodyValue(new DeveloperDataRequestDto(query))
                .retrieve()
                .toEntity(CommonResponseDto.class)
                .block();
    }

    @Override
    public ResponseEntity<CommonResponseDto> getCountsByQuery(String query) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        return webClient.post()
                .uri("/developer/query")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .bodyValue(new DeveloperQueryRequestDto(query))
                .retrieve()
                .toEntity(CommonResponseDto.class)
                .block();
    }

    @Override
    public ResponseEntity<CommonResponseDto> getTableByActionId(Integer actionId, String conditions) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        return webClient.post()
                .uri("/worker/data/" + actionId)
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .body(Mono.just(new WorkerDataRequestDto(conditions)), WorkerDataRequestDto.class)
                .retrieve()
                .toEntity(CommonResponseDto.class)
                .block();
    }

    @Override
    public ResponseEntity<CommonResponseDto> getCountsByActionId(Integer actionId, String conditions) {
        String accessToken = jwtAuthenticationFilter.getAccessToken();
        return webClient.post()
                .uri("/worker/query/" + actionId)
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .bodyValue(new WorkerQueryRequestDto(conditions))
                .retrieve()
                .toEntity(CommonResponseDto.class)
                .block();
    }

}
