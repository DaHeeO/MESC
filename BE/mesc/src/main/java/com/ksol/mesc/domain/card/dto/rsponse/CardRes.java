package com.ksol.mesc.domain.card.dto.rsponse;

import java.util.List;

import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.card.entity.CardType;
import com.ksol.mesc.domain.component.dto.response.ComponentRes;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class CardRes {
	private Integer id;
	private String name;
	private Integer sequence;
	private CardType cardType;
	private String content;
	private List<ComponentRes> componentList;

	public static CardRes toResponse(Card card, List<ComponentRes> componentResList) {
		return CardRes.builder()
			.id(card.getId())
			.name(card.getName())
			.sequence(card.getSequence())
			.cardType(card.getCardType())
			.content(card.getContent())
			.componentList(componentResList)
			.build();
	}
}
