package com.ksol.mesc.domain.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
	@Schema(description = "사용자 id", example = "1")
	private Integer userId;

	@Schema(description = "사용자 이름", example = "김싸피")
	private String name;

	@Schema(description = "사용자 이메일", example = "ssafy@gmail.com")
	private String email;

	@Schema(description = "사용자 휴대폰번호", example = "01012345678")
	private String phoneNumber;

	private String role;
}
