package com.ksol.mesc.domain.component.type.button.dto;

import com.ksol.mesc.domain.component.type.button.Button;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ButtonRes {
	private Integer id;
	private String name;
	private Integer sequence;
	private Character type;
	private Character linkType;
	private String link;
	private String icon;

	public static ButtonRes toResponse(Button button) {
		ButtonRes buttonRes = ButtonRes.builder()
			.id(button.getId())
			.name(button.getName())
			.sequence(button.getSequence())
			.type(button.getType())
			.linkType(button.getLinkType())
			.link(button.getLink())
			.icon(button.getIcon())
			.build();
		return buttonRes;
	}
}
