package com.ksol.mesc.domain.common.dto.response;

import java.util.LinkedHashMap;

import lombok.Getter;

@Getter
public class JsonResponse<T> {
	private String statusCode;
	private String message;
	private LinkedHashMap<String, Object> data;
}