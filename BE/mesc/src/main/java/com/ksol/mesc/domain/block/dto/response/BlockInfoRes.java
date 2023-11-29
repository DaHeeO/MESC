package com.ksol.mesc.domain.block.dto.response;

import java.util.List;

import com.ksol.mesc.domain.card.dto.rsponse.CardRes;

import lombok.Data;

@Data
public class BlockInfoRes {
	private BlockRes blockInfo;
	private List<CardRes> cardResList;
}
