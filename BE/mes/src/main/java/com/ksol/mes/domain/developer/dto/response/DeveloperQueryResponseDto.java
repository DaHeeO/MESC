package com.ksol.mes.domain.developer.dto.response;

import lombok.Data;

@Data
public class DeveloperQueryResponseDto {
    private Integer modifiedCount;

    public DeveloperQueryResponseDto() {
        modifiedCount = 0;
    }
}
