package com.ksol.mes.domain.worker.service;

import com.ksol.mes.global.util.jdbc.Table;

public interface WorkerService {
    public String getQuery(Integer actionId, String conditions);

    public Table getTable(Integer actionId, String conditions) throws Exception;
}
