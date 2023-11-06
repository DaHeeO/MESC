package com.ksol.mesc.domain.component.type.checkbox;

import com.ksol.mesc.domain.component.entity.Component;

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
@Table(name = "CHECKBOX")
public class Checkbox {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CHECKBOX_ID")
	private Integer id;
	private String name;
	@ManyToOne
	@JoinColumn(name = "COMPONENT_ID")
	private Component component;
}
