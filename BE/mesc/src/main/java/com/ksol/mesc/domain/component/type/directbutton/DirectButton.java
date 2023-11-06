package com.ksol.mesc.domain.component.type.directbutton;

import com.ksol.mesc.domain.component.LinkType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class DirectButton {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	@Column(name = "LINK_TYPE")
	private LinkType linkType;
	@Column(name = "LINK_ID")
	private Integer linkId;
	private Integer sequence;
}
