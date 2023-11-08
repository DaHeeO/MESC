package com.ksol.mesc.domain.component.type.label;

import com.ksol.mesc.domain.card.entity.Card;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Getter
@Table(name = "LABEL")
// @DiscriminatorValue("LA")
public class Label {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "LABEL_ID")
	private Integer id;
	private String name;
	private Character labelType;
	private Integer sequence;
	@ManyToOne
	@JoinColumn(name = "CARD_ID")
	private Card card;
}
