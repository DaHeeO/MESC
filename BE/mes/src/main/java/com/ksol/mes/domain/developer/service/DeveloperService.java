package com.ksol.mes.domain.developer.service;

import com.ksol.mes.global.util.jdbc.Table;

import java.sql.SQLException;

public interface DeveloperService {
    Table getTable(String query) throws SQLException;
    Integer executeQuery(String query) throws SQLException;

    void commitTransation();
}
