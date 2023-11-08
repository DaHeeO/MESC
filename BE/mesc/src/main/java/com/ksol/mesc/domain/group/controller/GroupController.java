package com.ksol.mesc.domain.group.controller;

import java.util.LinkedHashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
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
import com.ksol.mesc.domain.group.service.GroupServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/mesc/group")
@Tag(name = "group", description = "그룹 API")
@RequiredArgsConstructor
@Slf4j
public class GroupController {
	private final GroupServiceImpl groupService;

	@Operation(summary = "그룹 추가 API", description = "그룹을 DB에 저장한다.")
	@PostMapping
	public ResponseEntity<CommonResponseDto<?>> addGroup(@Parameter(description = "그룹명", required = true)
	@RequestBody @Validated GroupReq groupReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		groupReq.setUserId(userId);
		groupService.addGroup(groupReq.toEntity(groupReq));

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 삭제 API", description = "그룹을 DB에서 삭제한다.")
	@DeleteMapping("/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> deleteGroup(@Parameter(description = "그룹 ID", required = true)
	@PathVariable @Valid Integer groupId, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		groupService.deleteGroup(userId, groupId);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 이름 수정 API", description = "변경할 그룹 이름을 DB에 저장한다.")
	@PatchMapping("/name")
	public ResponseEntity<CommonResponseDto<?>> updateGroup(
		@Parameter(description = "변경할 그룹 정보", required = true)
		@RequestBody @Validated GroupListReq groupListReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		groupService.updateGroup(userId, groupListReq);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 멤버 수정 API", description = "그룹 멤버 수정 후, DB에 저장한다.")
	@PatchMapping("/member/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> updateGroupMember(@Parameter(description = "그룹 id", required = true)
	@PathVariable @Valid Integer groupId, @Parameter(description = "변경할 멤버", required = true)
	@RequestBody @Validated GroupMemberReq groupMemberReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		groupService.updateGroupMember(userId, groupId, groupMemberReq);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 멤버 추가 API", description = "그룹 멤버 추가 후, DB에 저장한다.")
	@PatchMapping("/add/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> addGroupMember(@Parameter(description = "그룹 id", required = true)
																  @PathVariable @Valid Integer groupId, @Parameter(description = "변경할 멤버", required = true)
																  @RequestBody @Validated GroupMemberReq groupMemberReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		groupService.addGroupMember(userId, groupId, groupMemberReq);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 멤버 삭제", description = "그룹 멤버 한명만 삭제")
	@DeleteMapping("/member/{groupId}/{memberId}")
	public ResponseEntity<CommonResponseDto<?>> deleteGroupMember(@Parameter(description = "그룹 id", required = true)
																  @PathVariable @Valid Integer groupId, @PathVariable Integer memberId, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		groupService.deleteGroupMember(userId, groupId, memberId);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}



	@Operation(summary = "그룹 순서 수정 API", description = "변경할 그룹 순서를 DB에 저장한다.")
	@PatchMapping("/sequence")
	public ResponseEntity<CommonResponseDto<?>> updateGroupSequence(
		@Parameter(description = "그룹 id 리스트", required = true)
		@RequestBody GroupListReq groupListReq, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		groupService.updateGroupSequence(userId, groupListReq);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "그룹 조회 API", description = "사용자가 생성한 그룹을 조회한다.")
	@GetMapping
	public ResponseEntity<CommonResponseDto<?>> selectGroup(Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		LinkedHashMap<String, Object> responseMap = groupService.selectGroup(userId);

		return ResponseEntity.ok(CommonResponseDto.success(responseMap));
	}

	@Operation(summary = "그룹 멤버 조회 API", description = "그룹 멤버를 조회한다.")
	@GetMapping("/member/{groupId}")
	public ResponseEntity<CommonResponseDto<?>> selectGroupMember(@Parameter(description = "그룹 id", required = true)
	@PathVariable @Valid Integer groupId, Authentication authentication) {
		Integer userId = Integer.parseInt(authentication.getName());
		Object groupMemberResponse = groupService.selectGroupMember(userId, groupId);

		return ResponseEntity.ok(CommonResponseDto.success(groupMemberResponse));
	}
}
