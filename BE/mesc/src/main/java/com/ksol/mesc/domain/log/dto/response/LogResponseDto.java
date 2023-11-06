package com.ksol.mesc.domain.log.dto.response;

import lombok.Data;

@Data
public class LogResponseDto {
    private String logs;

    public LogResponseDto(String logs) {
        this.logs = logs;
    }
}
