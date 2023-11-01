package com.ksol.mes.global.config.jwt;

import java.io.IOException;
import java.util.Collections;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtExceptionFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {
		try {
			filterChain.doFilter(request, response);
		} catch (Exception ex) {
			response.setStatus(HttpStatus.UNAUTHORIZED.value()); // 401 Unauthorized
			response.setContentType(MediaType.APPLICATION_JSON_VALUE);

			ObjectMapper objectMapper = new ObjectMapper();
			String errorMessage = objectMapper.writeValueAsString(Collections.singletonMap("error", ex.getMessage()));
			response.getWriter().write(errorMessage);
		}
	}
}