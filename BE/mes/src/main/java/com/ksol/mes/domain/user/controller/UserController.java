package com.ksol.mes.domain.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mes.domain.user.dto.FindUserRes;
import com.ksol.mes.domain.user.dto.LoginReq;
import com.ksol.mes.domain.user.dto.SignUpReq;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.domain.user.service.UserService;
import com.ksol.mes.global.config.jwt.TokenInfo;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/mes/user")
@Tag(name = "user", description = "회원 API")
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	@Operation(summary = "회원가입 API", description = "입력된 이메일, 패스워드로 DB에 저장한다.")
	@PostMapping("/signup")
	public ResponseEntity<?> signup(
		@Parameter(description = "이메일, 패스워드", required = true) @RequestBody @Validated SignUpReq signUpReq) {
		userService.signUp(signUpReq);
		return ResponseEntity.ok().build();
	}

	@Operation(summary = "로그인 API", description = "입력된 이메일과 패스워드가 일치하는 지 검증한 뒤 로그인 토큰을 전달한다.")
	@PostMapping("/login")
	public ResponseEntity<?> login(
		@Parameter(description = "이메일, 패스워드", required = true) @RequestBody @Validated LoginReq loginReq) {
		TokenInfo tokenInfo = userService.login(loginReq);
		return ResponseEntity.ok(tokenInfo);
	}

	@Operation(summary = "이메일로 유저 찾기 API", description = "email로 사용자 정보를 찾아온다.")
	@GetMapping("/findByEmail")
	public ResponseEntity<?> findByEmail(@RequestParam String email) {
		FindUserRes findUserRes = userService.findByEmail(email);
		return ResponseEntity.ok(findUserRes);
	}

	@Operation(summary = "토큰 재발급 API", description = "입력된 refreshToken을 검증한 뒤 accessToken, refreshToken을 재발급해서 전달한다.")
	@PostMapping("/reissue")
	public ResponseEntity<?> recreateToken(HttpServletRequest request) {
		TokenInfo tokenInfo = userService.recreateToken(request);
		return ResponseEntity.ok(tokenInfo);
	}

	// 현재 로그인한 유저 id
	// => principal.getName()

}
