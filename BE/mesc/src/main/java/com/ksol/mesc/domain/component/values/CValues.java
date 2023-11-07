package com.ksol.mesc.domain.component.values;

import com.ksol.mesc.domain.component.type.dropdown.Dropdown;

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
@Table(name = "COMPONENT_VALUES")
public class CValues {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String value;
	@ManyToOne
	@JoinColumn(name = "LINK_ID")
	private Dropdown dropdown;
}
