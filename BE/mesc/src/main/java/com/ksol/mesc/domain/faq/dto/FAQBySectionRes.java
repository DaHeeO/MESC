package com.ksol.mesc.domain.faq.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FAQBySectionRes {
	private Integer id;
	private String name;
}
