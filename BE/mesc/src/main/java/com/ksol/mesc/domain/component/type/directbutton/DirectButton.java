package com.ksol.mesc.domain.component.type.directbutton;

import com.ksol.mesc.domain.component.entity.LinkType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Getter
@Table(name = "DIRECT_CONNECT_BUTTON")
public class DirectButton {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DCB_ID")
	private Integer id;
	@Column(name = "DCB_NAME")
	private String name;
	@Column(name = "RESPONSE_TYPE")
	private String responseType;
	private String response;
	@Column(name = "DCBB_SEQUENCE")
	private Integer sequence;
	@Column(name = "DCB_LINK")
	private String link;
	@Column(name = "DCB_LINK_TYPE")
	@Enumerated(EnumType.STRING)
	private LinkType linkType;
}
