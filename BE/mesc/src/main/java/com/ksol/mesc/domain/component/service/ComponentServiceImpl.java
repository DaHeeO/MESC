package com.ksol.mesc.domain.component.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.entity.Component;
import com.ksol.mesc.domain.component.repository.ComponentRepository;
import com.ksol.mesc.global.error.exception.EntityNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ComponentServiceImpl implements ComponentService{
	private final ComponentRepository componentRepository;

	@Override
	@Transactional
	public Component deleteComponentById(Integer componentId) {
		Component component = componentRepository.findById(componentId).orElseThrow(() -> new EntityNotFoundException("Component Not Found"));
		componentRepository.updateState(component.getId(), EntityState.DELETE);
		return component;
	}
}
