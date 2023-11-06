package com.ksol.mesc.domain.user.service;

import org.springframework.http.ResponseEntity;

import com.ksol.mesc.domain.group.dto.response.GroupMemberResponse;
import com.ksol.mesc.domain.user.dto.LoginReq;
import com.ksol.mesc.domain.user.dto.SendEmailReq;
import com.ksol.mesc.domain.user.entity.User;
import com.ksol.mesc.global.config.jwt.TokenInfo;

import jakarta.servlet.http.HttpServletRequest;

public interface UserService {
	TokenInfo forwardLoginRequest(LoginReq loginReq);

	User findByEmail(String email);

	void sendEmail(SendEmailReq sendEmailReq);

	TokenInfo recreateToken(HttpServletRequest request);

	ResponseEntity<GroupMemberResponse> selectAllUser();

	User findById(Integer userId);
}
