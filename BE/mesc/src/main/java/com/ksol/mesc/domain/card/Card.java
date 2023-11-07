package com.ksol.mesc.domain.card;

import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.card.dto.request.CardReq;

import jakarta.persistence.*;
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
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "BLOCK_ID")
	private Block block;
	@Column(name = "CONTENT_KEY")
	private String contentKey;

	public static Card toEntity(CardReq cardReq) {
		Card card = Card.builder()
			.id(cardReq.getId())
			.name(cardReq.getName())
			.sequence(cardReq.getSequence())
			.cardType(cardReq.getCardType())
			.content(cardReq.getContent())
			.block(Block.builder().id(cardReq.getBlockId()).build())
			.build();
		return card;
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
