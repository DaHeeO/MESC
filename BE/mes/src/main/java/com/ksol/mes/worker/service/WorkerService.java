package com.ksol.mes.worker.service;

import com.ksol.mes.util.jdbc.Table;

public interface WorkerService {
    public String getQuery(Integer actionId, String conditions);

    public Table getTable(Integer actionId, String conditions) throws Exception;
}
