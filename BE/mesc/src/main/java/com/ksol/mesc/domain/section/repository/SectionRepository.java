package com.ksol.mesc.domain.section.repository;

import com.ksol.mesc.domain.section.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SectionRepository extends JpaRepository<Section, Integer> {
    @Query("select s from SECTION s where s.blockId=:blockId")
    List<Section> findByBlockId(@Param("blockId") Integer blockId);
}
