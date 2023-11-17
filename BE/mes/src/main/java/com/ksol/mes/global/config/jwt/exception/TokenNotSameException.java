package com.ksol.mes.global.config.jwt.exception;

import com.ksol.mes.global.error.ErrorCode;
import com.ksol.mes.global.error.exception.BusinessException;

public class TokenNotSameException extends BusinessException {
	public TokenNotSameException(String message) {
		super(message, ErrorCode.INVALID_TOKEN);
	}
}
