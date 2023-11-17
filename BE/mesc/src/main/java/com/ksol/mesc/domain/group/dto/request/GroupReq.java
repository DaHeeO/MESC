package com.ksol.mesc.domain.group.dto.request;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.group.entity.Group;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class GroupReq {
	private Integer groupId;
	private String groupName;
	private Integer userId;
	private Integer sequence;
	private EntityState groupState = EntityState.ACTIVE;

	public Group toEntity(GroupReq groupReq) {
		Group group = Group.builder()
			.id(groupReq.getGroupId())
			.groupName(groupReq.getGroupName())
			.userId(groupReq.getUserId())
			.sequence(groupReq.getSequence())
			.state(groupReq.getGroupState())
			.build();
		return group;
	}
}
