package com.ksol.mesc.domain.component.type.values.dto;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;
import com.ksol.mesc.domain.component.type.values.entity.ComponentValue;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ValuesRes {
	private Integer id;
	private String value;
	private Integer linkId;
	private EntityState state;
	private Integer comId;
	private Dropdown dropdown;

	public static ValuesRes toResponse(ComponentValue values) {
		return ValuesRes.builder()
			.id(values.getId())
			.value(values.getValue())
			.linkId(values.getDropdown().getId())
			.comId(values.getComId())
			.build();
	}
}
