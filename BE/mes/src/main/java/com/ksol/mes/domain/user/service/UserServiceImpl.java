package com.ksol.mes.domain.user.service;

import java.util.Collections;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ksol.mes.domain.user.UserRole;
import com.ksol.mes.domain.user.dto.FindUserRes;
import com.ksol.mes.domain.user.dto.LoginReq;
import com.ksol.mes.domain.user.dto.SignUpReq;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.domain.user.exception.UserNotFoundException;
import com.ksol.mes.domain.user.repository.UserRepository;
import com.ksol.mes.global.config.jwt.CustomUserDetailsService;
import com.ksol.mes.global.config.jwt.JwtTokenProvider;
import com.ksol.mes.global.config.jwt.TokenInfo;
import com.ksol.mes.global.config.jwt.exception.InvalidTokenException;
import com.ksol.mes.global.config.jwt.exception.TokenNotFoundException;
import com.ksol.mes.global.config.jwt.exception.TokenNotSameException;
import com.ksol.mes.global.util.redis.RedisService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final RedisService redisService;
	private final CustomUserDetailsService userDetailsService;

	@Override
	@Transactional
	public void signUp(SignUpReq signUpReq) {
		User newUser = User.builder()
						   .email(signUpReq.getEmail())
						   .password(passwordEncoder.encode(signUpReq.getPassword()))
						   .roles(Collections.singletonList(UserRole.USER.name()))
						   .build();
		userRepository.save(newUser);
	}

	@Override
	public TokenInfo login(LoginReq loginReq) {
		User findUser = userRepository.findByEmail(loginReq.getEmail())
									  .orElseThrow(() -> new UserNotFoundException("User Not Found"));
		UsernamePasswordAuthenticationToken authenticationToken = loginReq.toAuthentication();
		log.debug("authenticationToken={}", authenticationToken);

		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		TokenInfo tokenInfo = jwtTokenProvider.createToken(authentication);
		redisService.setRefreshToken(findUser.getEmail(), tokenInfo.getRefreshToken());
		return tokenInfo;
	}

	@Override
	public TokenInfo recreateToken(HttpServletRequest request) {
		String refreshToken = jwtTokenProvider.resolveToken(request);
		log.debug("refreshToken={}", refreshToken);
		if (refreshToken == null || !(jwtTokenProvider.validateToken(refreshToken)))
			throw new InvalidTokenException("Invalid Token");
		String email = jwtTokenProvider.parseClaims(refreshToken).getSubject();
		log.debug("email={}", email);
		String rtInRedis = redisService.getRefreshToken(email);
		log.debug("rtInRedis={}", rtInRedis);

		// redis에 refreshToken이 있고, 요청된 refreshToken과 일치하면
		if (rtInRedis == null)
			throw new TokenNotFoundException("Token Not Found");
		if (!refreshToken.equals(rtInRedis))
			throw new TokenNotSameException("Token Not Same");
		// 토큰 재발급
		UserDetails userDetails = userDetailsService.loadUserByUsername(email);
		UsernamePasswordAuthenticationToken authentication =
			new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
		TokenInfo tokenInfo = jwtTokenProvider.createToken(authentication);
		redisService.setRefreshToken(email, tokenInfo.getRefreshToken());

		return tokenInfo;
	}

	@Override
	public FindUserRes findByEmail(String email) {
		User findUser = userRepository.findByEmail(email)
									  .orElseThrow(() -> new UserNotFoundException("User Not Found"));
		FindUserRes findUserRes = FindUserRes.builder()
											 .id(findUser.getId())
											 .email(findUser.getEmail())
											 .name(findUser.getName())
											 .phoneNumber(findUser.getPhoneNumber())
											 .build();
		return findUserRes;
	}

}
