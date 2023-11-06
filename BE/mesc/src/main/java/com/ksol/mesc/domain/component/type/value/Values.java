package com.ksol.mesc.domain.component.type.value;

import com.ksol.mesc.domain.component.ComponentType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Values {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private ComponentType componentType;
	private Integer comId;
}
