package com.ksol.mesc.domain.component.values;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.component.type.dropdown.Dropdown;

public interface ValuesRepository extends JpaRepository<CValues, Integer> {
	@Query("select c from CValues c where c.dropdown=:dropdown")
	List<CValues> findByDropdown(@Param("dropdown") Dropdown dropdown);
}
