package com.ksol.mes.domain.user.service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ksol.mes.domain.user.UserRole;
import com.ksol.mes.domain.user.dto.request.LoginReq;
import com.ksol.mes.domain.user.dto.request.SignUpReq;
import com.ksol.mes.domain.user.dto.request.UserReq;
import com.ksol.mes.domain.user.dto.response.UserResponse;
import com.ksol.mes.domain.user.entity.User;
import com.ksol.mes.domain.user.exception.UserNotFoundException;
import com.ksol.mes.domain.user.repository.UserRepository;
import com.ksol.mes.global.config.jwt.JwtTokenProvider;
import com.ksol.mes.global.config.jwt.TokenInfo;
import com.ksol.mes.global.util.jdbc.JdbcUtil;

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
	private final JdbcUtil jdbcUtil;

	@Override
	@Transactional
	public void signUp(SignUpReq signUpReq) {

		User newUser = User.builder()
						   .email(signUpReq.getEmail())
						   .password(passwordEncoder.encode(signUpReq.getPassword()))
						   .roles(Collections.singletonList(UserRole.DEVELOPER.name()))
						   .build();

		userRepository.save(newUser);
	}

	@Override
	public TokenInfo login(LoginReq loginReq) {
		Optional<User> byEmail = userRepository.findByEmail(loginReq.getEmail());
		if (byEmail.isEmpty())
			throw new UserNotFoundException("User Not Found");
		UsernamePasswordAuthenticationToken authenticationToken = loginReq.toAuthentication();
		// log.debug("authenticationToken={}", authenticationToken);

		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

		// 사용자의 ROLE 정보 확인
		// if (authentication != null) {
		// 	for (GrantedAuthority authority : authentication.getAuthorities()) {
		// 		String role = authority.getAuthority();
		// 		log.debug("user role : {}", role);
		// 	}
		// }

		TokenInfo tokenInfo = jwtTokenProvider.createToken(authentication);
		return tokenInfo;
	}

	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException("User Not Found"));
	}

	@Override
	public List<UserResponse> getUser(UserReq userReq) throws Exception {
		List<Integer> userIdList = userReq.getUserList();
		Integer[] integerArray = userIdList.toArray(new Integer[0]);
		List<User> userList = userRepository.getUserById(integerArray);
		List<UserResponse> userResponseList = new ArrayList<>();

		for(User user : userList){
			UserResponse userResponse = UserResponse.builder()
				.userId(user.getId())
				.userName(user.getName())
				.email(user.getEmail())
				.phoneNumber(user.getPhoneNumber())
				.build();

			userResponseList.add(userResponse);
		}

		// //userId List
		// String strIds = userList.stream()
		// 	.map(String::valueOf)
		// 	.collect(Collectors.joining(", "));
		// String query = "select * from Users where USER_ID in ("+strIds+")";
		//
		// ResultSet resultSet = jdbcUtil.select(query);
		// List<UserResponse> resultUserList = new ArrayList<>();
		//
		// while (resultSet.next()) {
		// 	UserResponse user = UserResponse.builder()
		// 		.userId(resultSet.getInt("user_id"))
		// 		.userName(resultSet.getString("user_name"))
		// 		.role(resultSet.getString("user_role"))
		// 		.email(resultSet.getString("email"))
		// 		.profile(resultSet.getString("profile"))
		// 		.build();
		//
		// 	resultUserList.add(user);
		// }

		return userResponseList;
	}

}
