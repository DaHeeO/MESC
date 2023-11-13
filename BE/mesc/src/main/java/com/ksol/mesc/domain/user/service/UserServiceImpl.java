package com.ksol.mesc.domain.user.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.common.dto.response.JsonResponse;
import com.ksol.mesc.domain.user.dto.LoginReq;
import com.ksol.mesc.domain.user.dto.LoginResponseDto;
import com.ksol.mesc.domain.user.dto.SendEmailReq;
import com.ksol.mesc.domain.user.entity.User;
import com.ksol.mesc.domain.user.exception.EmailMessagingException;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mesc.global.config.jwt.JwtTokenProvider;
import com.ksol.mesc.global.config.jwt.TokenInfo;
import com.ksol.mesc.global.config.jwt.exception.InvalidTokenException;
import com.ksol.mesc.global.error.exception.MesServerException;

import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

	private final WebClient webClient;
	private final EmailService emailService;
	private final JwtTokenProvider jwtTokenProvider;
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	public LoginResponseDto forwardLoginRequest(LoginReq loginReq) {
		return webClient.post()
			.uri("/user/login")
			.contentType(MediaType.APPLICATION_JSON)
			.bodyValue(loginReq)
			.retrieve()
			.toEntity(LoginResponseDto.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody();
	}

	@Override
	public User findByEmail(String email) {
		return webClient.get()
			.uri("/user/findByEmail?email=" + email)
			.retrieve()
			.toEntity(User.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody();
	}

	@Override
	public TokenInfo recreateToken(HttpServletRequest request) {
		String refreshToken = jwtTokenProvider.resolveToken(request);
		log.info("refreshToken={}", refreshToken);
		if (refreshToken == null || !(jwtTokenProvider.validateToken(refreshToken)))
			throw new InvalidTokenException("Invalid Token");
		return webClient.post()
			.uri("/user/reissue")
			.header("Authorization", "Bearer " + refreshToken)
			.retrieve()
			.toEntity(TokenInfo.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody();

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
	public Object selectAllUser() {
		String accessToken = jwtAuthenticationFilter.getAccessToken();

		//2. 멤버 정보 mes 서버에 API 요청
		return webClient.get()
			.uri("/user/members")
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.retrieve()
			// .toEntity(GroupMemberResponse.class)
			.toEntity(JsonResponse.class)
			.block()
			.getBody()
			.getData();
	}

	@Override
	public User findById(Integer userId) {
		System.out.println("userId = " + userId);
		return webClient.get()
			.uri("/user/findById/" + userId)
			.retrieve()
			.toEntity(User.class)
			// .toEntity(User.class)
			.onErrorMap(e -> new MesServerException(e.getMessage()))
			.block()
			.getBody();
	}
}