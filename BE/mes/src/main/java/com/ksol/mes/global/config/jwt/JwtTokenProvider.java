package com.ksol.mes.global.config.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.ksol.mes.domain.user.exception.UserNotFoundException;
import com.ksol.mes.domain.user.repository.UserRepository;
import com.ksol.mes.global.config.jwt.exception.ExpiredTokenException;
import com.ksol.mes.global.config.jwt.exception.InvalidTokenException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.ServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtTokenProvider {

	protected static final String AUTHORITIES_KEY = "Auth";
	private static final String BEARER_TYPE = "Bearer";
	private static final long ACCESS_TOKEN_EXPIRE_TIME = 30 * 60 * 1000L; // 30분
	private static final long REFRESH_TOKEN_EXPIRE_TIME = 14 * 24 * 60 * 60 * 1000L; // 2주
	private final Key key;
	private final UserRepository userRepository;

	public JwtTokenProvider(@Value("${jwt.key}") String secret,
		UserRepository userRepository) {
		byte[] keyBytes = Decoders.BASE64.decode(secret);
		this.key = Keys.hmacShaKeyFor(keyBytes);
		this.userRepository = userRepository;
	}

	public TokenInfo createToken(Authentication authentication) {
		// 사용자의 권한 정보 가져오기
		String authorities = authentication.getAuthorities()
										   .stream()
										   .map(GrantedAuthority::getAuthority)
										   .collect(Collectors.joining(","));

		long now = new Date().getTime();
		// log.debug("authentication={}", authentication);
		com.ksol.mes.domain.user.entity.User user = userRepository.findByEmail(authentication.getName())
																  .orElseThrow(() -> new UserNotFoundException(
																	  "User Not Found"));
		String userId = user.getId().toString();

		// AccessToken 생성
		String accessToken = Jwts.builder()
								 .setSubject(authentication.getName())
								 .claim(AUTHORITIES_KEY, authorities)
								 .claim("userId", userId)
								 .setExpiration(new Date(now + ACCESS_TOKEN_EXPIRE_TIME))
								 .signWith(key, SignatureAlgorithm.HS256)
								 .compact();

		// RefreshToken 생성
		String refreshToken = Jwts.builder()
								  .setSubject(authentication.getName())
								  .setExpiration(new Date(now + REFRESH_TOKEN_EXPIRE_TIME))
								  .signWith(key, SignatureAlgorithm.HS256)
								  .compact();

		// 생성된 토큰을 토큰 dto에 담아 반환
		return TokenInfo.builder()
						.grantType(BEARER_TYPE)
						.accessToken(accessToken)
						.refreshToken(refreshToken)
						.build();
	}

	// JWT 토큰을 복호화하여 토큰에 들어있는 정보를 꺼냄
	public Authentication getAuthentication(String accessToken, ServletRequest request) {
		Claims claims = parseClaims(accessToken);

		if (claims.get(AUTHORITIES_KEY) == null) {
			throw new RuntimeException("권한 정보가 없는 토큰입니다.");
		}

		// Claim 에서 권한 정보 가져오기
		Collection<? extends GrantedAuthority> authorities = Arrays.stream(
																	   claims.get(AUTHORITIES_KEY).toString().split(","))
																   .map(SimpleGrantedAuthority::new)
																   .collect(Collectors.toList());

		// UserDetails 객체를 만들어서 Authentication 리턴
		UserDetails principal = new User(claims.get("userId",String.class), "", authorities);
		request.setAttribute("userId", claims.get("userId", String.class));
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
			throw new InvalidTokenException("MalformedJwtException");
		} catch (ExpiredJwtException e) {
			log.info("ExpiredJwtException");
			throw new ExpiredTokenException("ExpiredJwtException");
		} catch (UnsupportedJwtException e) {
			log.info("UnsupportedJwtException");
			throw new InvalidTokenException("UnsupportedJwtException");
		} catch (IllegalArgumentException e) {
			log.info("IllegalArgumentException");
			throw new InvalidTokenException("IllegalArgumentException");
		}
	}

	public boolean getIsExpired(String accessToken) {
		Date expiration = Jwts.parserBuilder()
							  .setSigningKey(key)
							  .build()
							  .parseClaimsJws(accessToken)
							  .getBody()
							  .getExpiration();
		// 현재 시간
		long now = new Date().getTime();
		return (expiration.getTime() - now) > 0;
	}
}
