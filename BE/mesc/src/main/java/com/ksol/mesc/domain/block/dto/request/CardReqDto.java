package com.ksol.mesc.domain.block.dto.request;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class CardReqDto {
	private String title;
	private Integer actionId;
	// 프론트에서 빈문자열을 null로 넘길지 ""로 넘길지 확인해서 그에 맞게 처리해야 함 일단은 빈문자열로 가정
	private String conditions;  // 나중에 where 절이거나 비어있거나를 검사해야함
	private String query;
	private Map<String, String> variables;
	private String keyword;
	private String date;
	private List<String> levelList;
	private List<String> queryList;
}
