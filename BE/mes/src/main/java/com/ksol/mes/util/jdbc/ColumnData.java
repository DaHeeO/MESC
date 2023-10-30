package com.ksol.mes.util.jdbc;

import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class ColumnData {
    String table;
    String columnName;
    String columnLabel;
    String columnClassName;
    String columnTypeName;
    Integer precision;

    public String getTable() {
        return table;
    }

    public String getColumnName() {
        return columnName;
    }

    public String getColumnLabel() {
        return columnLabel;
    }

    public String getColumnClassName() {
        return columnClassName;
    }

    public String getColumnTypeName() {
        return columnTypeName;
    }

    public Integer getPrecision() {
        return precision;
    }

    public ColumnData(ResultSetMetaData metaData, int i) {
        try {
            this.precision = metaData.getPrecision(i);
            this.table = metaData.getTableName(i);
            this.columnName = metaData.getColumnName(i);
            this.columnLabel = metaData.getColumnLabel(i);
            this.columnClassName = metaData.getColumnClassName(i);
            this.columnTypeName = metaData.getColumnTypeName(i);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
