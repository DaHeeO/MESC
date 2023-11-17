package com.ksol.mes.domain.developer.dto.request;

import java.util.List;

import lombok.Data;

@Data
public class DeveloperCommitRequestDto {
	private List<String> queryList;
}
