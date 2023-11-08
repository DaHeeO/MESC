package com.ksol.mesc.domain.group.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.group.entity.Group;
import com.ksol.mesc.domain.group.entity.GroupMember;

public interface GroupMemberRepository extends JpaRepository<GroupMember, Integer> {
	@Query("select gm.userId from GroupMember gm where gm.group.id=:groupId")
	List<Integer> findByUserId(@Param("groupId") Integer groupId);

	@Query("select gm.gmId from GroupMember gm where gm.group.id=:groupId and gm.userId=:userId")
	Integer findByGroupAndUser(@Param("groupId") Integer groupId, @Param("userId") Integer userId);

	@Query("select gm.userId from GroupMember gm where gm.group.id=:groupId")
	List<Integer> findByGroupId(@Param("groupId") Integer groupId);

	@Query("select count(gm) from GroupMember gm where gm.group=:group")
	Integer findMemberCntByGroup(@Param("group") Group group);

}
