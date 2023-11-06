package com.ksol.mesc.domain.component.type.checkbox.dto;

import com.ksol.mesc.domain.component.type.checkbox.Checkbox;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CheckboxRes {
	private Integer id;
	private String name;

	public static CheckboxRes toResponse(Checkbox checkbox) {
		CheckboxRes checkboxRes = CheckboxRes.builder()
			.id(checkbox.getId())
			.name(checkbox.getName())
			.build();
		return checkboxRes;
	}
}
