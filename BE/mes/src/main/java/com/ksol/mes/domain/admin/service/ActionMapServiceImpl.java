package com.ksol.mes.domain.admin.service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ksol.mes.domain.admin.dto.ActionMapDto;
import com.ksol.mes.domain.admin.dto.ActionMapRes;
import com.ksol.mes.domain.admin.entity.ActionMap;
import com.ksol.mes.domain.admin.respository.ActionMapRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ActionMapServiceImpl implements ActionMapService{
	private final ActionMapRepository actionMapRepository;

	@Override
	public List<ActionMapDto> selectActionMap() {
		List<ActionMap> actionMapList = actionMapRepository.findAll();
		List<ActionMapDto> actionMapResList = new ArrayList<>();

		for(ActionMap actionMap : actionMapList){
			actionMapResList.add(ActionMapDto.toResponse(actionMap));
		}

		return actionMapResList;
	}
}
