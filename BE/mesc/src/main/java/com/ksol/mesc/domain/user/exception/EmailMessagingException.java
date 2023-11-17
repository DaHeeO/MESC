package com.ksol.mesc.domain.user.exception;

import com.ksol.mesc.global.error.ErrorCode;
import com.ksol.mesc.global.error.exception.BusinessException;

public class EmailMessagingException extends BusinessException {
	public EmailMessagingException(String message) {
		super(message, ErrorCode.INTERNAL_SERVER_ERROR);
	}
}
