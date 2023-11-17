package com.ksol.mesc.global.config.jwt;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	private final JwtTokenProvider jwtTokenProvider;

	// ThreadLocal 변수를 사용하여 AccessToken을 저장하기 위한 정적 변수
	private static final ThreadLocal<String> accessTokenThreadLocal = new ThreadLocal<>();

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain chain) throws ServletException, IOException {

		// Request Header 에서 JWT 토큰 추출 - token null => 로그아웃
		String token = jwtTokenProvider.resolveToken(request);

		if (token == null) {
			chain.doFilter(request, response);
			return;
		}

		accessTokenThreadLocal.set(token);
		// 토큰 검증 -> 유효한 경우 : Authentication 객체 SecurityContext 에 저장
		if (jwtTokenProvider.validateToken(token)) {
			// 토큰 재발급 요청 path인 경우 예외 처리
			if (!request.getRequestURI().equals("/api/mesc/user/reissue"))
				setSecurityContextHolder(token);
		}
		chain.doFilter(request, response);

		// 필터 또는 요청 처리 이후에 AccessToken 제거
		// accessTokenThreadLocal.remove();
	}

	private void setSecurityContextHolder(String token) {
		Authentication authentication = jwtTokenProvider.getAuthentication(token);
		log.info("authentication={}", authentication);
		SecurityContextHolder.getContext().setAuthentication(authentication);
	}

	// AccessToken을 반환하는 메소드
	public String getAccessToken() {
		return accessTokenThreadLocal.get();
	}
}
