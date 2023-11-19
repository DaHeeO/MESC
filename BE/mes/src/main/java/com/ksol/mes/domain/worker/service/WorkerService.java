package com.ksol.mes.domain.worker.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface WorkerService {
	String getQuery(Integer actionId, String conditions, Integer page) throws
		SQLException;
	// String getQuery(Integer actionId, String conditions) throws
	// 	SQLException;

	Map<String, Object> getTable(Integer actionId, String conditions, Integer page,
		List<String> queryList) throws SQLException;
	// Map<String, Object> getTable(Integer actionId, String conditions,
	// 	List<String> queryList) throws SQLException;
}
