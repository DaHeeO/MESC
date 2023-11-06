package com.ksol.mesc.domain.component.type.label;

import com.ksol.mesc.domain.component.entity.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class Label {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "LABEL_ID")
	private Integer id;
	private String name;
	private Integer sequence;
	@ManyToOne
	@JoinColumn(name = "COMPONENT_ID")
	private Component component;
}
