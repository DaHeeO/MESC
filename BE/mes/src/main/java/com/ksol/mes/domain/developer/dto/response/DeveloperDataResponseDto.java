package com.ksol.mes.domain.developer.dto.response;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.ksol.mes.global.util.jdbc.ColumnData;
import com.ksol.mes.global.util.jdbc.Table;

import lombok.Data;

@Data
public class DeveloperDataResponseDto {
	private Boolean result = true;
	private Boolean isLastPage = false;
	private List<String> columnNameList = new ArrayList<>();
	private List<String> columnTypeList = new ArrayList<>();
	private List<List<String>> rowList;
	private Set<String> tableList;

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
		this.tableList = table.getTableList();
		this.isLastPage = table.getIsLastPage();
	}
}
