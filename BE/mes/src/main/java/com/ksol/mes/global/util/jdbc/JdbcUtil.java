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

	public Table selectAfterUpdate(String modifyQuery, String selectQuery) throws SQLException {
		Connection connection = null;
		Statement statement = null;
		Table table;
		try {
			connection = dataSource.getConnection();
			connection.setAutoCommit(false);
			statement = connection.createStatement();
			statement.executeUpdate(modifyQuery);
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
}
