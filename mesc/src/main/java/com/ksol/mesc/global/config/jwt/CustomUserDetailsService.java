// package com.ksol.mesc.global.config.jwt;
//
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;
//
// import lombok.RequiredArgsConstructor;
// import mesc.mesc.domain.user.entity.User;
// import mesc.mesc.domain.user.repository.UserRepository;
//
// @Service
// @RequiredArgsConstructor
// public class CustomUserDetailsService implements UserDetailsService {
//
// 	private final UserRepository userRepository;
//
// 	@Override
// 	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
// 		return userRepository.findByEmail(userEmail)
// 			.map(this::createUserDetails)
// 			.orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
// 	}
//
// 	private UserDetails createUserDetails(User user) {
// 		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
// 			user.getAuthorities());
// 	}
// }