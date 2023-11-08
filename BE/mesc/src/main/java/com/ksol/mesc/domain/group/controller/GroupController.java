package com.ksol.mesc.domain.group.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.common.dto.response.CommonResponseDto;
import com.ksol.mesc.domain.group.dto.request.GroupListReq;
import com.ksol.mesc.domain.group.dto.request.GroupMemberReq;
import com.ksol.mesc.domain.group.dto.request.GroupReq;
import com.ksol.mesc.domain.group.dto.response.GroupResponse;
import com.ksol.mesc.domain.group.entity.Group;
import com.ksol.mesc.domain.group.entity.GroupMember;
import com.ksol.mesc.domain.group.service.GroupService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/mesc/group")
@Tag(name = "group", description = "회원 API")
@RequiredArgsConstructor
@Slf4j
public class GroupController {
	private final GroupService groupService;

	@Operation(summary = "그룹 추가 API", description = "DB에 그룹을 저장한다.")
	@PostMapping
	public ResponseEntity<CommonResponseDto<?>> addGroup(@Parameter(description = "그룹명", required = true)
	@RequestBody GroupReq groupReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());

		groupReq.setUserId(userId);
		groupService.addGroup(groupReq.toEntity(groupReq));
		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 삭제 API", description = "DB에서 그룹을 삭제한다.")
	@DeleteMapping("/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> deleteGroup(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());

		//그룹 id가 존재하지 않으면 error
		if (groupService.selectGroupById(groupId) == null)
			return ResponseEntity.badRequest().body(CommonResponseDto.error(400, "Do not exist Group ID"));

		//유저가 그룹 생성자가 아니면 error
		if (groupService.selectGroupByUser(groupId, userId) == null)
			return ResponseEntity.badRequest()
				.body(CommonResponseDto.error(400, "Do not be same User and Group User"));

		groupService.deleteGroup(groupId);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 이름 수정 API", description = "변경할 그룹 이름을 DB에 저장한다.")
	@PatchMapping("/{userId}/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> updateGroup(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId, @Parameter(description = "변경할 그룹명", required = true)
	@RequestBody GroupReq groupReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());

		//그룹 id가 존재하지 않으면 pass
		if (groupService.selectGroupById(groupId) == null)
			return ResponseEntity.badRequest().body(CommonResponseDto.error(400, "Do not exist Group ID"));

		//유저가 그룹 생성자가 아니면 error
		if (groupService.selectGroupByUser(groupId, userId) == null)
			return ResponseEntity.badRequest()
				.body(CommonResponseDto.error(400, "Do not be same User and Group User"));

		Group group = Group.builder()
			.id(groupId)
			.userId(userId)
			.groupName(groupReq.getName())
			.build();
		groupService.updateGroup(group);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 멤버 수정 API", description = "그룹 멤버 수정 후, DB에 저장한다.")
	@PatchMapping("/member/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> updateGroupMember(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId, @Parameter(description = "변경할 멤버", required = true)
	@RequestBody GroupMemberReq groupMemberReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());

		//그룹 id가 존재하지 않으면 pass
		if (groupService.selectGroupById(groupId) == null)
			return ResponseEntity.badRequest().body(CommonResponseDto.error(400, "Do not exist Group ID"));

		//유저가 그룹 생성자가 아니면 error
		if (groupService.selectGroupByUser(groupId, userId) == null)
			return ResponseEntity.badRequest()
				.body(CommonResponseDto.error(400, "Do not be same User and Group User"));

		List<Integer> userList = groupMemberReq.getUserList();
		List<GroupMember> groupMemberList = new ArrayList<>();

		for (Integer reqUserId : userList) {
			GroupMember groupMember = GroupMember.builder()
				.userId(reqUserId)
				.group(Group.builder().id(groupId).build())
				.build();
			groupMemberList.add(groupMember);
		}

		groupService.updateGroupMember(groupId, groupMemberList);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 순서 수정 API", description = "변경할 그룹 순서를 DB에 저장한다.")
	@Transactional
	@PatchMapping("/sequence")
	public ResponseEntity<CommonResponseDto<?>> updateGroupSequence(
		@Parameter(description = "그룹 id 리스트", required = true)
		@RequestBody GroupListReq groupListReq, Authentication authentication) {

		List<GroupReq> groupReqList = groupListReq.getGroupList();
		List<Group> groupList = new ArrayList<>();

		for (GroupReq groupReq : groupReqList) {
			Group group = Group.builder()
				.id(groupReq.getGroupId())
				.sequence(groupReq.getSequence())
				.build();
			groupList.add(group);
		}
		groupService.updateGroupSequence(groupList);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 조회 API", description = "사용자가 생성한 그룹을 조회한다.")
	@GetMapping
	public ResponseEntity<CommonResponseDto<?>> selectGroup(Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());

		//유저 아이디가 존재하지 않으면 error
		Map<String, Object> userCnt = (Map<String, Object>)groupService.getUserCount();
		List<Group> groupList = groupService.selectGroup(userId);
		Map<String, Object> map = new HashMap<>();
		List<GroupResponse> groupResponseList = new ArrayList<>();

		for (Group group : groupList) {
			GroupResponse groupResponse = GroupResponse.builder()
				.groupId(group.getId())
				.groupName(group.getGroupName())
				.sequence(group.getSequence())
				.build();

			groupResponseList.add(groupResponse);
		}

		map.putAll(userCnt);
		map.put("groupResponseList", groupResponseList);
		log.info("groupList : {}", groupList);

		return ResponseEntity.ok(CommonResponseDto.success(map));
	}

	@Operation(summary = "그룹 멤버 조회 API", description = "그룹 멤버를 조회한다.")
	@GetMapping("/member/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> selectGroupMember(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());

		//그룹 id가 존재하지 않으면 pass
		if (groupService.selectGroupById(groupId) == null)
			return ResponseEntity.badRequest().body(CommonResponseDto.error(400, "Do not exist Group ID"));

		//유저가 그룹 생성자가 아니면 error
		if (groupService.selectGroupByUser(groupId, userId) == null)
			return ResponseEntity.badRequest()
				.body(CommonResponseDto.error(400, "Do not be same User and Group User"));

		Object groupMemberResponse = groupService.selectGroupMember(groupId);
		return ResponseEntity.ok(CommonResponseDto.success(groupMemberResponse));
	}
}
