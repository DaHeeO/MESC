package mesc.mesc.domain.user.exception;

import mesc.mesc.global.error.ErrorCode;
import mesc.mesc.global.error.exception.BusinessException;

public class UserNotFoundException extends BusinessException {
	public UserNotFoundException(String message) {
		super(message, ErrorCode.USER_NOT_FOUND);
	}
}