package com.ksol.mesc.domain.component.type.checkbox.dto.response;

import com.ksol.mesc.domain.component.type.checkbox.entity.Checkbox;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CheckboxRes {
	private Integer id;
	private String name;

	public static CheckboxRes toResponse(Checkbox checkbox) {
		return CheckboxRes.builder()
			.id(checkbox.getId())
			.name(checkbox.getName())
			.build();
	}
}
