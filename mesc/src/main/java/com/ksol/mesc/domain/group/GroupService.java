package com.ksol.mesc.domain.group;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.ksol.mesc.domain.group.dto.response.UserResponse;
import com.ksol.mesc.domain.group.entity.Group;
import com.ksol.mesc.domain.group.entity.GroupMember;
import com.ksol.mesc.domain.group.repository.GroupMemberRepository;
import com.ksol.mesc.domain.group.repository.GroupRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class GroupService {
	private final GroupRepository groupRepository;
	private final GroupMemberRepository groupMemberRepository;
	private final WebClient webClient;

	//그룹 추가
	public void addGroup(Group group) {
		groupRepository.save(group);
	}

	//그룹 삭제
	public void deleteGroup(Integer groupId) {
		groupRepository.deleteById(groupId);
	}

	//그룹 이름 수정
	public void updateGroup(Group group) {
		groupRepository.save(group);
	}

	//그룹 멤버 수정
	public void updateGroupMember(Integer groupId, List<GroupMember> groupMemberList) {
		//1. 입력받은 멤버 리스트와 원래 멤버 리스트 비교
		List<Integer> originMemberList = groupMemberRepository.findByUserId(groupId);
		List<Integer> newMemberList = new ArrayList<>();

		for (GroupMember groupMember : groupMemberList) {
			newMemberList.add(groupMember.getUserId());
		}

		//1-1. 원래 멤버에서 없어진 멤버 삭제
		for (Integer userId : originMemberList) {
			if (!newMemberList.contains(userId)) {
				Integer groupMemberId = groupMemberRepository.findByGroupAndUser(groupId, userId);
				groupRepository.deleteById(groupMemberId);
			}
		}

		//1-2. 새로운 멤버 추가
		for (int i = 0; i < groupMemberList.size(); i++) {
			GroupMember groupMember = groupMemberList.get(i);
			Integer groupUserId = groupMember.getUserId();
			if (!originMemberList.contains(groupUserId)) {
				groupMemberRepository.save(groupMember);
			}
		}
	}

	//그룹 순서 수정
	public void updateGroupSequence(List<Group> groupList) {
		for (Group group : groupList) {
			groupRepository.updateGroupSequence(group.getId(), group.getSequence());
		}
	}

	//그룹 조회
	public List<Group> selectGroup(Integer userId) {
		return groupRepository.findByUserId(userId);
	}

	//그룹 멤버 조회
	public ResponseEntity<UserResponse> selectGroupMember(Integer groupId) {
		//1. 그룹에 있는 멤버 조회
		List<Integer> userList = groupMemberRepository.findByGroupId(groupId);
		Map<String, List<Integer>> reqMap = new HashMap<>();
		reqMap.put("userList", userList);

		log.info("body: {}", BodyInserters.fromValue(reqMap));

		//2. 멤버 정보 mes 서버에 API 요청
		return webClient.post()
			.uri("/user")
			// .header(HttpHeaders.AUTHORIZATION, "Bearer " + authkey)
			.contentType(MediaType.APPLICATION_JSON)
			.body(BodyInserters.fromValue(reqMap))
			.retrieve()
			.toEntity(UserResponse.class)
			// .bodyToMono(UserResponse.class)
			.block();
	}
}
