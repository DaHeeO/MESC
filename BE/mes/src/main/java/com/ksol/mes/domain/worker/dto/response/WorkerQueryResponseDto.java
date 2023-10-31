package com.ksol.mes.domain.worker.dto.response;

import lombok.Data;

@Data
public class WorkerQueryResponseDto {
    private String query;
    public WorkerQueryResponseDto(String query) {
        this.query = query;
    }
}
