package com.ksol.mesc.domain.api.classes;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Table {
    private List<ColumnData> columns;
    private List<List<String>> rows;

    public Table(ResultSet resultSet) throws SQLException {
        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();
        this.columns = new ArrayList<>();
        for(int i = 1; i <= columnCount; i++) {
            this.columns.add(new ColumnData(metaData, i));
        }
        this.rows = new ArrayList<>();
        while (resultSet.next()) {
            List<String> row = new ArrayList<>();
            for(int i = 0; i < columnCount; i++) {
                row.add("" + resultSet.getObject(i + 1));
            }
            this.rows.add(row);
        }
        resultSet.close();
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
}