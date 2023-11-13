package com.ksol.mes.domain.developer.service;

import java.sql.SQLException;

import com.ksol.mes.global.util.jdbc.Table;

public interface DeveloperService {
	Table getTable(String query, Integer page) throws SQLException;

	Integer executeQuery(String query, Integer page) throws SQLException;

	Table executeQueryWithRollback(String query) throws SQLException;

	void commitTransation();
}
