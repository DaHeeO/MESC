package com.ksol.mes.domain.user.service;

import java.util.List;

import com.ksol.mes.domain.user.dto.request.LoginReq;
import com.ksol.mes.domain.user.dto.request.SignUpReq;
import com.ksol.mes.domain.user.dto.request.UserReq;
import com.ksol.mes.domain.user.dto.response.UserResponse;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.global.config.jwt.TokenInfo;

public interface UserService {

	void signUp(SignUpReq signUpReq);

	TokenInfo login(LoginReq loginReq);

	User findByEmail(String name);

	List<UserResponse> getUser(UserReq userReq) throws Exception;
}
