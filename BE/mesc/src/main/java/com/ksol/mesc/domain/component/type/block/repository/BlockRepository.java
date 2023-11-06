package com.ksol.mesc.domain.component.type.block.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ksol.mesc.domain.component.type.block.Block;

public interface BlockRepository extends JpaRepository<Block, Integer> {
}
