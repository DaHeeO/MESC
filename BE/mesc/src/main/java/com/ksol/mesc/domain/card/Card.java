package com.ksol.mesc.domain.card;

import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.card.dto.request.CardReq;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Card {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CARD_ID")
	private Integer id;
	@Column(name = "CARD_NAME")
	private String name;
	@Column(name = "CARD_SEQUENCE")
	private Integer sequence;
	@Enumerated(EnumType.STRING)
	private CardType cardType;
	private String content;
	@ManyToOne
	@JoinColumn(name = "BLOCK_ID")
	private Block block;

	public static Card toEntity(CardReq cardReq) {
		Card card = Card.builder()
			.id(cardReq.getId())
			.name(cardReq.getName())
			.sequence(cardReq.getSequence())
			// .cardType(cardReq.getCardType())
			.cardType(CardType.valueOf(cardReq.getCardType()))
			.content(cardReq.getContent())
			.block(Block.builder().id(cardReq.getBlockId()).build())
			.build();
		return card;
	}
}
