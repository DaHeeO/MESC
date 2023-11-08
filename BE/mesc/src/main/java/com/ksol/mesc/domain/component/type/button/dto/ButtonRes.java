package com.ksol.mesc.domain.component.type.button.dto;

import com.ksol.mesc.domain.component.type.button.entity.Button;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ButtonRes {
	private Integer id;
	private String name;
	private String linkType;
	private String link;
	private Integer iconId;
	private String response;

	public static ButtonRes toResponse(Button button) {
		ButtonRes buttonRes = ButtonRes.builder()
			.id(button.getId())
			.name(button.getName())
			.linkType(button.getLinkType().toString())
			.link(button.getLink())
			.iconId(button.getIconId())
			.response(button.getResponse())
			.build();
		return buttonRes;
	}
}
