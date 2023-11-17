package com.ksol.mes.global.config.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenInfo {
	private String grantType;
	private String accessToken;
	private String refreshToken;
}
