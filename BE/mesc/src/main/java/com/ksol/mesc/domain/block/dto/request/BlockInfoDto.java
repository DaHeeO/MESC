package com.ksol.mesc.domain.block.dto.request;

import com.ksol.mesc.domain.block.entity.Block;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BlockInfoDto {
	private Integer id;
	private String name;

	public static BlockInfoDto toResponse(Block block) {
		BlockInfoDto blockInfoDto = BlockInfoDto.builder()
			.id(block.getId())
			.name(block.getName())
			.build();
		return blockInfoDto;
	}
}
