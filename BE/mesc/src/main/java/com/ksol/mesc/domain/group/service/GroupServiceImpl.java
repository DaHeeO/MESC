package com.ksol.mesc.domain.group.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.common.dto.response.JsonResponse;
import com.ksol.mesc.domain.group.dto.request.GroupListReq;
import com.ksol.mesc.domain.group.dto.request.GroupMemberReq;
import com.ksol.mesc.domain.group.dto.request.GroupReq;
import com.ksol.mesc.domain.group.dto.response.GroupResponse;
import com.ksol.mesc.domain.group.entity.Group;
import com.ksol.mesc.domain.group.entity.GroupMember;
import com.ksol.mesc.domain.group.repository.GroupMemberRepository;
import com.ksol.mesc.domain.group.repository.GroupRepository;
import com.ksol.mesc.global.config.jwt.JwtAuthenticationFilter;
import com.ksol.mesc.global.error.exception.GroupAndUserMismatchException;
import com.ksol.mesc.global.error.exception.GroupNotFoundException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class GroupServiceImpl implements GroupService {
	private final GroupRepository groupRepository;
	private final GroupMemberRepository groupMemberRepository;
	private final WebClient webClient;
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	//그룹 기능 동작 전 확인
	@Override
	public void checkBeforeGroupFunction(Integer userId, Integer groupId) {
		//1. 그룹 id가 존재하지 않으면 error
		groupRepository.findById(groupId).orElseThrow(() -> new GroupNotFoundException("Group Not Found"));
		//2. 그룹이 delete인 경우 error
		if (groupRepository.findStateById(groupId) == EntityState.DELETE) {
			throw new GroupNotFoundException("Group Not Found");
		}
		//3. 로그인한 user가 그룹 생성자가 아니면 error
		groupRepository.findByUserAndGroup(groupId, userId, EntityState.ACTIVE)
			.orElseThrow(() -> new GroupAndUserMismatchException("Group And User Mismatch"));
	}

	//그룹 추가
	@Override
	public void addGroup(Group group) {
		groupRepository.save(group);
	}

	//그룹 삭제
	@Override
	@Transactional
	public void deleteGroup(Integer userId, Integer groupId) {
		checkBeforeGroupFunction(userId, groupId);
		groupRepository.updateGroupState(groupId, EntityState.DELETE);
	}

	//그룹 이름 수정
	@Override
	@Transactional
	public void updateGroup(Integer userId, GroupListReq groupListReq) {
		List<GroupReq> groupReqList = groupListReq.getGroupList();

		for (GroupReq groupReq : groupReqList) {
			Integer groupId = groupReq.getGroupId();
			checkBeforeGroupFunction(userId, groupId);
			groupRepository.updateGroupName(groupId, groupReq.getGroupName());
		}
	}

	//그룹 멤버 수정
	@Override
	@Transactional
	public void updateGroupMember(Integer userId, Integer groupId, GroupMemberReq groupMemberReq) {
		checkBeforeGroupFunction(userId, groupId);

		//1. update 할 멤버 리스트 가져오기
		List<Integer> userList = groupMemberReq.getUserList();
		List<GroupMember> groupMemberList = new ArrayList<>();

		for (Integer reqUserId : userList) {
			GroupMember groupMember = GroupMember.builder()
				.userId(reqUserId)
				.group(Group.builder().id(groupId).build())
				.build();
			groupMemberList.add(groupMember);
		}

		//2. 입력받은 멤버 리스트와 원래 멤버 리스트 비교
		List<Integer> originMemberList = groupMemberRepository.findByUserId(groupId);
		List<Integer> newMemberList = new ArrayList<>();

		for (GroupMember groupMember : groupMemberList) {
			newMemberList.add(groupMember.getUserId());
		}

		//2-1. 원래 멤버에서 없어진 멤버 삭제
		for (Integer originUserId : originMemberList) {
			if (!newMemberList.contains(originUserId)) {
				Integer groupMemberId = groupMemberRepository.findByGroupAndUser(groupId, originUserId);
				groupMemberRepository.deleteById(groupMemberId);
			}
		}

		//2-2. 새로운 멤버 추가
		for (int i = 0; i < groupMemberList.size(); i++) {
			GroupMember groupMember = groupMemberList.get(i);
			Integer groupUserId = groupMember.getUserId();
			if (!originMemberList.contains(groupUserId)) {
				groupMemberRepository.save(groupMember);
			}
		}
	}

	//그룹 멤버 추가
	@Override
	@Transactional
	public void addGroupMember(Integer userId, Integer groupId, GroupMemberReq groupMemberReq) {
		checkBeforeGroupFunction(userId, groupId);

		//1. update 할 멤버 리스트 가져오기
		List<Integer> userList = groupMemberReq.getUserList();
		List<GroupMember> groupMemberList = new ArrayList<>();

		for (Integer reqUserId : userList) {
			GroupMember groupMember = GroupMember.builder()
					.userId(reqUserId)
					.group(Group.builder().id(groupId).build())
					.build();
			groupMemberList.add(groupMember);
		}

		//2. 입력받은 멤버 리스트와 원래 멤버 리스트 비교
		List<Integer> originMemberList = groupMemberRepository.findByUserId(groupId);
		List<Integer> newMemberList = new ArrayList<>();

		for (GroupMember groupMember : groupMemberList) {
			newMemberList.add(groupMember.getUserId());
		}

		//2-2. 새로운 멤버 추가
		for (int i = 0; i < groupMemberList.size(); i++) {
			GroupMember groupMember = groupMemberList.get(i);
			Integer groupUserId = groupMember.getUserId();
			if (!originMemberList.contains(groupUserId)) {
				groupMemberRepository.save(groupMember);
			}
		}
	}


	//그룹 멤버 삭제
	@Override
	@Transactional
	public void deleteGroupMember(Integer userId, Integer groupId, Integer memberId) {
		checkBeforeGroupFunction(userId, groupId);


		List<Integer> originMemberList = groupMemberRepository.findByUserId(groupId);
		System.out.println(groupId + " " + memberId);


		if(originMemberList.contains(memberId)) {
			Integer groupMemberId = groupMemberRepository.findByGroupAndUser(groupId, memberId);
			if(groupMemberId != null)
				groupMemberRepository.deleteById(groupMemberId);
		}
	}

	//그룹 순서 수정
	@Override
	@Transactional
	public void updateGroupSequence(Integer userId, GroupListReq groupListReq) {
		List<GroupReq> groupReqList = groupListReq.getGroupList();
		List<Group> groupList = new ArrayList<>();

		for (GroupReq groupReq : groupReqList) {
			Group group = Group.builder()
				.id(groupReq.getGroupId())
				.sequence(groupReq.getSequence())
				.build();
			groupList.add(group);
		}

		for (Group group : groupList) {
			groupRepository.updateGroupSequence(group.getId(), group.getSequence());
		}
	}

	//전체 유저 수 조희
	@Override
	public Object getTotalUserCount() {
		String accessToken = jwtAuthenticationFilter.getAccessToken();

		return webClient.get()
			.uri("/user/members/count")
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.retrieve()
			.toEntity(JsonResponse.class)
			.block()
			.getBody()
			.getData();
	}

	//그룹 멤버수 조회
	@Override
	public Integer selectMemberCntByGroup(Group group) {
		return groupMemberRepository.findMemberCntByGroup(group);
	}

	//그룹 조회
	@Override
	public LinkedHashMap<String, Object> selectGroup(Integer userId) {
		LinkedHashMap<String, Object> linkedHashMap = new LinkedHashMap<>();
		List<Group> groupList = groupRepository.findByUserId(userId, EntityState.ACTIVE);
		List<GroupResponse> groupResponseList = new ArrayList<>();

		for (Group group : groupList) {
			Integer memberCnt = selectMemberCntByGroup(group);

			GroupResponse groupResponse = GroupResponse.builder()
				.groupId(group.getId())
				.groupName(group.getGroupName())
				.sequence(group.getSequence())
				.memberCnt(memberCnt)
				.build();

			groupResponseList.add(groupResponse);
		}

		linkedHashMap.putAll((LinkedHashMap<String, Object>)getTotalUserCount()); //전체 유저 수
		linkedHashMap.put("groupResponseList", groupResponseList); //groupMember List

		return linkedHashMap;
	}

	//그룹 멤버 조회
	@Override
	public Object selectGroupMember(Integer userId, Integer groupId) {
		checkBeforeGroupFunction(userId, groupId);
		String accessToken = jwtAuthenticationFilter.getAccessToken();

		//1. 그룹에 있는 멤버 조회
		List<Integer> userList = groupMemberRepository.findByGroupId(groupId);
		Map<String, List<Integer>> reqMap = new HashMap<>();
		reqMap.put("userList", userList);

		//2. 멤버 정보 mes 서버에 API 요청
		return webClient.post()
			.uri("/user")
			.header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
			.contentType(MediaType.APPLICATION_JSON)
			.body(BodyInserters.fromValue(reqMap))
			.retrieve()
			.toEntity(JsonResponse.class)
			.block()
			.getBody()
			.getData();
	}
}
