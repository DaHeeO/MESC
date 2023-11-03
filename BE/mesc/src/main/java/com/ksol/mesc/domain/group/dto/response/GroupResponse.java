package com.ksol.mesc.domain.group.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GroupResponse {
	private Integer groupId;
	private String groupName;
	private Integer sequence;
}
