package com.ksol.mesc.domain.component.type.label;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.card.entity.Card;

public interface LabelRepository extends JpaRepository<Label, Integer> {
	@Query("select l from Label l where l.card=:card")
	List<Label> findByCard(@Param("card") Card card);
}
