package com.ksol.mesc.domain.component.type.directbutton;

import com.ksol.mesc.domain.block.entity.Block;
import com.ksol.mesc.domain.component.entity.LinkType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Getter
@Table(name = "DIRECT_CONNECTION_BUTTON")
public class DirectButton {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DCB_ID")
	private Integer id;
	@Column(name = "DCB_NAME")
	private String name;
	@Column(name = "DCB_LINK")
	private String link;
	@Column(name = "DCB_LINK_TYPE")
	@Enumerated(EnumType.STRING)
	private LinkType linkType;
	@Column(name = "DCB_SEQUENCE")
	private Integer sequence;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "BLOCK_ID")
	private Block block;
	@Column(name = "ICON_ID")
	private Integer iconId;
	@Column(name = "RESPONSE")
	private String response;
	@Column(name = "RESPONSE_TYPE")
	private String responseType;

	@Override
	public String toString() {
		return "DirectButton{" +
			"id=" + id +
			", name='" + name + '\'' +
			", link='" + link + '\'' +
			", linkType=" + linkType +
			", sequence=" + sequence +
			", block=" + block.getId() +
			", iconId=" + iconId +
			", response='" + response + '\'' +
			", responseType='" + responseType + '\'' +
			'}';
	}
}
