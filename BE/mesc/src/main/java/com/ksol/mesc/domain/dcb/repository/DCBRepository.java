package com.ksol.mesc.domain.dcb.repository;

import java.util.List;

import com.ksol.mesc.domain.dcb.DCB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DCBRepository extends JpaRepository<DCB, Integer> {
	//blockid와 연결된 바로가기버튼 종류 조회
	@Query("select d from DCB_MAP d where d.blockId=:blockId")
	List<DCB> findByBlockId(@Param("blockId") Integer blockId);
}
