package com.ksol.mes.global.util.jdbc;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@ToString
@Slf4j
public class Table {
	private List<ColumnData> columns;
	private List<List<String>> rows;
	private Set<String> tableList;
	private Boolean isLastPage = false;
	private Integer totalCnt = 0;
	private Integer rowCnt = 0;
	private Integer pageSize = 20;
	private String title;

	public Table(ResultSet resultSet, Integer page, Integer totalSize) throws SQLException {
		// public Table(ResultSet resultSet, Integer totalSize) throws SQLException {
		ResultSetMetaData metaData = resultSet.getMetaData();
		this.tableList = new HashSet<>();
		int columnCount = metaData.getColumnCount();
		this.columns = new ArrayList<>();
		for (int i = 1; i <= columnCount; i++) {
			this.title = metaData.getTableName(i);
			this.tableList.add(metaData.getTableName(i));
			this.columns.add(new ColumnData(metaData, i));
		}
		this.rows = new ArrayList<>();

		while (resultSet.next()) {
			rowCnt++;
			List<String> row = new ArrayList<>();
			for (int i = 0; i < columnCount; i++) {
				row.add("" + resultSet.getObject(i + 1));
			}
			this.rows.add(row);
		}

		log.info("rowcnt : {}", rowCnt);
		if (rowCnt < pageSize)
			isLastPage = true;
		// rowCnt += (page - 1) * pageSize;
		resultSet.close();
		this.totalCnt = totalSize;
	}

	public void printWithLabel() {
		System.out.println();
		printColumnLabels();
		printColumnTables();
		printColumnTypes();
		printLine();
		int rowLength = rows.size();
		for (int i = 0; i < rowLength; i++) {
			for (int j = 0; j < 3 - ((i + 1) / 10 + 1); j++) {
				System.out.print(' ');
			}
			System.out.print(i + 1);
			rows.get(i).stream().forEach(data -> {
				System.out.print('|' + data);
				for (int k = 0; k < 13 - data.length(); k++) {
					System.out.print(' ');
				}
			});
			System.out.println('|');
		}
	}

	private void printColumnLabels() {
		System.out.print("   ");
		columns.stream().forEach(c -> {
			System.out.print('|' + c.getColumnLabel());
			for (int i = 0; i < 13 - c.getColumnLabel().length(); i++) {
				System.out.print(' ');
			}
		});
		System.out.println('|');
	}

	private void printColumnTables() {
		System.out.print("   ");
		columns.stream().forEach(c -> {
			System.out.print('|' + c.getTable());
			for (int i = 0; i < 13 - c.getTable().length(); i++) {
				System.out.print(' ');
			}
		});
		System.out.println('|');
	}

	private void printColumnTypes() {
		System.out.print("   ");
		columns.stream().forEach(c -> {
			String typeInfo = c.getColumnTypeName() + '(' + c.getPrecision() + ')';
			System.out.print('|' + typeInfo);
			for (int i = 0; i < 13 - typeInfo.length(); i++) {
				System.out.print(' ');
			}
		});
		System.out.println('|');
	}

	private void printLine() {
		System.out.print("---");
		int size = columns.size();
		for (int i = 0; i < size; i++) {
			System.out.print("--------------");
		}
		System.out.println();
	}

	public List<ColumnData> getColumns() {
		return columns;
	}

	public List<List<String>> getRows() {
		return rows;
	}

	public Set<String> getTableList() {
		return tableList;
	}

	public Boolean getIsLastPage() {
		return isLastPage;
	}

	public Integer getTotalCnt() {
		return totalCnt;
	}

	public Boolean getLastPage() {
		return isLastPage;
	}

	public Integer getRowCnt() {
		return rowCnt;
	}

	public String getTitle() {
		return title;
	}
}