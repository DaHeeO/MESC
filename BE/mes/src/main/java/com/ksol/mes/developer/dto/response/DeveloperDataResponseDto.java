package com.ksol.mes.developer.dto.response;

import com.ksol.mes.util.jdbc.Row;
import com.ksol.mes.util.jdbc.Table;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class DeveloperDataResponseDto {
    private List<String> columnNameList;
    private List<Row> rowList;

    public DeveloperDataResponseDto(Table table) {
        this.columnNameList = table.getColumns().stream().map(c -> c.getColumnLabel()).collect(Collectors.toList());
        this.rowList = table.getRows();
    }
}
