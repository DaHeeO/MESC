package com.ksol.mes.domain.user.service;

import com.ksol.mes.domain.user.dto.LoginReq;
import com.ksol.mes.domain.user.dto.SignUpReq;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.global.config.jwt.TokenInfo;

public interface UserService {

	void signUp(SignUpReq signUpReq);

	TokenInfo login(LoginReq loginReq);

	User findByEmail(String name);
}
