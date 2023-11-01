package com.ksol.mesc.global.config.jwt.exception;

import com.ksol.mesc.global.error.ErrorCode;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CustomJwtException extends RuntimeException {
	ErrorCode errorCode;
}
