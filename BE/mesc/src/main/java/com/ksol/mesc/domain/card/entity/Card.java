package com.ksol.mesc.domain.card.entity;

import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.card.dto.request.CardReq;
import com.ksol.mesc.domain.common.EntityState;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Slf4j
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
	@Enumerated(EnumType.STRING)
	private EntityState state;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "BLOCK_ID")
	private Block block;
	@Column(name = "CONTENT_KEY")
	private String contentKey;

	public static Card toEntity(CardReq cardReq) {
		if (cardReq.getState() == null) {
			cardReq.setState(EntityState.ACTIVE);
		}
		return Card.builder()
			.id(cardReq.getId())
			.name(cardReq.getName())
			.sequence(cardReq.getSequence())
			.cardType(CardType.valueOf(cardReq.getCardType()))
			.content(cardReq.getContent())
			.block(cardReq.getBlock())
			.state(cardReq.getState())
			.build();
	}

	@Override
	public String toString() {
		return "Card{" +
			"id=" + id +
			", name='" + name + '\'' +
			", sequence=" + sequence +
			", cardType=" + cardType +
			", content='" + content + '\'' +
			", block=" + block.getId() +
			'}';
	}
}
