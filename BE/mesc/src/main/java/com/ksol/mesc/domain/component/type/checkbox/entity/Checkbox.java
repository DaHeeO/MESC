package com.ksol.mesc.domain.component.type.checkbox.entity;

import com.ksol.mesc.domain.common.EntityState;

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
@Table(name = "CHECKBOX")
// @DiscriminatorValue("CB")
public class Checkbox {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CHECKBOX_ID")
	private Integer id;
	private String name;
	@Enumerated(EnumType.STRING)
	private EntityState state;
}
