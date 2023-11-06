package com.ksol.mesc.domain.block.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ksol.mesc.domain.block.entity.Block;

public interface BlockRepository extends JpaRepository<Block, Integer> {
}
