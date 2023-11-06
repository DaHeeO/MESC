package com.ksol.mesc.domain.component.type.label.dto;

import com.ksol.mesc.domain.component.type.label.Label;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LabelRes {
	private Integer id;
	private String name;
	private Integer sequence;

	public static LabelRes toResponse(Label label) {
		LabelRes checkboxRes = LabelRes.builder()
			.id(label.getId())
			.name(label.getName())
			.sequence(label.getSequence())
			.build();
		return checkboxRes;
	}
}
