package com.ksol.mesc.domain.api.service;

import java.util.LinkedHashMap;
import java.util.Map;

public interface ApiService {
	String getStartMessage(String name);

	LinkedHashMap<String, Object> getTableByQuery(String query, Integer page);

	LinkedHashMap<String, Object> getCountsByQuery(String query);

	LinkedHashMap<String, Object> getTableByActionId(Integer actionId, String conditions);

	LinkedHashMap<String, Object> getCountsByActionId(Integer actionId, String conditions);

	LinkedHashMap<String, Object> getTableByQueryRollback(String query);
}
