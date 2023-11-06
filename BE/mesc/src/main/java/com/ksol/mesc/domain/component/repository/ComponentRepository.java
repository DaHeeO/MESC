package com.ksol.mesc.domain.component.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.card.Card;
import com.ksol.mesc.domain.component.entity.Component;

public interface ComponentRepository extends JpaRepository<Component, Integer> {
	@Query("select com from Component com where com.card=:card")
	List<Component> findByCard(@Param("card") Card card);
}
