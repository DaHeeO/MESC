package com.ksol.mes.global.config.jwt.exception;

import com.ksol.mes.global.error.ErrorCode;
import com.ksol.mes.global.error.exception.BusinessException;

public class TokenNotExistsException extends BusinessException {
	public TokenNotExistsException(String message) {
		super(message, ErrorCode.INVALID_TOKEN);
	}
}
