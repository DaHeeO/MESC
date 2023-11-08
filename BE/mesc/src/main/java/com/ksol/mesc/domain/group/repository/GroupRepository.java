package com.ksol.mesc.domain.group.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.group.entity.Group;
import com.ksol.mesc.domain.group.entity.GroupState;

public interface GroupRepository extends JpaRepository<Group, Integer> {
	//그룹 상태 조회
	@Query("select g.state from Group g where g.id=:groupId")
	GroupState findStateById(@Param("groupId") Integer groupId);

	//그룹 이름 변경
	@Modifying
	@Query("update Group g set g.groupName=:groupName where g.id=:groupId")
	void updateGroupName(@Param("groupId") Integer groupId, @Param("groupName") String groupName);

	//그룹 삭제 -> 상태 DELETE로 변경
	@Modifying
	@Query("UPDATE Group g SET g.state=:groupState WHERE g.id=:groupId")
	void deleteGroup(@Param("groupId") Integer groupId, @Param("groupState") GroupState groupState);

	//그룹 순서 변경
	@Modifying
	@Query("update Group g set g.sequence=:sequence where g.id=:groupId")
	void updateGroupSequence(@Param("groupId") Integer groupId, @Param("sequence") Integer sequence);

	//활동 중인 유저 조회
	@Query("select g from Group g where g.userId=:userId and g.state=:groupState")
	List<Group> findByUserId(@Param("userId") Integer userId, @Param("groupState") GroupState groupState);

	//그룹id, userId를 이용한 활동 중인 유저 조회
	@Query("select g from Group g where g.id=:groupId and g.userId=:userId and g.state=:groupState")
	Optional<Group> findByUserAndGroup(@Param("groupId") Integer groupId, @Param("userId") Integer userId,
		@Param("groupState") GroupState groupState);

}
