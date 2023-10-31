// package com.ksol.mesc.domain.user.service;
//
// import org.springframework.http.MediaType;
// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;
// import org.springframework.web.reactive.function.client.WebClient;
//
// import com.ksol.mesc.domain.user.dto.LoginReq;
//
// import lombok.RequiredArgsConstructor;
// import lombok.extern.slf4j.Slf4j;
//
// @Service
// @Transactional(readOnly = true)
// @RequiredArgsConstructor
// @Slf4j
// public class UserServiceImpl implements UserService {
//
// 	private final WebClient webClient;
//
// 	public ResponseEntity<?> forwardLoginRequest(LoginReq loginReq) {
// 		return webClient.post()
// 			.uri("/user/login")
// 			.contentType(MediaType.APPLICATION_JSON)
// 			.bodyValue(loginReq)
// 			.retrieve()
// 			.toEntity(String.class)
// 			.block();
// 	}
//
// }