package com.ksol.mesc.domain.faq.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ksol.mesc.domain.faq.dto.FAQReq;
import com.ksol.mesc.domain.faq.dto.FAQRes;
import com.ksol.mesc.domain.faq.entity.FAQ;
import com.ksol.mesc.domain.faq.entity.FAQSection;
import com.ksol.mesc.domain.faq.repository.FAQRepository;
import com.ksol.mesc.domain.faq.repository.FAQSectionRepository;
import com.ksol.mesc.global.error.exception.EntityNotFoundException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FAQServiceImpl implements FAQService {
	private final FAQRepository faqRepository;
	private final FAQSectionRepository faqSectionRepository;

	@Override
	public List<FAQRes> selectAllFAQ() {
		List<FAQ> faqList = faqRepository.findAll();
		List<FAQRes> faqResList = new ArrayList<>();
		for (FAQ faq : faqList) {
			faqResList.add(FAQRes.toResponse(faq));
		}

		return faqResList;
	}

	@Override
	public List<FAQRes> selectAllFAQBySection(Integer sectionId) {
		List<FAQ> faqList = faqRepository.findBySection(sectionId);
		List<FAQRes> faqResList = new ArrayList<>();
		for (FAQ faq : faqList) {
			faqResList.add(FAQRes.toResponse(faq));
		}

		return faqResList;
	}

	@Override
	public FAQRes selectFAQById(Integer faqId) {
		FAQ faq = faqRepository.findById(faqId).orElseThrow(() -> new EntityNotFoundException("FAQ Not Found"));
		return FAQRes.toResponse(faq);
	}

	@Override
	@Transactional
	public void deleteFAQ(Integer faqId) {
		faqRepository.deleteById(faqId);
	}

	@Override
	@Transactional
	public FAQRes addFAQ(FAQReq faqReq) {
		FAQSection faqSection = faqSectionRepository.findById(faqReq.getSectionId())
			.orElseGet(() -> faqSectionRepository.findById(1)
				.orElseThrow(() -> new EntityNotFoundException("FAQSection Not Found")));

		FAQRes faqRes = FAQRes.toResponse(faqRepository.save(FAQ.toEntity(faqReq, faqSection)));

		return faqRes;
	}

	@Override
	@Transactional
	public void updateFAQ(FAQReq faqReq) {
		FAQSection faqSection = faqSectionRepository.findById(faqReq.getSectionId())
			.orElseThrow(() -> new EntityNotFoundException("FAQSection Not Found"));

		FAQ faq = FAQ.toEntity(faqReq, faqSection);
		faqRepository.save(faq);
	}
}
