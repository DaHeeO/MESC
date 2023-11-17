package com.ksol.mesc.domain.faq.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ksol.mesc.domain.faq.entity.FAQSection;

public interface FAQSectionRepository extends JpaRepository<FAQSection, Integer> {
}
