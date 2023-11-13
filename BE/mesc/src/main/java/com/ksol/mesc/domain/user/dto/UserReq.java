package com.ksol.mesc.domain.user.dto;

import com.ksol.mesc.domain.user.entity.User;

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

	public static UserReq toRequest(User user) {
		return UserReq.builder()
			.userId(user.getId())
			.userName(user.getName())
			.role(user.getRoles().toString())
			.build();
	}
}
