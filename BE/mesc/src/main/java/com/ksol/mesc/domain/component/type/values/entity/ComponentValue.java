package com.ksol.mesc.domain.component.type.values.entity;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;
import com.ksol.mesc.domain.component.type.values.dto.ValuesRes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Table(name = "COMPONENT_VALUES")
@ToString
public class ComponentValue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String value;
	@Enumerated(EnumType.STRING)
	@Builder.Default
	private EntityState state = EntityState.ACTIVE;
	@Column(name = "COMPONENT_ID")
	private Integer comId;
	@ManyToOne
	@JoinColumn(name = "LINK_ID")
	private Dropdown dropdown;

	public static ComponentValue toEntity(ValuesRes valuesRes) {
		if (valuesRes.getState() == null)
			valuesRes.setState(EntityState.ACTIVE);
		return ComponentValue.builder()
			.id(valuesRes.getId())
			.value(valuesRes.getValue())
			.state(valuesRes.getState())
			.dropdown(valuesRes.getDropdown())
			.build();
	}
}
