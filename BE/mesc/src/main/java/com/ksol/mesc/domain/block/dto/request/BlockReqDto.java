package com.ksol.mesc.domain.block.dto.request;

import java.util.List;

import com.ksol.mesc.domain.card.dto.request.CardReq;

import lombok.Data;

@Data
public class BlockReqDto {
	//카드 정보
	//컴포넌트(버튼, 라벨, 체크박스, 드롭다운, 다이렉트 버튼) 정보
	private List<CardReq> cardReqList;
}
