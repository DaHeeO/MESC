package com.ksol.mesc.domain.component.type.checkbox;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.component.entity.Component;

public interface CheckboxRepository extends JpaRepository<Checkbox, Integer> {
	@Query("select c from Checkbox c where c.component=:component")
	Checkbox findByComponent(@Param("component") Component component);
}
