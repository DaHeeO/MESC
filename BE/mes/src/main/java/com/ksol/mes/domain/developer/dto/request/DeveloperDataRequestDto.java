package com.ksol.mes.domain.developer.dto.request;

import com.ksol.mes.global.annotation.SelectQuery;
import lombok.Data;

@Data
public class DeveloperDataRequestDto {
    // 프론트에서 빈문자열을 null로 넘길지 ""로 넘길지 확인해서 그에 맞게 처리해야 함 일단은 빈문자열로 가정
    // select 문인지 검사해야함
    // ; 이거 나오면 이 이후로는 다 잘라내야 함
    @SelectQuery
    private String query;
}
