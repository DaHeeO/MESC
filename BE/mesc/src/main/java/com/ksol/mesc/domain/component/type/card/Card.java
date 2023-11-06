package com.ksol.mesc.domain.component.type.card;

import com.ksol.mesc.domain.component.type.block.Block;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;

@Entity
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
}
