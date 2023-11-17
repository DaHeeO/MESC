package com.ksol.mesc.domain.component.type.checkbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.checkbox.entity.Checkbox;

public interface CheckboxRepository extends JpaRepository<Checkbox, Integer> {

	Checkbox save(Checkbox checkbox);

	@Modifying
	@Query("update Checkbox c set c.state=:state where c.id=:id")
	void updateState(@Param("id") Integer id, @Param("state") EntityState state);
}
