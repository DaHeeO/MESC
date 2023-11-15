package com.ksol.mes.domain.worker.dto.response;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.ksol.mes.global.util.jdbc.ColumnData;
import com.ksol.mes.global.util.jdbc.Table;

import lombok.Data;

@Data
public class WorkerDataResponseDto {
	private Boolean result = true;
	private Boolean isLastPage = false;
	private List<String> columnNameList = new ArrayList<>();
	private List<String> columnTypeList = new ArrayList<>();
	private List<List<String>> rowList;
	private List<LabelResponseDto> label = new ArrayList<>();
	private Integer rowCnt;
	private Integer totalCnt;

	public WorkerDataResponseDto(Map<String, Object> tableInfo) {
		String query = (String)tableInfo.get("query");
		Table table = (Table)tableInfo.get("table");
		Set<String> tableSet = table.getTableList();
		List<Map<String, String>> tableList = new ArrayList<>();

		label.add(LabelResponseDto.toResponse("쿼리", "q", query));

		for (String tableName : tableSet) {
			LinkedHashMap<String, String> temp = new LinkedHashMap<>();
			label.add(LabelResponseDto.toResponse(tableName, "t", "SELECT * FROM " + tableName));
		}

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
		this.isLastPage = table.getIsLastPage();
		this.totalCnt = table.getTotalCnt();
		this.rowCnt = table.getRowCnt();
	}

}
