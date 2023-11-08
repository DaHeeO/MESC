package com.ksol.mesc.domain.component.type.button.dto;

import com.ksol.mesc.domain.component.type.button.Button;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ButtonRes {
	private Integer id;
	private String name;
	private String linkType;
	private String link;
	private String icon;

	public static ButtonRes toResponse(Button button) {
		ButtonRes buttonRes = ButtonRes.builder()
			.id(button.getId())
			.name(button.getName())
			.linkType(button.getLinkType().toString())
			.link(button.getLink())
			.icon(button.getIcon())
			.build();
		return buttonRes;
	}
}
