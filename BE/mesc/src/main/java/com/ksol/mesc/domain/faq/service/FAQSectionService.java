package com.ksol.mesc.domain.faq.service;

import java.util.List;

import com.ksol.mesc.domain.faq.dto.FAQSectionRes;

public interface FAQSectionService {
	List<FAQSectionRes> selectAllFAQSection();
}
