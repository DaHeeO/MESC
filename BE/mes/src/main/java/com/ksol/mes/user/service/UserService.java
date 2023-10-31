package com.ksol.mes.user.service;

import java.util.List;

import com.ksol.mes.user.User;
import com.ksol.mes.user.dto.request.UserReq;

public interface UserService {
	public List<User> getUser(UserReq userReq) throws Exception;
}
