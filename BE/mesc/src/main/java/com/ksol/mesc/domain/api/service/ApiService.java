package com.ksol.mesc.domain.api.service;

import com.ksol.mesc.domain.api.classes.Table;
import com.ksol.mesc.domain.api.dto.response.DeveloperDataResponseDto;
import com.ksol.mesc.domain.common.CommonResponseDto;
import org.springframework.http.ResponseEntity;

public interface ApiService {
    String getStartMessage(String name);
    ResponseEntity<CommonResponseDto> getTableByQuery(String query);

    ResponseEntity<CommonResponseDto> getCountsByQuery(String query);

    ResponseEntity<CommonResponseDto> getTableByActionId(Integer actionId, String conditions);

    ResponseEntity<CommonResponseDto> getCountsByActionId(Integer actionId, String conditions);
}
