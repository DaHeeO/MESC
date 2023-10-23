package org.example;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    static String url = "jdbc:mysql://localhost:3306/blocktest?useSSL=false&serverTimezone=Asia/Seoul&characterEncoding=UTF-8&allowPublicKeyRetrieval=true";
    static String user = "root";
    static String password = "ssafy";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        Scanner sc = new Scanner(System.in);

        try {
            while (true) {
                conn = DriverManager.getConnection(url, user, password);
                DatabaseMetaData metaData = conn.getMetaData();
                System.out.println("1: 테이블 조회");
                System.out.println("2: 테이블 컬럼 조회");
                System.out.println("3: query 입력");
                System.out.println("그 외: 종료");
                System.out.print("입력: ");
                char command = sc.next().charAt(0);
                if (command == '1') {
                    ResultSet tables = metaData.getTables("blocktest", null, null, null);
                    SelectResult tableResults = select(tables);
                    tableResults.rows.forEach( row -> System.out.println(row.get(2)));
                } else if (command == '2') {
                    System.out.print("테이블 입력: ");
                    String tableName = sc.next();
                    ResultSet blocktest = metaData.getColumns("blocktest", null, tableName, null);
                    SelectResult columnResults = select(blocktest);
                    columnResults.rows.forEach(row -> {
                        System.out.println(row.get(3) + ": " + row.get(5) + '(' + row.get(6) + ')');
                    });
                } else if (command == '3') {
                    conn = DriverManager.getConnection(url, user, password);
                    stmt = conn.createStatement();
                    System.out.print("쿼리문 입력: ");
                    sc.nextLine();
                    String query = sc.nextLine();
                    System.out.println(query);
    //                String query = "select * from block bl inner join button bt on bl.BL_ID = bt.BL_ID;";
    //                String query = "select bl.BL_ID as aa, bt.BUTTON_NAME BB from block bl inner join button bt on bl.BL_ID = bt.BL_ID;";
    //                String query = "update block set BL_TEXT = 'haha' WHERE BL_ID = 5;";
    //                String query = "insert into BLOCK (BL_TEXT) values ('inserttest');";
    //                String query = "insertdd into BLOCK (BL_TEXT) values ('inserttest');";
                    if (query.startsWith("select ")) {
                        ResultSet resultSet = stmt.executeQuery(query); // 조회한 결과들을 ResultSet에 rs에 저장한다.
                        SelectResult result = select(resultSet);
                        result.printWithLabel();
                    } else if(query.startsWith("update ")) {
                        int update = stmt.executeUpdate(query);
                        System.out.println("update 갯수: " + update);
                    } else if(query.startsWith("insert ")) {
                        boolean execute = stmt.execute(query);
                        System.out.println("excute: " + execute);
                    } else {
                        System.out.println("select/insert/update 구문이 아닙니다.");
                    }
                    stmt.close();
                } else {
                    break;
                }
            }
//            ResultSet schemas = metaData.getCatalogs();
            conn.close();
//            rs = stmt.executeQuery("select * from block bl inner join button bt on bl.BL_ID = bt.BL_ID;"); // 조회한 결과들을 ResultSet에 rs에 저장한다.
//            rs = stmt.executeQuery("update block set BL_TEXT = 'haha' WHERE BL_ID = 5;"); // 조회한 결과들을 ResultSet에 rs에 저장한다.
//            ResultSetMetaData metaData = rs.getMetaData();
//            int columnCount = metaData.getColumnCount();
//            SelectResult result = new SelectResult();
//            List<ColumnData> columns = result.getColumns();
//            for(int i = 1; i <= columnCount; i++) {
//                columns.add(new ColumnData(metaData, i));
////                System.out.println("Table: " + metaData.getTableName(i));
////                System.out.println(metaData.getColumnName(i) + ": " + metaData.getColumnLabel(i));
////                System.out.println("자바 유형: " + metaData.getColumnClassName(i));
////                System.out.println("데이터 유형: " + metaData.getColumnTypeName(i));
////                System.out.println("SQL 유형: " + metaData.getColumnType(i));
////                System.out.println("============================================================");
//                // null 허용 여부 이런거 다 가능한듯?
//            }
//            List<List<String>> rows = result.getRows();
//            while (rs.next()) {
//                List<String> row = new ArrayList<>();
//                for(int i = 0; i < columnCount; i++) {
////                    String columnClassName = result.getColumns().get(i).getColumnClassName();
////                    Class<?> targetClass;
////                    try {
////                        targetClass = Class.forName(columnClassName);
////                    } catch (ClassNotFoundException e) {
////                        System.out.println(e.getMessage());
////                        return;
////                    }
////                    row.add("" + targetClass.cast(rs.getObject(i + 1)));
//                    row.add("" + rs.getObject(i + 1));
//                    // 이부분 너무 비효율적인데 map 형식으로 함수를 실행할 방법이 없나..
////                    if (columnClassName.equals("java.lang.Integer")) {
////                        Integer data = (Integer) rs.getObject(i + 1);
////                        row.add("" + data);
//////                        row.add("" + rs.getInt(i + 1));
//////                        if(rs.getObject(i + 1) == null) {
//////                            System.out.println(i + 1 + ": null이다 여기");
//////                        }
////                    } else if(columnClassName.equals("java.lang.String")) {
////                        row.add("" + rs.getString(i + 1));  // 이렇게 해야 nullexception 방지함
////                    } else if(columnClassName.equals("java.time.LocalDateTime")) {
////                        LocalDateTime data = (java.time.LocalDateTime) rs.getObject(i + 1);
////                        row.add("" + data);
////                    }
//                }
//                rows.add(row);
//            }
//
//            result.printWithLabel();


        } catch (SQLException e) {
            System.out.println("DB연결 실패하거나, SQL문이 틀렸습니다.");
            System.out.print("사유 : " + e.getMessage());
        }
    }

    private static SelectResult select(ResultSet resultSet) throws SQLException {
        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();
        SelectResult result = new SelectResult();
        List<ColumnData> columns = result.getColumns();
        for(int i = 1; i <= columnCount; i++) {
            columns.add(new ColumnData(metaData, i));
        }
        List<List<String>> rows = result.getRows();
        while (resultSet.next()) {
            List<String> row = new ArrayList<>();
            for(int i = 0; i < columnCount; i++) {
                row.add("" + resultSet.getObject(i + 1));
            }
            rows.add(row);
        }
        resultSet.close();
        return result;
    }
}