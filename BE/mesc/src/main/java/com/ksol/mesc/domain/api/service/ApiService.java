package com.ksol.mesc.domain.api.service;

import com.ksol.mesc.domain.api.classes.Table;
import com.ksol.mesc.domain.api.dto.response.DeveloperDataResponseDto;
import com.ksol.mesc.domain.common.CommonResponseDto;
import org.springframework.http.ResponseEntity;

import java.util.LinkedHashMap;

public interface ApiService {
    String getStartMessage(String name);
    LinkedHashMap<String, Object> getTableByQuery(String query);

    LinkedHashMap<String, Object> getCountsByQuery(String query);

    LinkedHashMap<String, Object> getTableByActionId(Integer actionId, String conditions);

    LinkedHashMap<String, Object> getCountsByActionId(Integer actionId, String conditions);
}
