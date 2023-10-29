package com.ksol.mesc.developer.service;

import com.ksol.mesc.util.jdbc.Table;

public interface DeveloperService {
    public Table getTable(String query) throws Exception;
}
