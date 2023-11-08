package com.ksol.mesc.domain.group.service;

import java.util.LinkedHashMap;

import com.ksol.mesc.domain.group.dto.request.GroupListReq;
import com.ksol.mesc.domain.group.dto.request.GroupMemberReq;
import com.ksol.mesc.domain.group.dto.request.GroupReq;
import com.ksol.mesc.domain.group.entity.Group;

public interface GroupService {
	//그룹 기능 동작 전 확인
	void checkBeforeGroupFunction(Integer userId, Integer groupId);

	//그룹 추가
	void addGroup(Group group);

	//그룹 삭제
	void deleteGroup(Integer userId, Integer groupId);

	//그룹 이름 수정
	void updateGroup(Integer userId, Integer groupId, GroupReq groupReq);

	//그룹 멤버 수정
	void updateGroupMember(Integer userId, Integer groupId, GroupMemberReq groupMemberReq);

	//그룹 순서 수정
	void updateGroupSequence(Integer userId, GroupListReq groupListReq);

	//전체 유저 수 조회
	Object getTotalUserCount();

	//그룹 멤버수 조회
	Integer selectMemberCntByGroup(Group group);

	//그룹 조회
	LinkedHashMap<String, Object> selectGroup(Integer userId);

	//그룹 멤버 조회
	Object selectGroupMember(Integer userId, Integer groupId);

}
