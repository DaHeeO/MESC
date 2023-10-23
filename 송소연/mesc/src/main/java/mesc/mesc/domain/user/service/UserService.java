package mesc.mesc.domain.user.service;

import java.util.List;

import mesc.mesc.domain.user.dto.LoginReq;
import mesc.mesc.domain.user.dto.SignUpReq;
import mesc.mesc.global.config.jwt.TokenInfo;

public interface UserService {

	void signUp(SignUpReq signUpReq);

	TokenInfo login(LoginReq loginReq);

	void sendEmail(List<String> toUserList);
}
