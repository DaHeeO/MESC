package com.ksol.mes.global.util.redis;

import java.util.concurrent.TimeUnit;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class RedisServiceImpl implements RedisService {

	private final RedisTemplate<String, String> redisTemplate;

	@Override
	public void setRefreshToken(String email, String refreshToken) {
		redisTemplate.opsForValue().set(email, refreshToken, 14, TimeUnit.DAYS);
	}

	@Override
	public String getRefreshToken(String email) {
		return redisTemplate.opsForValue().get(email);
	}
}
