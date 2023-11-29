package com.ksol.mes.domain.admin.entity;

import org.springframework.web.bind.annotation.GetMapping;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "action_map")
@Getter
public class ActionMap {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ACTION_ID")
	private Integer id;
	private String query;
	@Column(name = "QUERY_TYPE")
	private String queryType;
}
