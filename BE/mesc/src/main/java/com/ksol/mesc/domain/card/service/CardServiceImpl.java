package com.ksol.mesc.domain.card.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ksol.mesc.domain.card.entity.Card;
import com.ksol.mesc.domain.card.repository.CardRepository;
import com.ksol.mesc.domain.component.repository.ComponentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements CardService {
	private final CardRepository cardRepository;
	private final ComponentRepository componentRepository;

	//카드 조회
	@Override
	public Card selectCard(Integer cardId) {
		Optional<Card> card = cardRepository.findById(cardId);
		if (card.isEmpty())
			return null;
		return card.get();
	}
}
