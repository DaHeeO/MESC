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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "BUTTON")
// @DiscriminatorValue("BU")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Button {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BUTTON_ID")
	private Integer id;
	private String name;
	private Integer sequence;
	@Column(name = "TYPE")
	private String bType;
	private String icon;
	@Column(name = "LINK_TYPE")
	@Enumerated(EnumType.STRING)
	private LinkType linkType;
	private String link;
	private String response;

}
