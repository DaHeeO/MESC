package com.ksol.mes.domain.developer.service;

import com.ksol.mes.global.util.jdbc.Table;

import java.sql.SQLException;

public interface DeveloperService {
    public Table getTable(String query) throws Exception;
    public Integer executeQuery(String query) throws SQLException;
}
