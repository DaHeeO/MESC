package com.ksol.mesc.domain.api.service;

import java.util.LinkedHashMap;
import java.util.List;

public interface ApiService {
	String getStartMessage(String name);

	LinkedHashMap<String, Object> getTableByQuery(String query, Integer page, List<String> queryList);

	LinkedHashMap<String, Object> getCountsByQuery(String query);

	LinkedHashMap<String, Object> getTableByActionId(Integer actionId, String conditions, Integer page,
		List<String> queryList);

	LinkedHashMap<String, Object> getCountsByActionId(Integer actionId, String conditions);

	LinkedHashMap<String, Object> getTableByQueryRollback(String query, Integer page);

	void commit(List<String> queryList);
}
