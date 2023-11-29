package com.ksol.mesc.domain.action.service;

import java.util.LinkedHashMap;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.common.dto.response.JsonResponse;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mesc.global.error.exception.MesServerException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ActionServiceImpl implements ActionService {
	private final WebClient webClient;
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	@Override
	public LinkedHashMap<String, Object> selectActionMap() {
		String accessToken = jwtAuthenticationFilter.getAccessToken();
		Object data = webClient.get()
			.uri("/admin/action")
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.retrieve()
			.toEntity(JsonResponse.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody()
			.getData();
		return (LinkedHashMap<String, Object>)data;
	}
}
