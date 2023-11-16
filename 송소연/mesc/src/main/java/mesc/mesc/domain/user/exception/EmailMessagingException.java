package mesc.mesc.domain.user.exception;

import mesc.mesc.global.error.ErrorCode;
import mesc.mesc.global.error.exception.BusinessException;

public class EmailMessagingException extends BusinessException {
	public EmailMessagingException(String message) {
		super(message, ErrorCode.INTERNAL_SERVER_ERROR);
	}
}
