package com.ksol.mesc.domain.dcb.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "DCB_MAP")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class DCB {
	@Id
	@Column(name = "DCB_MAP_ID")
	private Integer dcbMapId;
	@Column(name = "BLOCK_ID")
	private Integer blockId;
	@Column(name = "DCB_ID")
	private Integer dcbId;

	@Override
	public String toString() {
		return "DCB{" +
			"dcbMapId=" + dcbMapId +
			", blockId=" + blockId +
			", dcbId=" + dcbId +
			'}';
	}
}
