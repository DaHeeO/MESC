package com.ksol.mesc.global.error.exception;

import com.ksol.mesc.global.error.ErrorCode;

public class GroupNotFoundException extends BusinessException {
	public GroupNotFoundException(String message) {
		super(message, ErrorCode.GROUP_NOT_FOUND);
	}
}
