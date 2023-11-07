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
	@Column(name = "NAME")
	private String name;
	@Column(name = "LINK_TYPE")
	@Enumerated(EnumType.STRING)
	private LinkType linkType;
	@Column(name = "LINK")
	private String link;
	@Column(name = "ICON_ID")
	private Integer iconId;
	@Column(name = "RESPONSE")
	private String response;
	@Column(name = "RESPONSE_TYPE")
	private String responseType;

}
