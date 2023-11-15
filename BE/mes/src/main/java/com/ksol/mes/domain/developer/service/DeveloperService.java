package com.ksol.mes.domain.developer.service;

import java.sql.SQLException;
import java.util.List;

import com.ksol.mes.global.util.jdbc.Table;

public interface DeveloperService {
	Table getTable(String query, Integer page, List<String> queryList) throws SQLException;

	Integer executeQuery(String query) throws SQLException;

	Table executeQueryWithRollback(String query, Integer page, List<String> queryList) throws SQLException;

	void commitTransation();
}
