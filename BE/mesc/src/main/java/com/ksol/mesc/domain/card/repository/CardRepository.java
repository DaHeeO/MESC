package com.ksol.mesc.domain.card.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.card.entity.Card;

public interface CardRepository extends JpaRepository<Card, Integer> {
	//blockid와 연결된 카드 조회
	@Query("select c from Card c where c.block.id=:blockId")
	List<Card> findByBlockId(@Param("blockId") Integer blockId);

	//card 저장 후, 반환
	Card save(@Param("card") Card card);
}
