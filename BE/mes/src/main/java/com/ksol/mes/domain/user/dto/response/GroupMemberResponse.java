package com.ksol.mes.domain.user.dto.response;

import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class GroupMemberResponse {
	@Schema(description = "그룹에 있는 userList", example = "UserResponse")
	private List<UserResponse> userList;
}