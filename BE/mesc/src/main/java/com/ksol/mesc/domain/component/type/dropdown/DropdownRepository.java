package com.ksol.mesc.domain.component.type.dropdown;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.component.entity.Component;

public interface DropdownRepository extends JpaRepository<Dropdown, Integer> {
	@Query("select d from Dropdown d where d.component=:component")
	Dropdown findByComponent(@Param("component") Component component);
}
