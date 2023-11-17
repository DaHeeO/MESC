package com.ksol.mesc.domain.faq.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ksol.mesc.domain.common.dto.response.CommonResponseDto;
import com.ksol.mesc.domain.faq.dto.FAQReq;
import com.ksol.mesc.domain.faq.dto.FAQRes;
import com.ksol.mesc.domain.faq.service.FAQService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/faq")
@Slf4j
public class FAQController {
	private final FAQService faqService;

	@Operation(summary = "전체 FAQ 조회 API", description = "전체 FAQ 목록을 조회한다.")
	@GetMapping("/all")
	public ResponseEntity<CommonResponseDto<?>> selectAllFAQ() {
		List<FAQRes> faqResList = faqService.selectAllFAQ();

		return ResponseEntity.ok(CommonResponseDto.success(faqResList));
	}

	@Operation(summary = "FAQ Section별 FAQ 조회 API", description = "FAQ Section별 FAQ 목록을 조회한다.")
	@GetMapping("/all/{sectionId}")
	public ResponseEntity<CommonResponseDto<?>> selectAllFAQBySection(
		@Parameter(description = "faq section id", required = true)
		@PathVariable
		@Valid Integer sectionId) {
		List<FAQRes> faqResList = faqService.selectAllFAQBySection(sectionId);

		return ResponseEntity.ok(CommonResponseDto.success(faqResList));
	}

	@Operation(summary = "단일 FAQ 조회 API", description = "FAQ를 조회한다.")
	@GetMapping("/{faqId}")
	public ResponseEntity<CommonResponseDto<?>> selectFAQ(@Parameter(description = "faq id", required = true)
	@PathVariable
	@Valid Integer faqId) {
		FAQRes faqRes = faqService.selectFAQById(faqId);

		return ResponseEntity.ok(CommonResponseDto.success(faqRes));
	}

	@Operation(summary = "FAQ 삭제 API", description = "해당 FAQ를 DB에서 삭제한다.")
	@DeleteMapping("/{faqId}")
	public ResponseEntity<CommonResponseDto<?>> deleteFAQ(@Parameter(description = "faq id", required = true)
	@PathVariable
	@Valid Integer faqId) {
		faqService.deleteFAQ(faqId);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}

	@Operation(summary = "FAQ 추가 API", description = "해당 FAQ를 DB에 저장한다.")
	@PostMapping
	public ResponseEntity<CommonResponseDto<?>> addFAQ(@Parameter(description = "FAQ 정보")
	@RequestBody @Valid FAQReq faqReq) {
		FAQRes faqRes = faqService.addFAQ(faqReq);

		return ResponseEntity.ok(CommonResponseDto.success(faqRes));
	}

	@Operation(summary = "FAQ 수정 API", description = "해당 FAQ를 수정해서 DB에 저장한다.")
	@PatchMapping("/{faqId}")
	public ResponseEntity<CommonResponseDto<?>> updateFAQ(@Parameter(description = "FAQ 정보")
	@PathVariable @Valid Integer faqId, @Parameter(description = "FAQ 정보")
	@RequestBody @Validated FAQReq faqReq) {
		faqReq.setId(faqId);
		faqService.updateFAQ(faqReq);

		return ResponseEntity.ok(CommonResponseDto.success(null));
	}
}
