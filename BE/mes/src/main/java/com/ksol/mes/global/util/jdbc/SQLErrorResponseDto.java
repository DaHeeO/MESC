package com.ksol.mes.global.util.jdbc;

import lombok.Data;

@Data
public class SQLErrorResponseDto {
    String message;

    public SQLErrorResponseDto(String message) {
        this.message = message;
    }
}
