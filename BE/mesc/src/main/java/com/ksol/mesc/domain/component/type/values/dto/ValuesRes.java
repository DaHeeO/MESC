package com.ksol.mesc.domain.component.type.values.dto;

import com.ksol.mesc.domain.component.type.values.entity.ComponentValue;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ValuesRes {
	private Integer id;
	private String value;
	private Integer linkId;

	public static ValuesRes toResponse(ComponentValue values) {
		ValuesRes valuesRes = ValuesRes.builder()
			.id(values.getId())
			.value(values.getValue())
			.linkId(values.getDropdown().getId())
			.build();
		return valuesRes;
	}
}
