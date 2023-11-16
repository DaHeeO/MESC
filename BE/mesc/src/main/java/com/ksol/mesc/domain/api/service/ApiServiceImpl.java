package com.ksol.mesc.domain.api.service;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.api.dto.request.DeveloperCommitRequestDto;
import com.ksol.mesc.domain.api.dto.request.DeveloperDataRequestDto;
import com.ksol.mesc.domain.api.dto.request.DeveloperQueryRequestDto;
import com.ksol.mesc.domain.api.dto.request.WorkerDataRequestDto;
import com.ksol.mesc.domain.api.dto.request.WorkerQueryRequestDto;
import com.ksol.mesc.domain.common.dto.response.JsonResponse;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mesc.global.error.exception.MesServerException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ApiServiceImpl implements ApiService {

	private final WebClient webClient;
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	@Override
	public String getStartMessage(String name) {
		return "안녕하세요! " + name + "님\n무엇을 도와드릴까요?\n버튼을 눌러 원하시는 작업을 선택해주세요!";
	}

	@Override
	public LinkedHashMap<String, Object> getTableByQuery(String query, Integer page, List<String> queryList) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();

		Object data = webClient.post()
			// .uri("/developer/data")
			.uri("/developer/data/" + page)
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.contentType(MediaType.APPLICATION_JSON)
			.bodyValue(new DeveloperDataRequestDto(query, queryList))
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
			.bodyValue(new DeveloperQueryRequestDto(query, null))
			.retrieve()
			.toEntity(JsonResponse.class)
			.onErrorMap(e -> {
				log.error(e.getMessage() + "d");
				return new MesServerException(e.getMessage());
			})
			.block()
			.getBody()
			.getData();
		log.info("webclient 끝 : {}", data);
		return (LinkedHashMap<String, Object>)data;
	}

	@Override
	public LinkedHashMap<String, Object> getTableByActionId(Integer actionId, String conditions, Integer page,
		List<String> queryList) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		Object data = webClient.post()
			.uri("/worker/data/" + actionId + "/" + page)
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.contentType(MediaType.APPLICATION_JSON)
			.body(Mono.just(new WorkerDataRequestDto(conditions, queryList)), WorkerDataRequestDto.class)
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

	@Override
	public LinkedHashMap<String, Object> getTableByQueryRollback(String query, Integer page) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		Object data = webClient.post()
			.uri("/developer/query/rollback/" + page)
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.contentType(MediaType.APPLICATION_JSON)
			.bodyValue(new DeveloperQueryRequestDto(query, null))
			.retrieve()
			.toEntity(JsonResponse.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody()
			.getData();
		return (LinkedHashMap<String, Object>)data;
	}

	@Override
	public LinkedHashMap<String, Object> commit(List<String> queryList) {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		Object data = webClient.post()
			.uri("/developer/commit")
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.contentType(MediaType.APPLICATION_JSON)
			.bodyValue(new DeveloperCommitRequestDto(queryList))
			.retrieve()
			.toEntity(JsonResponse.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody()
			.getData();
		return (LinkedHashMap<String, Object>)data;
	}

}
