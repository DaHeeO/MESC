package com.ksol.mesc.domain.faq.dto;

import com.ksol.mesc.domain.faq.entity.FAQ;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class FAQRes {
	private Integer id;
	private String question;
	private String answer;
	private FAQSectionRes section;

	public static FAQRes toResponse(FAQ faq) {
		return FAQRes.builder()
			.id(faq.getId())
			.question(faq.getQuestion())
			.answer(faq.getAnswer())
			.section(FAQSectionRes.toResponse(faq.getFaqSection()))
			.build();
	}
}
