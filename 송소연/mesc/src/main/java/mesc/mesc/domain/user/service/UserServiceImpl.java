package mesc.mesc.domain.user.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import mesc.mesc.domain.user.UserRole;
import mesc.mesc.domain.user.dto.LoginReq;
import mesc.mesc.domain.user.dto.SignUpReq;
import mesc.mesc.domain.user.entity.User;
import mesc.mesc.domain.user.exception.EmailMessagingException;
import mesc.mesc.domain.user.exception.UserNotFoundException;
import mesc.mesc.domain.user.repository.UserRepository;
import mesc.mesc.global.config.jwt.JwtTokenProvider;
import mesc.mesc.global.config.jwt.TokenInfo;
import mesc.mesc.global.util.EmailService;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final EmailService emailService;

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
	public void sendEmail(List<String> toUserList) {
		try {
			emailService.sendEmail(toUserList);
		} catch (MessagingException e) {
			throw new EmailMessagingException("Failed To Send Email");
		}
	}

}
