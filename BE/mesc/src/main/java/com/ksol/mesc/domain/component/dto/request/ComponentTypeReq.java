package com.ksol.mesc.domain.component.dto.request;

import java.util.List;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class ComponentTypeReq {
	private List<ComponentReq> componentList;
	private List<Object> objectList;
}
