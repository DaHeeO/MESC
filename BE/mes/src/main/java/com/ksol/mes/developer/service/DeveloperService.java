package com.ksol.mes.developer.service;

import com.ksol.mes.util.jdbc.Table;

import java.sql.SQLException;

public interface DeveloperService {
    public Table getTable(String query) throws Exception;
    public Integer executeQuery(String query) throws SQLException;
}
