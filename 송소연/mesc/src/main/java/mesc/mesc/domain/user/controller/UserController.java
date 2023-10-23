package mesc.mesc.domain.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import mesc.mesc.domain.user.dto.LoginReq;
import mesc.mesc.domain.user.dto.SendEmailReq;
import mesc.mesc.domain.user.dto.SignUpReq;
import mesc.mesc.domain.user.service.UserService;
import mesc.mesc.global.config.jwt.TokenInfo;

@RestController
@Slf4j
@RequestMapping("/api/user")
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

	@Operation(summary = "이메일 발송 API", description = "해당 이메일로 메일을 발송한다.")
	@PostMapping("/email")
	public ResponseEntity<?> sendEmail(
		@Parameter(description = "회원 이메일", required = true) @RequestBody @Validated SendEmailReq sendEmailReq) {
		userService.sendEmail(sendEmailReq.getEmails());
		return ResponseEntity.ok().build();
	}



}
