package com.ksol.mesc.domain.block.service;

import java.util.LinkedHashMap;
import java.util.List;

import com.ksol.mesc.domain.block.dto.request.BlockReqDto;
import com.ksol.mesc.domain.block.dto.request.CardReqDto;
import com.ksol.mesc.domain.block.dto.response.BlockRes;
import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.card.entity.CardType;

public interface BlockService {
	List<BlockRes> selectAllBlock();

	void addBlockContent(BlockReqDto blockReqDto);

	void deleteBlock(Integer blockId);

	void deleteBlockContent(Integer blockId, BlockReqDto blockReqDto);

	void updateBlockContent(Integer blockId, BlockReqDto blockReqDto);

	LinkedHashMap<String, Object> selectBlockInfo(Integer blockId, CardReqDto cardReqDto, Integer userId);

	LinkedHashMap<String, Object> selectCardByType(Card card, CardReqDto cardReqDto, Integer myId);

	Object requestPostToMes(String url, CardReqDto cardReqDto, CardType cardType);
}
