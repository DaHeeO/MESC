package com.ksol.mesc.domain.component.type.label;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.component.Component;

public interface LabelRespository extends JpaRepository<Label, Integer> {
	@Query("select l from Label l where l.component=:component")
	Label findByComponent(@Param("component") Component component);

}
