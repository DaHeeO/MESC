package com.ksol.mesc.domain.component.dto.request;

import java.util.List;

import com.ksol.mesc.domain.component.entity.Component;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class ComponentTypeReq {
	private List<Component> componentList;
	private List<Object> objectList;
}
