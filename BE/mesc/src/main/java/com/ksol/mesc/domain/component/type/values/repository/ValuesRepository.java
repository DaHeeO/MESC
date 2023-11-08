package com.ksol.mesc.domain.component.type.values.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;
import com.ksol.mesc.domain.component.type.values.entity.ComponentValue;

public interface ValuesRepository extends JpaRepository<ComponentValue, Integer> {
	@Query("select c from ComponentValue c where c.dropdown=:dropdown")
	List<ComponentValue> findByDropdown(@Param("dropdown") Dropdown dropdown);
}
