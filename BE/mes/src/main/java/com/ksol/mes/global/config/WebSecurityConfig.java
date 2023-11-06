package com.ksol.mes.global.config;

import java.util.Arrays;
import java.util.stream.Stream;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.ksol.mes.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mes.global.config.jwt.JwtExceptionFilter;
import com.ksol.mes.global.config.jwt.JwtTokenProvider;
import com.ksol.mes.global.config.jwt.TokenAccessDeniedHandler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@Slf4j
public class WebSecurityConfig {
	private final JwtTokenProvider jwtTokenProvider;
	private final TokenAccessDeniedHandler tokenAccessDeniedHandler;
	private static final String[] WHITE_LIST = {"/v3/**", "/swagger-ui/**", "/mes/user/signup",
		"/mes/user/login", "/mes/user/reissue", "/mes/user/findByEmail/**", "/mes/user/findById/**"};

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.csrf(AbstractHttpConfigurer::disable)
					.httpBasic(AbstractHttpConfigurer::disable)
					.formLogin(AbstractHttpConfigurer::disable)
					.cors(c -> c.configurationSource(corsConfigurationSource()))
					.sessionManagement(c -> c.sessionCreationPolicy((SessionCreationPolicy.STATELESS)))

					.authorizeHttpRequests(auth -> auth.requestMatchers(Stream.of(WHITE_LIST)
																			  .map(AntPathRequestMatcher::antMatcher)
																			  .toArray(AntPathRequestMatcher[]::new))
													   .permitAll()
													   .requestMatchers(
														   AntPathRequestMatcher.antMatcher("/mes/admin/**"))
													   .hasAuthority("ADMIN")
													   .requestMatchers(
														   AntPathRequestMatcher.antMatcher("/mes/developer/**"))
													   .hasAuthority("DEVELOPER")
//													   .requestMatchers(
//														   AntPathRequestMatcher.antMatcher("/api/mes/worker/**"))
//													   .hasAuthority("WORKER")
													   // .requestMatchers(
													   //    AntPathRequestMatcher.antMatcher("/api/mes/user/findByEmail/**"))
													   // .hasAuthority("ADMIN")
													   .anyRequest()
													   .authenticated())

					.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
						UsernamePasswordAuthenticationFilter.class)
					.addFilterBefore(new JwtExceptionFilter(), JwtAuthenticationFilter.class)
					.exceptionHandling().accessDeniedHandler(tokenAccessDeniedHandler);

		return httpSecurity.build();
	}

	// 암호화에 필요한 PasswordEncoder Bean 등록
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	//CORS 허용 적용
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration corsConfiguration = new CorsConfiguration();

		corsConfiguration.addAllowedOriginPattern("*");
		corsConfiguration.addAllowedHeader("*");
		corsConfiguration.addAllowedMethod("*");
		corsConfiguration.setAllowCredentials(true);
		source.registerCorsConfiguration("/**", corsConfiguration);
		return source;
	}
}