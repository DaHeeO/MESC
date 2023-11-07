package com.ksol.mesc.domain.component.dto.request;

import com.ksol.mesc.domain.component.entity.ComponentType;

import lombok.Data;

@Data
public class ComponentReq {
	private Integer id;
	private ComponentType type;
	private Integer sequence;
	// private Integer typeId;
}
