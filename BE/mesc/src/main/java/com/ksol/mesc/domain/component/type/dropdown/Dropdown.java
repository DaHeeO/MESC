package com.ksol.mesc.domain.component.type.dropdown;

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
@Table(name = "DROPDOWN")
// @DiscriminatorValue("DD")
public class Dropdown {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DROPDOWN_ID")
	private Integer id;
	@Column(name = "NAME")
	private String name;
	@Column(name = "REAL_COLUMN_NAME")
	private String columnName;
	@Enumerated(EnumType.STRING)
	private DropdownType type;
}
