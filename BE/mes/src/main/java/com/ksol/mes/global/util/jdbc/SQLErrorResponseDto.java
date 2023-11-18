package com.ksol.mes.global.util.jdbc;

import lombok.Data;

@Data
public class SQLErrorResponseDto {
    private Boolean result = false;

    String content;

    public SQLErrorResponseDto(String message) {
        this.content = message;
    }
}
