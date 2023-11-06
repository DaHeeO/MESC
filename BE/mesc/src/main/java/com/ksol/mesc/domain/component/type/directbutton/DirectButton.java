package com.ksol.mesc.domain.component.type.directbutton;

import com.ksol.mesc.domain.component.LinkType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DirectButton {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private LinkType linkType;
	private Integer linkId;
	private Integer sequence;
}
