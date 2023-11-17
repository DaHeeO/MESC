package com.ksol.mesc.domain.component.type.dropdown.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;

public interface DropdownRepository extends JpaRepository<Dropdown, Integer> {
	Dropdown save(Dropdown dropdown);

	@Modifying
	@Query("update Dropdown d set d.state=:state where d.id=:id")
	void updateState(@Param("id") Integer id, @Param("state") EntityState state);
}
