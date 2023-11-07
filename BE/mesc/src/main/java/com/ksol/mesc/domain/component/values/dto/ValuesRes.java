package com.ksol.mesc.domain.component.values.dto;

import com.ksol.mesc.domain.component.values.CValues;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ValuesRes {
	private Integer id;
	private String value;

	public static ValuesRes toResponse(CValues values) {
		ValuesRes valuesRes = ValuesRes.builder()
			.id(values.getId())
			.value(values.getValue())
			.build();
		return valuesRes;
	}
}
