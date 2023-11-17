package com.ksol.mesc.domain.faq.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ksol.mesc.domain.faq.dto.FAQSectionRes;
import com.ksol.mesc.domain.faq.entity.FAQSection;
import com.ksol.mesc.domain.faq.repository.FAQSectionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FAQSectionServiceImpl implements FAQSectionService {
	private final FAQSectionRepository faqSectionRepository;

	@Override
	public List<FAQSectionRes> selectAllFAQSection() {
		List<FAQSection> faqSectionList = faqSectionRepository.findAll();
		List<FAQSectionRes> faqSectionResList = new ArrayList<>();

		for (FAQSection faqSection : faqSectionList) {
			FAQSectionRes faqSectionRes = FAQSectionRes.toResponse(faqSection);
			faqSectionResList.add(faqSectionRes);
		}

		return faqSectionResList;
	}
}
