package com.ksol.mesc.domain.component.type.checkbox;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckboxRepository extends JpaRepository<Checkbox, Integer> {
	// @Query("select c from Checkbox c where c.component=:component")
	// Checkbox findByComponent(@Param("component") Component component);
}
