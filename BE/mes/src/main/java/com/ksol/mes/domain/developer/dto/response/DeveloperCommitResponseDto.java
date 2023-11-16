package com.ksol.mes.domain.developer.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeveloperCommitResponseDto {
	private Boolean result;
	private String content;
}
