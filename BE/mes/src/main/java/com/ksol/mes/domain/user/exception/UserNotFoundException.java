package com.ksol.mes.domain.user.exception;

import com.ksol.mes.global.error.ErrorCode;
import com.ksol.mes.global.error.exception.BusinessException;

public class UserNotFoundException extends BusinessException {
	public UserNotFoundException(String message) {
		super(message, ErrorCode.USER_NOT_FOUND);
	}
}