package com.ksol.mes.domain.user.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mes.domain.user.dto.request.LoginReq;
import com.ksol.mes.domain.user.dto.request.SignUpReq;
import com.ksol.mes.domain.user.dto.response.GroupMemberResponse;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.domain.user.service.UserService;
import com.ksol.mes.global.config.jwt.TokenInfo;
import com.ksol.mes.domain.user.dto.request.UserReq;
import com.ksol.mes.domain.user.dto.response.UserResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
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

	// 현재 로그인한 유저 정보를 찾아온다.
	public User loginUser(Principal principal) {
		return userService.findByEmail(principal.getName());
	}

	@Operation(summary = "그룹 멤버 조회 API", description = "그룹에 있는 멤버 정보를 조회 후, 전달한다.")
	@PostMapping
	public ResponseEntity<?> getUsers (@Parameter(description = "그룹 멤버 id 리스트", required = true) @RequestBody @Validated UserReq userReq) {
		//유저 정보 확인
		
		List<UserResponse> userList = null;

		try {
			userList = userService.getUser(userReq);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

		GroupMemberResponse groupMemberResponse = GroupMemberResponse.builder()
			.userList(userList)
			.build();

		return new ResponseEntity<>(groupMemberResponse, HttpStatus.OK);
	}
}
