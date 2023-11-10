package com.ksol.mes.global.util.jdbc;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.*;

@Component
@Slf4j
public class JdbcUtil {

    private static final String URL = "jdbc:mysql://k9b201a.p.ssafy.io:3306/mes?useSSL=false&serverTimezone=Asia/Seoul&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true";
    private static final String USER = "ksol";
    private static final String PASSWORD = "ksol1117";
    // private static final String USER = "root";
    // private static final String PASSWORD = "root";
    private static final String catalog = "mes";

    public Table getTables() throws SQLException {
        Connection connection = null;
        Table table;
        try {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            DatabaseMetaData metaData = connection.getMetaData();
            ResultSet tables = metaData.getTables(catalog, null, null, null);
            table = new Table(tables);
            connection.close();
        } catch (SQLException e) {
            if(connection != null) {
                connection.close();
            }
            log.info(e.getMessage());
            throw new SQLException(e);
        }
        return table;
    }

    public Table getColumns(String tableName) throws SQLException {
        Connection connection = null;
        Table table;
        try {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            DatabaseMetaData metaData = connection.getMetaData();
            ResultSet columns = metaData.getColumns(catalog, null, tableName, null);
            table = new Table(columns);
            connection.close();
        } catch (SQLException e) {
            if(connection != null) {
                connection.close();
            }
            log.info(e.getMessage());
            throw new SQLException(e);
        }
        return table;
    }

    public Table select(String query) throws SQLException {
        Connection connection = null;
        Statement statement = null;
        Table table;
        try {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            connection.setAutoCommit(false);
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            table = new Table(resultSet);
            statement.close();
            connection.close();
        } catch (SQLException e) {
            if(statement != null) {
                statement.close();
            }
            if(connection != null) {
                connection.close();
            }
            log.info(e.getMessage());
            throw new SQLException(e);
        }
        return table;
    }

    public Integer execute(String query) throws SQLException {
        Connection connection = null;
        Statement statement = null;
        Integer counts;
        try {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            statement = connection.createStatement();
            counts = statement.executeUpdate(query);
            statement.close();
            connection.close();
        } catch (SQLException e) {
            if(statement != null) {
                statement.close();
            }
            if(connection != null) {
                connection.close();
            }
            log.info(e.getMessage());
            throw new SQLException(e);
        }

        return counts;
    }

    public void commitTransaction(){
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            connection.commit();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void rollbackTransaction(){
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            connection.rollback();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
