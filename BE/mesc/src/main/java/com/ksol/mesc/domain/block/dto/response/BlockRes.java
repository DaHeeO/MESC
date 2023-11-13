package com.ksol.mesc.domain.block.dto.response;

import com.ksol.mesc.domain.block.entity.Block;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class BlockRes {
	private Integer id;
	private String name;

	public static BlockRes toResponse(Block block) {
		return BlockRes.builder()
			.id(block.getId())
			.name(block.getName())
			.build();
	}
}
