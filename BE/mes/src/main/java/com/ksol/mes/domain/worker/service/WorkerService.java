package com.ksol.mes.domain.worker.service;

import com.ksol.mes.global.util.jdbc.Table;

import java.sql.SQLException;
import java.util.Map;

public interface WorkerService {
    public String getQuery(Integer actionId, String conditions) throws SQLException;

    public Map<String, Object> getTable(Integer actionId, String conditions) throws SQLException;
}
