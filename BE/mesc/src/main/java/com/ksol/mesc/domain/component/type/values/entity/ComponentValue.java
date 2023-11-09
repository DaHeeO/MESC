package com.ksol.mesc.domain.component.type.values.entity;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Getter
@Table(name = "COMPONENT_VALUES")
public class ComponentValue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String value;
	@Enumerated(EnumType.STRING)
	private EntityState state;
	@ManyToOne
	@JoinColumn(name = "LINK_ID")
	private Dropdown dropdown;
}
