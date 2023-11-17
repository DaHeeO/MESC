package com.ksol.mesc.domain.faq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ksol.mesc.domain.faq.entity.FAQ;

public interface FAQRepository extends JpaRepository<FAQ, Integer> {
	FAQ save(FAQ faq);

	@Query("select f from FAQ f where f.faqSection.id=:sectionId")
	List<FAQ> findBySection(@Param("sectionId") Integer sectionId);
}
