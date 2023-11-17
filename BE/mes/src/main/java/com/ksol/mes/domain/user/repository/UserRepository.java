package com.ksol.mes.domain.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mes.domain.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

	@Query("select u from User u where u.id in :userIds")
	Optional<List<User>> getUserById(@Param("userIds") Integer[] userIds);

	Optional<User> findById(Integer userId);

	@Query("select count(*) from User")
	Integer getUserCount();

}
