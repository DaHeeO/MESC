package com.ksol.mesc.domain.component.dto.request;

import java.util.List;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class ComponentPairReq {
	private List<ComponentReq> componentList;
	private List<Object> objectList;
}
