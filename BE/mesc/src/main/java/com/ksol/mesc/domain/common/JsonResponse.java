package com.ksol.mesc.domain.common;

import lombok.Getter;

@Getter
public class JsonResponse<T> {
	private String statusCode;
	private String message;
	private T data;
}