package com.ksol.mesc.domain.user.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.group.dto.response.GroupMemberResponse;
import com.ksol.mesc.domain.user.dto.LoginReq;
import com.ksol.mesc.domain.user.dto.SendEmailReq;
import com.ksol.mesc.domain.user.exception.EmailMessagingException;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;

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
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

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

	@Override
	public ResponseEntity<GroupMemberResponse> selectAllUser() {
		String accessToken = jwtAuthenticationFilter.getAccessToken();

		//2. 멤버 정보 mes 서버에 API 요청
		return webClient.get()
			.uri("/user/members")
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.retrieve()
			.toEntity(GroupMemberResponse.class)
			.block();
	}
}
