package com.ksol.mesc.domain.component.type.button.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.button.entity.Button;

public interface ButtonRepository extends JpaRepository<Button, Integer> {

	Button save(Button button);

	@Modifying
	@Query("update Button b set b.state=:state where b.id=:id")
	void updateState(@Param("id") Integer id, @Param("state") EntityState state);
}
