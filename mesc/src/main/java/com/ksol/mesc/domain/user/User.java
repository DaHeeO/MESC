package com.ksol.mesc.domain.user;

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
public class User {
	private Integer userId;
	private String userName;
	private String role;
	private String email;
	private String profile;
	private String password;
}
