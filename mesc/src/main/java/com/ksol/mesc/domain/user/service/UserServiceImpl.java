package com.ksol.mesc.domain.user.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.user.dto.LoginReq;
import com.ksol.mesc.domain.user.dto.SendEmailReq;
import com.ksol.mesc.domain.user.exception.EmailMessagingException;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

	private final WebClient webClient;
	private final EmailService emailService;

	public ResponseEntity<?> forwardLoginRequest(LoginReq loginReq) {
		return webClient.post()
						.uri("/user/login")
						.contentType(MediaType.APPLICATION_JSON)
						.bodyValue(loginReq)
						.retrieve()
						.toEntity(String.class)
						.block();
	}

	@Override
	public void sendEmail(SendEmailReq sendEmailReq) {
		try {
			emailService.sendEmail(sendEmailReq.getEmails(), sendEmailReq.getSubject(), sendEmailReq.getContent());
		} catch (MessagingException e) {
			throw new EmailMessagingException("Failed To Send Email");
		}
	}

}