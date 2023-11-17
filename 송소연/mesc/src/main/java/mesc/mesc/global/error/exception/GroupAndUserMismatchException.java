package com.ksol.mesc.global.error.exception;

import com.ksol.mesc.global.error.ErrorCode;

public class GroupAndUserMismatchException extends BusinessException {
	public GroupAndUserMismatchException(String message) {
		super(message, ErrorCode.GROUP_AND_USER_MISMATCH);
	}
}
