package com.ksol.mesc.domain.component.type.button;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.component.entity.Component;

public interface ButtonRepository extends JpaRepository<Button, Integer> {
	@Query("select b from Button b where b.component=:component")
	Button findByComponent(@Param("component") Component component);
}
