package com.ksol.mesc.global.config.jwt.exception;

import mesc.mesc.global.error.ErrorCode;
import mesc.mesc.global.error.exception.BusinessException;

public class InvalidTokenException extends BusinessException {
	public InvalidTokenException(String message) {
		super(message, ErrorCode.INVALID_TOKEN);
	}
}
