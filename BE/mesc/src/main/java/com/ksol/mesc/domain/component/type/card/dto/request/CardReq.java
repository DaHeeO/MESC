package com.ksol.mesc.domain.component.type.card.dto.request;

import com.ksol.mesc.domain.component.type.card.Card;
import com.ksol.mesc.domain.component.type.card.CardType;

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

	public static CardReq toResponse(Card card) {
		CardReq cardReq = CardReq.builder()
			.id(card.getId())
			.name(card.getName())
			.sequence(card.getSequence())
			.cardType(card.getCardType())
			.content(card.getContent())
			.build();

		return cardReq;
	}
}
