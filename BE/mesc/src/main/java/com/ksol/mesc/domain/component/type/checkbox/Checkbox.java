package com.ksol.mesc.domain.component.type.checkbox;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
// @Table(name = "CHECKBOX")
@DiscriminatorValue("CB")
public class Checkbox {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CHECKBOX_ID")
	private Integer id;
	private String name;
}
