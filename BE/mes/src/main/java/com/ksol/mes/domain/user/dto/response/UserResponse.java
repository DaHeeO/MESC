package com.ksol.mes.domain.user.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
	private Integer userId;
	private String userName;
	private String role;
	private String email;
	private String phoneNumber;
}
