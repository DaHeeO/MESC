package com.ksol.mesc.domain.component.dto.request;

import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.entity.ComponentType;

import lombok.Data;

@Data
public class ComponentReq {
	private Integer id;
	private ComponentType type;
	private Integer sequence;
	private Integer linkId;
	private Object object;
	private Integer cardId;
	private EntityState state;
	private Card card;
}
