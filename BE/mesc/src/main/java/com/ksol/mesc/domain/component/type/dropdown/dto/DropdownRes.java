package com.ksol.mesc.domain.component.type.dropdown.dto;

import java.util.List;

import com.ksol.mesc.domain.component.type.dropdown.Dropdown;
import com.ksol.mesc.domain.component.values.dto.ValuesRes;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DropdownRes {
	private Integer id;
	private String name;
	private String columnName;
	private String type;
	private List<ValuesRes> valuesList;

	public static DropdownRes toResponse(Dropdown dropdown, List<ValuesRes> valuesReqList) {
		DropdownRes dropdownRes = DropdownRes.builder()
			.id(dropdown.getId())
			.name(dropdown.getName())
			.columnName(dropdown.getColumnName())
			.type(dropdown.getType().toString())
			.valuesList(valuesReqList)
			.build();
		return dropdownRes;
	}
}
