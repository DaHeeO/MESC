package com.ksol.mesc.domain.faq.service;

import java.util.List;

import com.ksol.mesc.domain.faq.dto.FAQReq;
import com.ksol.mesc.domain.faq.dto.FAQRes;

public interface FAQService {
	List<FAQRes> selectAllFAQ();

	List<FAQRes> selectAllFAQBySection(Integer sectionId);

	FAQRes selectFAQById(Integer faqId);

	void deleteFAQ(Integer faqId);

	FAQRes addFAQ(FAQReq faqReq);

	void updateFAQ(FAQReq faqReq);
}
