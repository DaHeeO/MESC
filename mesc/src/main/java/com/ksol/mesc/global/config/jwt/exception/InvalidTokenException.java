package com.ksol.mesc.global.config.jwt.exception;

import com.ksol.mesc.global.error.ErrorCode;
import com.ksol.mesc.global.error.exception.BusinessException;

public class InvalidTokenException extends BusinessException {
	public InvalidTokenException(String message) {
		super(message, ErrorCode.INVALID_TOKEN);
	}
}
