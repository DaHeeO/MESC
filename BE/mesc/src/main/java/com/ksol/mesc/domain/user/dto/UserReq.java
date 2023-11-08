package com.ksol.mesc.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Getter
public class UserReq {
	private Integer userId;
	private String userName;
	private String role;
	private String email;
	private String phoneNumber;
}
