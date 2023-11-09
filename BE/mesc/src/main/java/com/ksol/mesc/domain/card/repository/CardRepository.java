package com.ksol.mesc.domain.card.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.common.EntityState;

public interface CardRepository extends JpaRepository<Card, Integer> {
	//blockid와 연결된 카드 조회
	@Query("select c from Card c where c.block.id=:blockId and c.state=:state")
	List<Card> findByBlockId(@Param("blockId") Integer blockId, @Param("state") EntityState state);

	//card 저장 후, 반환
	Card save(@Param("card") Card card);

	@Modifying
	@Query("update Card c set c.state=:state where c.id=:id")
	void updateState(@Param("id") Integer id, @Param("state") EntityState state);
}
