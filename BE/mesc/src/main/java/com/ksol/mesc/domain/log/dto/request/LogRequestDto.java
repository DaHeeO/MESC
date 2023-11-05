package com.ksol.mesc.domain.log.dto.request;

import com.ksol.mesc.global.annotation.LogLevels;
import com.ksol.mesc.global.annotation.NoQuotes;
import lombok.Data;

import java.util.List;

@Data
public class LogRequestDto {
    @NoQuotes
    private String keyword;         // 확인해야할듯, 큰 따옴표 못하게

    @NoQuotes
    private String date;            // 확인해야할듯, 큰 따옴표 못하게

    @LogLevels
    private List<String> levelList; // trace, debug, info, warn, error 만 가능하도록 확인해야함
}
