package com.ksol.mes.domain.user.service;

import com.ksol.mes.domain.user.dto.FindUserRes;
import com.ksol.mes.domain.user.dto.LoginReq;
import com.ksol.mes.domain.user.dto.SignUpReq;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.global.config.jwt.TokenInfo;

import jakarta.servlet.http.HttpServletRequest;

public interface UserService {

	void signUp(SignUpReq signUpReq);

	TokenInfo login(LoginReq loginReq);

	TokenInfo recreateToken(HttpServletRequest request);

	FindUserRes findByEmail(String email);
}
