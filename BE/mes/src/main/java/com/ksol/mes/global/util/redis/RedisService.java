package com.ksol.mes.global.util.redis;

import org.springframework.stereotype.Service;

public interface RedisService {

	void setRefreshToken(String email, String refreshToken);

	String getRefreshToken(String email);

}
