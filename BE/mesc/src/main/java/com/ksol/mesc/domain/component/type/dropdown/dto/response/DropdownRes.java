package com.ksol.mesc.domain.component.type.dropdown.dto.response;

import java.util.List;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;
import com.ksol.mesc.domain.component.type.dropdown.entity.DropdownType;
import com.ksol.mesc.domain.component.type.values.dto.ValuesRes;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DropdownRes {
	private Integer id;
	private String name;
	private String columnName;
	private String tableName;
	private DropdownType type;
	private EntityState state;
	private List<ValuesRes> valuesList;

	public static DropdownRes toResponse(Dropdown dropdown, List<ValuesRes> valuesReqList) {
		return DropdownRes.builder()
			.id(dropdown.getId())
			.name(dropdown.getName())
			.columnName(dropdown.getColumnName())
			.tableName(dropdown.getTableName())
			.type(dropdown.getType())
			.valuesList(valuesReqList)
			.build();
	}
}
