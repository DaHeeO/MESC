package com.ksol.mesc.domain.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.common.CommonResponseDto;
import com.ksol.mesc.domain.user.dto.LoginReq;
import com.ksol.mesc.domain.user.dto.SendEmailReq;
import com.ksol.mesc.domain.user.service.UserService;
import com.ksol.mesc.global.config.jwt.TokenInfo;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/mesc/user")
@Tag(name = "user", description = "회원 API")
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	@Operation(summary = "로그인 API", description = "입력된 이메일과 패스워드가 일치하는 지 검증한 뒤 로그인 토큰을 전달한다.")
	@PostMapping("/login")
	public ResponseEntity<?> login(
		@Parameter(description = "이메일, 패스워드", required = true) @RequestBody @Validated LoginReq loginReq) {
		TokenInfo tokenInfo = userService.forwardLoginRequest(loginReq);
		return ResponseEntity.ok(tokenInfo);
	}

	@Operation(summary = "토큰 재발급 API", description = "입력된 refreshToken을 검증한 뒤 mes에 API 요청을 해 새로운 토큰을 발급받는다.")
	@PostMapping("/reissue")
	public ResponseEntity<?> recreateToken(HttpServletRequest request) {
		TokenInfo tokenInfo = userService.recreateToken(request);
		return ResponseEntity.ok(tokenInfo);
	}

	// @Operation(summary = "이메일 발송 API", description = "해당 이메일로 메일을 발송한다.")
	// @PostMapping("/email")
	// public ResponseEntity<?> sendEmail(
	// 	@Parameter(description = "회원 이메일", required = true) @RequestBody @Validated SendEmailReq sendEmailReq, Principal principal) {
	// 	log.debug("principal.toString={}", principal.toString());
	// 	log.debug("principal.getName()={}", principal.getName());
	// 	int id = Integer.parseInt(principal.getName());
	// 	log.debug("id={}", id);
	// 	int id2 = id+100;
	// 	log.debug("id={}", id2);
	// 	userService.sendEmail(sendEmailReq);
	// 	return ResponseEntity.ok().build();
	// }

	@Operation(summary = "이메일 발송 API", description = "해당 이메일로 메일을 발송한다.")
	@PostMapping("/email")
	public ResponseEntity<?> sendEmail(
		@Parameter(description = "회원 이메일", required = true) @RequestBody @Validated SendEmailReq sendEmailReq,
		Authentication authentication) {
		log.info("authentication={}", authentication);
		log.info("authentication.getAuthorities={}", authentication.getAuthorities());
		// int id = Integer.parseInt(authentication.getPrincipal().);
		// log.debug("id={}", id);
		// int id2 = id+100;
		// log.debug("id={}", id2);
		userService.sendEmail(sendEmailReq);
		return ResponseEntity.ok().build();
	}

	@Operation(summary = "전체 멤버 연락처 조회 API", description = "전체 멤버 연락처 정보를 DB에서 조회한다.")
	@GetMapping("/members")
	public ResponseEntity<CommonResponseDto<?>> selectAllUser() {
		// GroupMemberResponse groupMemberResponse = userService.selectAllUser().getBody();
		// return ResponseEntity.ok(CommonResponseDto.success(groupMemberResponse));
		Object object = userService.selectAllUser();
		return ResponseEntity.ok(CommonResponseDto.success(object));
	}
}
