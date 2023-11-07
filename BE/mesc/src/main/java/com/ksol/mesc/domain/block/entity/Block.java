package com.ksol.mesc.domain.block.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
	@Column(name = "USER_ID")
	private Integer userId;

	@Override
	public String toString() {
		return "Block{" +
				"id=" + id +
				", name='" + name + '\'' +
				", userId=" + userId +
				'}';
	}
}
