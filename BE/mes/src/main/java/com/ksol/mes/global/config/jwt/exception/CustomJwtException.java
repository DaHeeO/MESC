package com.ksol.mes.global.config.jwt.exception;

import com.ksol.mes.global.error.ErrorCode;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CustomJwtException extends RuntimeException {
	ErrorCode errorCode;
}
