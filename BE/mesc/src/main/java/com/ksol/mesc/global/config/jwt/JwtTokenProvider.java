package com.ksol.mesc.global.config.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.ksol.mesc.global.config.jwt.exception.CustomJwtException;
import com.ksol.mesc.global.error.ErrorCode;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtTokenProvider {
	protected static final String AUTHORITIES_KEY = "Auth";
	private static final String AUTHORIZATION_HEADER = "Authorization";
	private static final String BEARER_TYPE = "Bearer";
	private final Key key;

	public JwtTokenProvider(@Value("${jwt.key}") String secret) {
		byte[] keyBytes = Decoders.BASE64.decode(secret);
		this.key = Keys.hmacShaKeyFor(keyBytes);
	}

	// Request Header에서 토큰 정보 추출
	public String resolveToken(HttpServletRequest request) {
		String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_TYPE)) {
			return bearerToken.substring(7);
		}
		return null;
	}

	// JWT 토큰을 복호화하여 토큰에 들어있는 정보를 꺼냄
	public Authentication getAuthentication(String accessToken) {
		Claims claims = parseClaims(accessToken);
		log.info("claims={}", claims);
		if (claims.get(AUTHORITIES_KEY) == null) {
			throw new RuntimeException("권한 정보가 없는 토큰입니다.");
		}

		// Claim 에서 권한 정보 가져오기
		Collection<? extends GrantedAuthority> authorities = Arrays.stream(
																	   claims.get(AUTHORITIES_KEY).toString().split(","))
																   .map(SimpleGrantedAuthority::new)
																   .collect(Collectors.toList());
		log.info(authorities.toString());
		// UserDetails 객체를 만들어서 Authentication 리턴
		Integer userId = claims.get("userId", Integer.class);
		UserDetails principal = new org.springframework.security.core.userdetails.User(userId.toString(), "",
			authorities);
		return new UsernamePasswordAuthenticationToken(principal, "", authorities);
	}

	// 토큰을 파싱하여 클레임 형태로 추출
	public Claims parseClaims(String accessToken) {
		try {
			return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(accessToken).getBody();
		} catch (ExpiredJwtException e) {
			return e.getClaims();
		}
	}

	public Boolean validateToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
			return true;
		} catch (MalformedJwtException e) {
			log.info("MalformedJwtException");
			throw new CustomJwtException(ErrorCode.INVALID_TOKEN);
		} catch (ExpiredJwtException e) {
			log.info("ExpiredJwtException");
			throw new CustomJwtException(ErrorCode.EXPIRED_TOKEN);
		} catch (UnsupportedJwtException e) {
			log.info("UnsupportedJwtException");
			throw new CustomJwtException(ErrorCode.INVALID_TOKEN);
		} catch (IllegalArgumentException e) {
			log.info("IllegalArgumentException");
			throw new CustomJwtException(ErrorCode.INVALID_TOKEN);
		} catch (SignatureException e) {
			log.info("SignatureException");
			throw new CustomJwtException(ErrorCode.INVALID_TOKEN);
		}

	}
}