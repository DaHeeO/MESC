package com.ksol.mes.global.util.jdbc;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.*;

@Component
@Slf4j
public class JdbcUtil {

    private static final String URL = "jdbc:mysql://localhost:3306/mes?useSSL=false&serverTimezone=Asia/Seoul&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true";
    private static final String USER = "root";
    private static final String PASSWORD = "root";
    private static final String catalog = "mes";

    private Connection connection;
    private Statement statement;
    private DatabaseMetaData metaData;

    private JdbcUtil() throws SQLException {
        this.connection = DriverManager.getConnection(URL, USER, PASSWORD);
        this.metaData = connection.getMetaData();
        this.statement = connection.createStatement();
    }

    // LazyHolder 설명...
    // https://medium.com/@joongwon/multi-thread-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-%EC%98%AC%EB%B0%94%EB%A5%B8-singleton-578d9511fd42
    public static JdbcUtil getInstance() {
        return LazyHolder.INSTANCE;
    }

    private static class LazyHolder{
        private static final JdbcUtil INSTANCE;

        static {
            try {
                INSTANCE = new JdbcUtil();
            } catch (SQLException e) {
                log.debug(e.getMessage());
                throw new RuntimeException(e);  // 이거 나중에 처리해줘야함 반드시....
            }
        }
    }

    public ResultSet getTables() throws SQLException {
        return metaData.getTables(catalog, null, null, null);
    }

    public ResultSet getColumns(String tableName) throws SQLException {
        return metaData.getColumns(catalog, null, tableName, null);
    }

    public ResultSet select(String query) throws SQLException {
        return statement.executeQuery(query);
    }

    public Integer execute(String query) throws SQLException {
        return statement.executeUpdate(query);
    }

//    public void close() throws SQLException {
//        if (this.statement != null) {
//            statement.close();
//        }
//        if (this.connection != null) {
//            connection.close();
//        }
//    }
}
