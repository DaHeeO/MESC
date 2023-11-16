package mesc.mesc.global.config.jwt.exception;

import mesc.mesc.global.error.ErrorCode;
import mesc.mesc.global.error.exception.BusinessException;

public class ExpiredTokenException extends BusinessException {
	public ExpiredTokenException(String message) {
		super(message, ErrorCode.EXPIRED_TOKEN);
	}
}
