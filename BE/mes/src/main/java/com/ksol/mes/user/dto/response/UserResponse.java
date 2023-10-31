package com.ksol.mes.user.dto.response;

import java.util.List;

import com.ksol.mes.user.User;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
	private List<User> userList;
}
