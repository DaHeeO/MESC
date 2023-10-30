package com.ksol.mes.domain.worker.dto.response;

import com.ksol.mes.global.util.jdbc.Row;
import com.ksol.mes.global.util.jdbc.Table;
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
