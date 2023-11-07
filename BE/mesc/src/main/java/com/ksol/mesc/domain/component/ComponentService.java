package com.ksol.mesc.domain.component;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ksol.mesc.domain.card.Card;
import com.ksol.mesc.domain.card.CardType;
import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.repository.ComponentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ComponentService {
	private final ComponentRepository componentRepository;

	//카드와 연관된 component 조회
	public List<Component> selectComponentByCard(Card card) {
		//카드 타입에 따른 조회
		CardType cardType = card.getCardType();

		if (cardType == CardType.RE) {
			
		}

		return componentRepository.findByCard(card);
	}
}
