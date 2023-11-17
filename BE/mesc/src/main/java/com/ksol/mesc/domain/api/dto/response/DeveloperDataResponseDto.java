package com.ksol.mesc.domain.api.dto.response;

import com.ksol.mesc.domain.api.classes.ColumnData;
import com.ksol.mesc.domain.api.classes.Table;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DeveloperDataResponseDto {
    private List<String> columnNameList = new ArrayList<>();
    private List<String> columnTypeList = new ArrayList<>();
    private List<List<String>> rowList;

    public DeveloperDataResponseDto(Table table) {
        for (ColumnData column : table.getColumns()) {
            String columnLabel = column.getColumnLabel();
            this.columnNameList.add(columnLabel);
            String columnType = column.getColumnTypeName();
            if (columnType.equals("VARCHAR") || columnType.equals("CHAR")) {
                columnType += "(" + column.getPrecision() + ')';
            }
            this.columnTypeList.add(columnType);
        }
        this.rowList = table.getRows();
    }
}
