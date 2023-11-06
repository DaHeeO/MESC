package com.ksol.mes.domain.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.ksol.mes.domain.user.dto.request.LoginReq;
import com.ksol.mes.domain.user.dto.request.SignUpReq;
import com.ksol.mes.domain.user.dto.request.UserReq;
import com.ksol.mes.domain.user.dto.response.GroupMemberResponse;
import com.ksol.mes.domain.user.dto.response.UserResponse;
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
		UserResponse findUser = userService.findByEmail(email);
		return ResponseEntity.ok(findUser);
	}

	@Operation(summary = "User ID로 유저 찾기 API", description = "USER ID로 사용자 정보를 찾아온다.")
	@GetMapping("/findById/{userId}")
	public ResponseEntity<?> findById(@PathVariable Integer userId) {
		System.out.println("userId = " + userId);
		UserResponse findUser = userService.findById(userId);
		return ResponseEntity.ok(findUser);
	}

	@Operation(summary = "토큰 재발급 API", description = "입력된 refreshToken을 검증한 뒤 accessToken, refreshToken을 재발급해서 전달한다.")
	@PostMapping("/reissue")
	public ResponseEntity<?> recreateToken(HttpServletRequest request) {
		TokenInfo tokenInfo = userService.recreateToken(request);
		return ResponseEntity.ok(tokenInfo);
	}

	// 현재 로그인한 유저 id
	// => principal.getName()

	@Operation(summary = "그룹 멤버 조회 API", description = "그룹에 있는 멤버 정보를 조회 후, 전달한다.")
	@PostMapping
	public ResponseEntity<?> getGroupMembers(
		@Parameter(description = "그룹 멤버 id 리스트", required = true) @RequestBody @Validated UserReq userReq) {
		//유저 정보 확인

		List<UserResponse> userList = null;

		try {
			userList = userService.getGroupMembers(userReq);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

		GroupMemberResponse groupMemberResponse = GroupMemberResponse.builder()
																	 .userList(userList)
																	 .build();

		return new ResponseEntity<>(groupMemberResponse, HttpStatus.OK);
	}

	@Operation(summary = "멤버 전체 조회 API", description = "모든 멤버 정보를 조회 후, 전달한다.")
	@GetMapping("/members")
	public ResponseEntity<?> getUsers() {
		//유저 정보 확인

		List<UserResponse> userList = null;

		try {
			userList = userService.getUsers();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

		GroupMemberResponse groupMemberResponse = GroupMemberResponse.builder()
																	 .userList(userList)
																	 .build();

		return new ResponseEntity<>(groupMemberResponse, HttpStatus.OK);
	}
}
