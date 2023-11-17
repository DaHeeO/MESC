package com.ksol.mes.domain.worker.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
public class LabelResponseDto {
	private String name;
	private String labelType;
	private String query;

	public static LabelResponseDto toResponse(String name, String labelType, String query){
		return LabelResponseDto.builder()
			.name(name)
			.labelType(labelType)
			.query(query)
			.build();
	}
}
