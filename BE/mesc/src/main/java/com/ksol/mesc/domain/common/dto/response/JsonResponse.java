package com.ksol.mesc.domain.common.dto.response;

import lombok.Getter;

@Getter
public class JsonResponse<T> {
	private String statusCode;
	private String message;
	private T data;
}