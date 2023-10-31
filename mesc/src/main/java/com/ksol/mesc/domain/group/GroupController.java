package com.ksol.mesc.domain.group;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.common.CommonResponseDto;
import com.ksol.mesc.domain.group.dto.request.GroupListReq;
import com.ksol.mesc.domain.group.dto.request.GroupMemberReq;
import com.ksol.mesc.domain.group.dto.request.GroupReq;
import com.ksol.mesc.domain.group.dto.response.GroupResponse;
import com.ksol.mesc.domain.group.dto.response.UserResponse;
import com.ksol.mesc.domain.group.entity.Group;
import com.ksol.mesc.domain.group.entity.GroupMember;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/group")
@Tag(name = "group", description = "회원 API")
@RequiredArgsConstructor
@Slf4j
public class GroupController {
	private final GroupService groupService;

	@Operation(summary = "그룹 추가 API", description = "DB에 그룹을 저장한다.")
	@PostMapping("/{userId}")
	ResponseEntity<CommonResponseDto<?>> addGroup(@Parameter(description = "사용자 id", required = true)
	@PathVariable Integer userId, @Parameter(description = "그룹명", required = true)
	@RequestBody GroupReq groupReq) {
		groupReq.setUserId(userId);
		groupService.addGroup(groupReq.toEntity(groupReq));
		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 삭제 API", description = "DB에서 그룹을 삭제한다.")
	@DeleteMapping("/{groupId}")
	ResponseEntity<CommonResponseDto<?>> deleteGroup(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId) {
		groupService.deleteGroup(groupId);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 이름 수정 API", description = "변경할 그룹 이름을 DB에 저장한다.")
	@PatchMapping("/{userId}/{groupId}")
	ResponseEntity<CommonResponseDto<?>> updateGroup(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer userId, @Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId, @Parameter(description = "변경할 그룹명", required = true)
	@RequestBody GroupReq groupReq) {
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
	ResponseEntity<CommonResponseDto<?>> updateGroupMember(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId, @Parameter(description = "변경할 멤버", required = true)
	@RequestBody GroupMemberReq groupMemberReq) {
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
	@PatchMapping("/sequence/{userId}")
	ResponseEntity<CommonResponseDto<?>> updateGroupSequence(@Parameter(description = "그룹 id 리스트", required = true)
	@RequestBody GroupListReq groupListReq) {
		List<GroupReq> groupReqList = groupListReq.getGroupReqList();
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
	@GetMapping("/{userId}")
	ResponseEntity<CommonResponseDto<?>> selectGroup(@Parameter(description = "사용자 id", required = true)
	@PathVariable Integer userId) {
		List<Group> groupList = groupService.selectGroup(userId);
		List<GroupResponse> groupResponseList = new ArrayList<>();

		for (Group group : groupList) {
			GroupResponse groupResponse = GroupResponse.builder()
				.groupId(group.getId())
				.groupName(group.getGroupName())
				.sequence(group.getSequence())
				.build();

			groupResponseList.add(groupResponse);
		}

		return ResponseEntity.ok(CommonResponseDto.success(groupList));
	}

	@Operation(summary = "그룹 멤버 조회 API", description = "그룹 멤버를 조회한다.")
	@GetMapping("/member/{groupId}")
	ResponseEntity<CommonResponseDto<?>> selectGroupMember(@Parameter(description = "그룹 id", required = true)
	@PathVariable Integer groupId) {
		// String userEmail = authentication.getName();
		// UserResponse userResponse = groupService.selectGroupMember(groupId);
		UserResponse userResponse = groupService.selectGroupMember(groupId).getBody();
		return ResponseEntity.ok(CommonResponseDto.success(userResponse));
	}
}
