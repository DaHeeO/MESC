package com.ksol.mes.domain.admin.service;

import java.util.LinkedHashMap;
import java.util.List;

import com.ksol.mes.domain.admin.dto.ActionMapDto;
import com.ksol.mes.domain.admin.dto.ActionMapRes;

public interface ActionMapService {
	List<ActionMapDto> selectActionMap();
}
