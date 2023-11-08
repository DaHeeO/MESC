package com.ksol.mesc.domain.component.type.checkbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ksol.mesc.domain.component.type.checkbox.entity.Checkbox;

public interface CheckboxRepository extends JpaRepository<Checkbox, Integer> {
	// @Query("select c from Checkbox c where c.component=:component")
	// Checkbox findByComponent(@Param("component") Component component);
}