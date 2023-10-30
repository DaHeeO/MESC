package com.ksol.mes.domain.user.service;

import java.util.Collections;
import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ksol.mes.domain.user.UserRole;
import com.ksol.mes.domain.user.dto.LoginReq;
import com.ksol.mes.domain.user.dto.SignUpReq;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.domain.user.exception.UserNotFoundException;
import com.ksol.mes.domain.user.repository.UserRepository;
import com.ksol.mes.global.config.jwt.JwtTokenProvider;
import com.ksol.mes.global.config.jwt.TokenInfo;

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
		Optional<User> byEmail = userRepository.findByEmail(loginReq.getEmail());
		if (byEmail.isEmpty())
			throw new UserNotFoundException("User Not Found");
		UsernamePasswordAuthenticationToken authenticationToken = loginReq.toAuthentication();
		log.debug("authenticationToken={}", authenticationToken);

		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		TokenInfo tokenInfo = jwtTokenProvider.createToken(authentication);
		return tokenInfo;
	}

	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException("User Not Found"));
	}

}
