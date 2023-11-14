package com.ksol.mes.global.util.jdbc;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JdbcUtil {
	private static final String catalog = "mes";
	private final DataSource dataSource;

	public JdbcUtil(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public Table getTables() throws SQLException {
		Connection connection = null;
		Table table;
		try {
			connection = dataSource.getConnection();
			DatabaseMetaData metaData = connection.getMetaData();
			ResultSet tables = metaData.getTables(catalog, null, null, null);
			table = new Table(tables);
			connection.close();
		} catch (SQLException e) {
			if (connection != null) {
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
			connection = dataSource.getConnection();
			DatabaseMetaData metaData = connection.getMetaData();
			ResultSet columns = metaData.getColumns(catalog, null, tableName, null);
			table = new Table(columns);
			connection.close();
		} catch (SQLException e) {
			if (connection != null) {
				connection.close();
			}
			log.info(e.getMessage());
			throw new SQLException(e);
		}
		return table;
	}
	public Table selectAfterModify(String modifyQuery) throws SQLException {
		Connection connection = null;
		Statement statement = null;
		Table table;
		try {
			connection = dataSource.getConnection();
			connection.setAutoCommit(false);
			statement = connection.createStatement();
			statement.executeUpdate(modifyQuery);
			String upperCase = modifyQuery.toUpperCase();
			if (upperCase.startsWith("DELETE")) {
				connection.rollback();
			}
			String selectQuery = getSelectQuery(modifyQuery);
			ResultSet resultSet = statement.executeQuery(selectQuery);


			table = new Table(resultSet);
			statement.close();
			connection.close();
		} catch (SQLException e) {
			if (statement != null) {
				statement.close();
			}
			if (connection != null) {
				connection.close();
			}
			log.info(e.getMessage());
			throw new SQLException(e);
		}
		return table;
	}

	public Table select(String query) throws SQLException {
		Table table;
		try {
			Connection connection = dataSource.getConnection();
			connection.setAutoCommit(false);
			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(query);
			table = new Table(resultSet);
			statement.close();
			connection.close();
		} catch (SQLException e) {
			log.info(e.getMessage());
			throw new SQLException(e);
		}
		return table;
	}

	public Integer execute(String query) throws SQLException {
		Connection connection = null;
		Statement statement = null;
		Integer counts = 0;
		try {
			connection = dataSource.getConnection();
			statement = connection.createStatement();
			counts = statement.executeUpdate(query);
			statement.close();
			connection.close();
		} catch (SQLException e) {
			if (statement != null) {
				statement.close();
			}
			if (connection != null) {
				connection.close();
			}
			log.info(e.getMessage());
			throw new SQLException(e);
		}

		return counts;
	}

	public void commitTransaction() {
		Connection connection = null;
		try {
			connection = dataSource.getConnection();
			connection.commit();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public void rollbackTransaction() {
		Connection connection = null;
		try {
			connection = dataSource.getConnection();
			connection.rollback();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	private String getSelectQuery(String modifyQuery) {
		// update 테이블명 set ~~~ where 조건문
		// UPDATE `mes`.`action_map` SET `ACTION_ID` = '21213', `QUERY` = 'select * from query_viewsdfsa', `QUERY_TYPE` = 'select123' WHERE (`ACTION_ID` = '21');
		String upperModifyQuery = modifyQuery.toUpperCase();
		int index = 0;
		if (upperModifyQuery.startsWith("INSERT") || upperModifyQuery.startsWith("DELETE")) {
			index = 2;
		} else if (upperModifyQuery.startsWith("UPDATE")) {
			index = 1;
		}
		String tableName = modifyQuery.split(" ")[index].split("\\(")[0];

		// Extract the WHERE clause using a regular expression
		int where = upperModifyQuery.indexOf("WHERE");
		String whereClause = where == -1 ? "" : modifyQuery.substring(where);

		// =을 찾고 그다음에
		// 작은따옴표라면 다음 작은 따옴표를 찾아야함
		// 다음 작은 따옴표
		// 뒤에가 콤마 또는 공백('\n', '\t', '\r', ' ')
		//
		// 큰따옴표라면
		// 문자(글자 또는 숫자)라면
		String selectQuery = "select * from " + tableName + ' ' + whereClause;
		if(selectQuery.charAt(selectQuery.length() - 1) == ';') {
			System.out.println("selectQuery = " + selectQuery);
			selectQuery = selectQuery.substring(0, selectQuery.length() - 1);
			System.out.println("selectQuery = " + selectQuery);
		}
		return selectQuery;
	}
}
