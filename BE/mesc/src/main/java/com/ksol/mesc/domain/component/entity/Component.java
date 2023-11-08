package com.ksol.mesc.domain.component.entity;

import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.component.dto.request.ComponentReq;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "COMPONENT")
@AllArgsConstructor
@NoArgsConstructor
@Builder
// @Inheritance(strategy = InheritanceType.SINGLE_TABLE)
// @DiscriminatorColumn(name = "DTYPE")
// @ToString
public class Component {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COMPONENT_ID")
	private Integer id;
	@Enumerated(EnumType.STRING)
	@Column(name = "CTYPE")
	private ComponentType componentType;
	@Column(name = "SEQUENCE")
	private Integer sequence;
	@Column(name = "LINK_ID")
	private Integer linkId;
	@ManyToOne
	@JoinColumn(name = "CARD_ID")
	private Card card;

	public static Component toEntity(ComponentReq componentReq) {
		return Component.builder()
			.id(componentReq.getId())
			.sequence(componentReq.getSequence())
			.componentType(componentReq.getType())
			.build();
	}
}
