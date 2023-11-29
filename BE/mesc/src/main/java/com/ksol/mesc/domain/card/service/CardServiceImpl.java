package com.ksol.mesc.domain.card.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ksol.mesc.domain.block.service.BlockService;
import com.ksol.mesc.domain.card.dto.rsponse.CardRes;
import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.card.repository.CardRepository;
import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.dto.response.ComponentRes;
import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.repository.ComponentRepository;
import com.ksol.mesc.global.error.exception.EntityNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements CardService {
	private final CardRepository cardRepository;
	private final ComponentRepository componentRepository;
	private final BlockService blockService;

	//카드 조회
	@Override
	public Card selectCard(Integer cardId) {
		Optional<Card> card = cardRepository.findById(cardId);
		if (card.isEmpty())
			return null;
		return card.get();
	}

	@Override
	public CardRes selectCardByAdmin(Integer cardId) {
		Card card = cardRepository.findById(cardId).orElseThrow(() -> new EntityNotFoundException("Card Not Found"));
		List<Component> componentList = componentRepository.findByCard(card, EntityState.ACTIVE);
		List<ComponentRes> components = blockService.selectComponentByAdmin(componentList);
		CardRes cardRes = CardRes.toResponse(card, components);

		return cardRes;
	}
}
