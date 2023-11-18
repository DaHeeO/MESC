package com.ksol.mes.global.util.jdbc;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JdbcUtil {
	private static final String catalog = "mes";
	private final DataSource dataSource;

	private final static Integer PAGE_SIZE = 20;

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
			table = new Table(tables, 0, 0);
			// table = new Table(tables, 0);
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
			table = new Table(columns, 0, 0);
			// table = new Table(columns, 0);
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

	public Table selectAfterAllModify(String originQuery, List<String> queryList, Integer page) throws SQLException {
		// public Table selectAfterAllModify(String originQuery, List<String> queryList) throws SQLException {
		Connection connection = null;
		Statement statement = null;
		Table table;
		try {
			connection = dataSource.getConnection();
			connection.setAutoCommit(false);
			statement = connection.createStatement();

			for (String query : queryList) {
				log.info("query : {}", query);
				statement.executeUpdate(query);
			}

			ResultSet resultSet = statement.executeQuery(getPaginationQuery(originQuery, page));
			// ResultSet resultSet = statement.executeQuery(originQuery);
			/////////////////////////////////////////////////////////////
			Integer total = getTotalCnt(originQuery);
			// table = new Table(resultSet, total);
			table = new Table(resultSet, page, total);
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

	public Table selectAfterModify(String modifyQuery, Integer page) throws SQLException {
		// public Table selectAfterModify(String modifyQuery) throws SQLException {
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
			// ResultSet resultSet = statement.executeQuery(selectQuery);
			ResultSet resultSet = statement.executeQuery(getPaginationQuery(selectQuery, page));

			Integer total = getTotalCnt(selectQuery);
			// table = new Table(resultSet, total);
			table = new Table(resultSet, page, total);
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

	public Table select(String query, Integer page) throws SQLException {
		// public Table select(String query) throws SQLException {
		Table table;
		try {
			Connection connection = dataSource.getConnection();
			connection.setAutoCommit(false);
			Statement statement = connection.createStatement();

			log.info("getPaginationQuery : {}", getPaginationQuery(query, page));
			ResultSet resultSet = statement.executeQuery(getPaginationQuery(query, page));
			// ResultSet resultSet = statement.executeQuery(query);
			Integer total = getTotalCnt(query);
			log.info("total : {}", total);
			table = new Table(resultSet, page, total);
			log.info("table: {}", table);
			// table = new Table(resultSet, total);
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

	public Integer executeQueryList(List<String> queryList) throws SQLException {
		Connection connection = null;
		Statement statement = null;
		Integer counts = 0;
		try {
			connection = dataSource.getConnection();
			connection.setAutoCommit(false);
			statement = connection.createStatement();

			for (String tempQuery : queryList) {
				statement.executeUpdate(tempQuery);
			}

			// counts = statement.executeUpdate(query);
			connection.commit();
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
		if (selectQuery.charAt(selectQuery.length() - 1) == ';') {
			//			System.out.println("selectQuery = " + selectQuery);
			selectQuery = selectQuery.substring(0, selectQuery.length() - 1);
			//			System.out.println("selectQuery = " + selectQuery);
		}
		return selectQuery;
	}

	private String getPaginationQuery(String query, Integer page) {
		System.out.println("page = " + page);
		System.out.println("PAGE_SIZE = " + PAGE_SIZE);
		return query + " LIMIT " + PAGE_SIZE + " OFFSET " + PAGE_SIZE * (page - 1);
	}

	private Integer getTotalCnt(String selectQuery) throws SQLException {
		if (selectQuery.charAt(selectQuery.length() - 1) == ';') {
			//			System.out.println("selectQuery = " + selectQuery);
			selectQuery = selectQuery.substring(0, selectQuery.length() - 1);
			//			System.out.println("selectQuery = " + selectQuery);
		}
		String totalQuery = "SELECT COUNT(*) 'total' FROM (" + selectQuery + ") as tempTable";
		try {
			Connection connection = dataSource.getConnection();
			connection.setAutoCommit(false);
			Statement statement = connection.createStatement();

			log.info("totalQuery : {}", totalQuery);
			ResultSet resultSet = statement.executeQuery(totalQuery);
			resultSet.next();
			Integer total = resultSet.getInt("total");
			log.info("totalQuery : {}", totalQuery);
			statement.close();
			connection.close();
			return total;
		} catch (SQLException e) {
			log.info(e.getMessage());
			throw new SQLException(e);
		}
	}
}
