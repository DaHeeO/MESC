package com.ksol.mesc.domain.user.service;

import org.springframework.http.ResponseEntity;

import com.ksol.mesc.domain.user.dto.LoginReq;
import com.ksol.mesc.domain.user.dto.SendEmailReq;

public interface UserService {
	ResponseEntity<?> forwardLoginRequest(LoginReq loginReq);

	void sendEmail(SendEmailReq sendEmailReq);
}
