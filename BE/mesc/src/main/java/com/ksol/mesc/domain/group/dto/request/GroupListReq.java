package com.ksol.mesc.domain.group.dto.request;

import java.util.List;

import lombok.Data;

@Data
public class GroupListReq {
	private List<GroupReq> groupList;
}
