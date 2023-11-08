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
	@Query("select g.state from Group g where g.id=:groupId")
	GroupState findStateById(@Param("groupId") Integer groupId);

	@Modifying
	@Query("update Group g set g.groupName=:groupName where g.id=:groupId")
	void updateGroupName(@Param("groupId") Integer groupId, @Param("groupName") String groupName);

	@Modifying
	@Query("UPDATE Group g SET g.state=:groupState WHERE g.id=:groupId")
	void deleteGroup(@Param("groupId") Integer groupId, @Param("groupState") GroupState groupState);

	@Modifying
	@Query("update Group g set g.sequence=:sequence where g.id=:groupId")
	void updateGroupSequence(@Param("groupId") Integer groupId, @Param("sequence") Integer sequence);

	@Query("select g from Group g where g.userId=:userId")
	List<Group> findByUserId(@Param("userId") Integer userId);

	@Query("select g from Group g where g.id=:groupId and g.userId=:userId")
	Optional<Group> findByUserAndGroup(@Param("groupId") Integer groupId, @Param("userId") Integer userId);

}
