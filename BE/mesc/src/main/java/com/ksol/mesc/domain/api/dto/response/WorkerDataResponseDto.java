package com.ksol.mesc.domain.api.dto.response;


import com.ksol.mesc.domain.api.classes.Row;
import com.ksol.mesc.domain.api.classes.Table;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class WorkerDataResponseDto {
    private List<String> columnNameList;
    private List<Row> rowList;

    public WorkerDataResponseDto(Table table) {
        this.columnNameList = table.getColumns().stream().map(c -> c.getColumnLabel()).collect(Collectors.toList());
        this.rowList = table.getRows();
    }
}
