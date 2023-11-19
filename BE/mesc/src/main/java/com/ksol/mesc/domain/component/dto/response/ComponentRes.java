package com.ksol.mesc.domain.component.dto.response;

import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.entity.ComponentType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ComponentRes {
	private Integer id;
	private ComponentType type;
	private Integer sequence;
	private Object object;

	public static ComponentRes toResponse(Component component, Object object) {
		return ComponentRes.builder()
			.id(component.getId())
			.type(component.getComponentType())
			.sequence(component.getSequence())
			.object(object)
			.build();
	}
}
