package com.ksol.mesc.domain.component.type.dropdown.dto;

import com.ksol.mesc.domain.component.type.dropdown.Dropdown;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DropdownRes {
	private Integer id;
	private String name;
	private String columnName;
	private String type;

	public static DropdownRes toResponse(Dropdown dropdown) {
		DropdownRes dropdownRes = DropdownRes.builder()
			.id(dropdown.getId())
			.name(dropdown.getName())
			.columnName(dropdown.getColumnName())
			.type(dropdown.getType().toString())
			.build();
		return dropdownRes;
	}
}
