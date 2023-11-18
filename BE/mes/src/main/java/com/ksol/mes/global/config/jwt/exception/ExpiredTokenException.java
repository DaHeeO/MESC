package com.ksol.mes.global.config.jwt.exception;

import com.ksol.mes.global.error.ErrorCode;
import com.ksol.mes.global.error.exception.BusinessException;

public class ExpiredTokenException extends BusinessException {
	public ExpiredTokenException(String message) {
		super(message, ErrorCode.EXPIRED_TOKEN);
	}
}
