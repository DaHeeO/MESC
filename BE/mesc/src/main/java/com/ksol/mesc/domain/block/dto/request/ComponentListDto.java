package com.ksol.mesc.domain.block.dto.request;

import java.util.List;

import com.ksol.mesc.domain.component.dto.request.ComponentReq;

import lombok.Data;

@Data
public class ComponentListDto {
	private List<ComponentReq> componentList;
}
