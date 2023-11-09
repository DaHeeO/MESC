package com.ksol.mesc.domain.block.entity;

import com.ksol.mesc.domain.block.dto.request.BlockInfoDto;
import com.ksol.mesc.domain.common.EntityState;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Block {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BLOCK_ID")
	private Integer id;
	@Column(name = "BLOCK_NAME")
	private String name;
	@Enumerated(EnumType.STRING)
	private EntityState state;
	@Column(name = "IS_POSSIBLE")
	private Boolean isPossible;

	public static Block toEntity(BlockInfoDto blockInfoDto) {
		return Block.builder()
			.id(blockInfoDto.getId())
			.name(blockInfoDto.getName())
			.build();
	}

	@Override
	public String toString() {
		return "Block{" +
			"id=" + id +
			", name='" + name + '\'' +
			", isPossible=" + isPossible +
			'}';
	}
}
