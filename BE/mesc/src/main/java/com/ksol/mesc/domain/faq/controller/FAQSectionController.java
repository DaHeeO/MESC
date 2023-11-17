package com.ksol.mesc.domain.faq.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.common.dto.response.CommonResponseDto;
import com.ksol.mesc.domain.faq.dto.FAQSectionRes;
import com.ksol.mesc.domain.faq.service.FAQSectionService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/faqSection")
public class FAQSectionController {
	private final FAQSectionService faqSectionService;

	@Operation(summary = "전체 FAQ Section 조회 API", description = "전체 FAQ Section 목록을 조회한다.")
	@GetMapping("/all")
	public ResponseEntity<CommonResponseDto<?>> selectAllFAQ() {
		List<FAQSectionRes> faqSectionRes = faqSectionService.selectAllFAQSection();

		return ResponseEntity.ok(CommonResponseDto.success(faqSectionRes));
	}
}
