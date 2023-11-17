package com.ksol.mes.global.config.jwt.exception;

import com.ksol.mes.global.error.ErrorCode;
import com.ksol.mes.global.error.exception.BusinessException;

public class TokenNotFoundException extends BusinessException {
	public TokenNotFoundException(String message) {
		super(message, ErrorCode.TOKEN_NOT_FOUND);
	}
}
