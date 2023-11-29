package com.ksol.mes.domain.admin.dto;

import com.ksol.mes.domain.admin.entity.ActionMap;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class ActionMapDto {
	private Integer id;
	private String query;

	public static ActionMapDto toResponse(ActionMap actionMap){
		return ActionMapDto.builder()
			.id(actionMap.getId())
			.query(actionMap.getQuery())
			.build();
	}
}
