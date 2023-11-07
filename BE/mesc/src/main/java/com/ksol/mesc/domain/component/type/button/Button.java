package com.ksol.mesc.domain.component.type.button;

import com.ksol.mesc.domain.component.LinkType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.ToString;

@Entity
@Table(name = "BUTTON")
@Getter
@ToString
public class Button {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BUTTON_ID")
	private Integer id;
	private String name;
	private Integer sequence;
	private String type;
	@Column(name = "LINK_TYPE")
	@Enumerated(EnumType.STRING)
	private LinkType linkType;
	private String link;
	private String icon;

}
