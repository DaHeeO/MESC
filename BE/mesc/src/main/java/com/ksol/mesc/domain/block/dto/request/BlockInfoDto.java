package com.ksol.mesc.domain.block.dto.request;

import com.ksol.mesc.domain.block.entity.Block;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlockInfoDto {
	private Integer id;
	private String name;
	private Boolean isEditable;

	public static BlockInfoDto toResponse(Block block) {
		BlockInfoDto blockInfoDto = BlockInfoDto.builder()
			.id(block.getId())
			.name(block.getName())
			.build();
		return blockInfoDto;
	}
}
