package com.ksol.mesc.global.config.jwt.exception;

import com.ksol.mesc.global.error.ErrorCode;
import com.ksol.mesc.global.error.exception.BusinessException;

import lombok.Getter;

@Getter
public class ExpiredTokenException extends BusinessException {
	public ExpiredTokenException(String message) {
		super(message, ErrorCode.EXPIRED_TOKEN);
	}
}
