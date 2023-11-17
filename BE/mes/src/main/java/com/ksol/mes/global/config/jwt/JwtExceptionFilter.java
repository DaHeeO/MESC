package com.ksol.mes.global.config.jwt;

import java.io.IOException;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ksol.mes.global.config.jwt.exception.CustomJwtException;
import com.ksol.mes.global.error.ErrorResponse;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtExceptionFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {
		try {
			filterChain.doFilter(request, response);
		} catch (CustomJwtException e) {
			log.info("ex.getMessage()={}", e.getMessage());
			log.info("ex.getErrorCode()={}", e.getErrorCode());

			ErrorResponse errorResponse = ErrorResponse.of(e.getErrorCode());
			response.setStatus(e.getErrorCode().getStatus());
			response.setContentType(MediaType.APPLICATION_JSON_VALUE);
			new ObjectMapper().writeValue(response.getOutputStream(), errorResponse);
		}
	}
}