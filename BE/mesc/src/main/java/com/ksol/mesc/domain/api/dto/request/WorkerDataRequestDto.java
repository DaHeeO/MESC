package com.ksol.mesc.domain.api.dto.request;


import com.ksol.mesc.global.annotation.WhereQuery;
import lombok.Data;

@Data
public class WorkerDataRequestDto {
    // 프론트에서 빈문자열을 null로 넘길지 ""로 넘길지 확인해서 그에 맞게 처리해야 함 일단은 빈문자열로 가정
    @WhereQuery
    private String conditions;  // 나중에 where 절이거나 비어있거나를 검사해야함

    public WorkerDataRequestDto() {}
    public WorkerDataRequestDto(String conditions) {
        this.conditions = conditions;
    }
}
