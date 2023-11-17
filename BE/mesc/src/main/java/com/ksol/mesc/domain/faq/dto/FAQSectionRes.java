package com.ksol.mesc.domain.faq.dto;

import com.ksol.mesc.domain.faq.entity.FAQSection;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class FAQSectionRes {
	private Integer id;
	private String name;

	public static FAQSectionRes toResponse(FAQSection faqSection) {
		return FAQSectionRes.builder()
			.id(faqSection.getId())
			.name(faqSection.getName())
			.build();
	}
}
