package com.ksol.mesc.domain.dcb;

import com.ksol.mesc.domain.block.entity.Block;

import com.ksol.mesc.domain.card.dto.request.CardReq;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
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
