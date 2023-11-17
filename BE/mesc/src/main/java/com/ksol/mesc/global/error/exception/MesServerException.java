package com.ksol.mesc.global.error.exception;

import com.ksol.mesc.global.error.ErrorCode;

public class MesServerException extends BusinessException {
	public MesServerException(String message) {
		super(message, ErrorCode.MES_SERVER_ERROR);
	}
}
