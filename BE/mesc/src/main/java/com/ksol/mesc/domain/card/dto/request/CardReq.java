package com.ksol.mesc.domain.card.dto.request;

import java.util.List;

import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.dto.request.ComponentReq;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CardReq {
	private Integer id;
	private String name;
	private Integer sequence;
	private String cardType;
	private String content;
	private Integer blockId;
	private Block block;
	private EntityState state;
	private List<ComponentReq> componentList;
	// private ComponentPairReq componentPairReq;

	public static CardReq toResponse(Card card) {
		return CardReq.builder()
			.id(card.getId())
			.name(card.getName())
			.sequence(card.getSequence())
			.cardType(card.getCardType().toString())
			.content(card.getContent())
			.blockId(card.getBlock().getId())
			.build();
	}
}
