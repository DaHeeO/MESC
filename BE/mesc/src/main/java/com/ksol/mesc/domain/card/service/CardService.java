package com.ksol.mesc.domain.card.service;

import com.ksol.mesc.domain.card.dto.rsponse.CardRes;
import com.ksol.mesc.domain.card.entity.Card;

public interface CardService {
	Card selectCard(Integer cardId);

	CardRes selectCardByAdmin(Integer cardId);
}
