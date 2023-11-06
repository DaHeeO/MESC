package com.ksol.mesc.domain.component.type.block.dto.request;

import java.util.List;

import com.ksol.mesc.domain.component.type.card.dto.request.CardReq;

import lombok.Data;

@Data
public class BlockInfo2 {
	private Integer id;
	private List<CardReq> cardList;
}
