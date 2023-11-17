package com.ksol.mesc.domain.faq.entity;

import com.ksol.mesc.domain.faq.dto.FAQReq;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Table(name = "FAQ")
@Slf4j
public class FAQ {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "FAQ_ID")
	private Integer id;
	private String question;
	private String answer;
	@ManyToOne
	@JoinColumn(name = "SECTION")
	private FAQSection faqSection;

	public static FAQ toEntity(FAQReq faqReq, FAQSection faqSection) {
		return FAQ.builder()
			.id(faqReq.getId())
			.question(faqReq.getQuestion())
			.answer(faqReq.getAnswer())
			.faqSection(faqSection)
			.build();
	}

}
