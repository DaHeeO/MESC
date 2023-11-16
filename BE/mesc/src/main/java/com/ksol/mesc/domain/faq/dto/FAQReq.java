package com.ksol.mesc.domain.faq.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FAQReq {
	private Integer id;
	private String question;
	private String answer;
	private Integer sectionId;
}
