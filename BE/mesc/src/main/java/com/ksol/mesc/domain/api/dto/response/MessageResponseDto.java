package com.ksol.mesc.domain.api.dto.response;

import lombok.Data;

@Data
public class MessageResponseDto {

    private String message;

    public MessageResponseDto(String message) {
        this.message = message;
    }
}
