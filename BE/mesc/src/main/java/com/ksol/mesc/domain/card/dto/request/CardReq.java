package com.ksol.mesc.domain.card.dto.request;

import com.ksol.mesc.domain.card.Card;
import com.ksol.mesc.domain.card.CardType;
import com.ksol.mesc.domain.component.dto.request.ComponentTypeReq;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CardReq {
	private Integer id;
	private String name;
	private Integer sequence;
	private CardType cardType;
	private String content;
	private Integer blockId;
	private ComponentTypeReq componentTypeReq;

	public static CardReq toResponse(Card card) {
		CardReq cardReq = CardReq.builder()
			.id(card.getId())
			.name(card.getName())
			.sequence(card.getSequence())
			.cardType(card.getCardType())
			.content(card.getContent())
			.blockId(card.getBlock().getId())
			.build();

		return cardReq;
	}
}
