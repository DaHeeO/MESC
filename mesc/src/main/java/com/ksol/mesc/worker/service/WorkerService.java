package com.ksol.mesc.worker.service;

import com.ksol.mesc.util.jdbc.Table;

public interface WorkerService {
    public String getQuery(Integer actionId, String conditions);

    public Table getTable(Integer actionId, String conditions) throws Exception;
}
