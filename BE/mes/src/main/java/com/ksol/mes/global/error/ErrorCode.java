package com.ksol.mes.global.error;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;

@Getter
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ErrorCode {
	// example
	// EMAIL_DUPLICATION(400, "M001", "Email is Duplication"),
	// LOGIN_INPUT_INVALID(400, "M002", "Login input is invalid");

	// User
	INVALID_TOKEN(400, "U001", "Invalid Token"),
	EXPIRED_TOKEN(409, "U002", "Expired Token"),
	ACCESS_DENIED(403, "U003", "Access Denied"),
	USER_NOT_FOUND(400, "U004", "User Not Found"),
	TOKEN_NOT_FOUND(400, "U005", "Token Not Found"),
	TOKEN_NOT_SAME(401, "U006", "Token Not Same"),
	TOKEN_NOT_EXISTS(400, "U007", "Token Not Exists"),

	// Common
	INVALID_INPUT_VALUE(400, "C001", "Invalid Input Value"),
	METHOD_NOT_ALLOWED(405, "C002", "Invalid Input Value"),
	ENTITY_NOT_FOUND(400, "C003", "Entity Not Found"),
	INTERNAL_SERVER_ERROR(500, "C004", "Server Error"),
	INVALID_TYPE_VALUE(400, "C005", "Invalid Type Value"),
	HANDLE_ACCESS_DENIED(403, "C006", "Access is Denied"),

	// SQL
	SQL_QUERY_ERROR(400, "S001", "Invalid Query");

	private final String code;
	private final String message;
	private final int status;

	ErrorCode(final int status, final String code, final String message) {
		this.status = status;
		this.message = message;
		this.code = code;
	}

}