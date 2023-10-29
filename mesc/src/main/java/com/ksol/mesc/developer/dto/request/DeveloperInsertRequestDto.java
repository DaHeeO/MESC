package com.ksol.mesc.developer.dto.request;

import lombok.Data;

@Data
public class DeveloperInsertRequestDto {
    // 프론트에서 빈문자열을 null로 넘길지 ""로 넘길지 확인해서 그에 맞게 처리해야 함 일단은 빈문자열로 가정
    // insert 문인지 검사해야함
    private String query;
}
