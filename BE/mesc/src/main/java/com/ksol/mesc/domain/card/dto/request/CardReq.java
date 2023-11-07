package com.ksol.mesc.domain.card.dto.request;

import com.ksol.mesc.domain.card.Card;
import com.ksol.mesc.domain.component.dto.request.ComponentPairReq;

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
	private ComponentPairReq componentPairReq;

	public static CardReq toResponse(Card card) {
		CardReq cardReq = CardReq.builder()
			.id(card.getId())
			.name(card.getName())
			.sequence(card.getSequence())
			.cardType(card.getCardType().toString())
			.content(card.getContent())
			.blockId(card.getBlock().getId())
			.build();

		return cardReq;
	}
}
