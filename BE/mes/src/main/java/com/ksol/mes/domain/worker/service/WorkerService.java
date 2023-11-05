package com.ksol.mes.domain.worker.service;

import com.ksol.mes.global.util.jdbc.Table;

import java.sql.SQLException;

public interface WorkerService {
    public String getQuery(Integer actionId, String conditions) throws SQLException;

    public Table getTable(Integer actionId, String conditions) throws SQLException;
}
