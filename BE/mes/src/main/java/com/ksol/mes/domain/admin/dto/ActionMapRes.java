package com.ksol.mes.domain.admin.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActionMapRes {
	List<ActionMapDto> actionMapList;
}
