package com.ksol.mesc.domain.block.service;

import java.util.LinkedHashMap;

import com.ksol.mesc.domain.block.dto.request.BlockReqDto;
import com.ksol.mesc.domain.block.dto.request.CardReqDto;
import com.ksol.mesc.domain.card.entity.CardType;

public interface BlockService {
	void addBlockContent(BlockReqDto blockReqDto);

	void deleteBlockContent(Integer blockId, BlockReqDto blockReqDto);

	void updateBlockContent(Integer blockId, BlockReqDto blockReqDto);

	LinkedHashMap<String, Object> selectBlockInfo(Integer blockId, CardReqDto cardReqDto, Integer userId);

	Object requestPostToMes(String url, CardReqDto cardReqDto, CardType cardType);
}
