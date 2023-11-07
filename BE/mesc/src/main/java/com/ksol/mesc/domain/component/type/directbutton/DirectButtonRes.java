package com.ksol.mesc.domain.component.type.directbutton;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DirectButtonRes {
	private Integer id;
	private String name;
	private String linkType;
	private String link;
	private Integer sequence;

	public static DirectButtonRes toResponse(DirectButton directButton) {
		DirectButtonRes directButtonRes = DirectButtonRes.builder()
			.id(directButton.getId())
			.name(directButton.getName())
			.linkType(directButton.getLinkType().toString())
			.link(directButton.getLink())
			.sequence(directButton.getSequence())
			.build();
		return directButtonRes;
	}
}
