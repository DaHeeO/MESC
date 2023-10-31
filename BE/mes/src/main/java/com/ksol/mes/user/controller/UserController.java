package com.ksol.mes.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mes.developer.dto.request.DeveloperDataRequestDto;
import com.ksol.mes.developer.dto.response.DeveloperDataResponseDto;
import com.ksol.mes.user.User;
import com.ksol.mes.user.dto.request.UserReq;
import com.ksol.mes.user.dto.response.UserResponse;
import com.ksol.mes.user.service.UserService;
import com.ksol.mes.util.jdbc.Table;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/mes/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {
	private final UserService userService;

	@PostMapping
	public ResponseEntity<?> getUsers (@RequestBody @Validated UserReq userReq) {
		List<User> userList = null;

		try {
			userList = userService.getUser(userReq);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

		UserResponse userResponse = UserResponse.builder()
			.userList(userList)
			.build();

		return new ResponseEntity<>(userResponse, HttpStatus.OK);
	}
}
