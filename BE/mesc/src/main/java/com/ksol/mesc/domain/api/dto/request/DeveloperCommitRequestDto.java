package com.ksol.mesc.domain.api.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeveloperCommitRequestDto {
	private List<String> queryList;
}
