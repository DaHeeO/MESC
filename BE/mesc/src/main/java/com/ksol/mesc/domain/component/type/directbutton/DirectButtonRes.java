package com.ksol.mesc.domain.component.type.directbutton;

import com.ksol.mesc.domain.component.LinkType;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DirectButtonRes {
	private Integer id;
	private String name;
	private LinkType linkType;
	private Integer linkId;
	private Integer sequence;

	public static DirectButtonRes toResponse(DirectButton directButton) {
		DirectButtonRes directButtonRes = DirectButtonRes.builder()
			.id(directButton.getId())
			.name(directButton.getName())
			.linkType(directButton.getLinkType())
			.linkId(directButton.getLinkId())
			.sequence(directButton.getSequence())
			.build();
		return directButtonRes;
	}
}
