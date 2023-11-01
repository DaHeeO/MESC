package com.ksol.mesc.global.config.jwt;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ksol.mesc.domain.user.entity.User;
import com.ksol.mesc.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

	private final UserService userService;

	@Override
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		User findUser = userService.findByEmail(userEmail);
		log.debug("findUser={}", findUser);
		if (findUser == null)
			new UsernameNotFoundException("User Not Found");
		return createUserDetails(findUser);
	}

	private UserDetails createUserDetails(User user) {
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
			user.getAuthorities());
	}
}