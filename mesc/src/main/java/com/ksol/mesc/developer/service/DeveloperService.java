package com.ksol.mesc.developer.service;

import com.ksol.mesc.util.jdbc.Table;

import java.sql.SQLException;

public interface DeveloperService {
    public Table getTable(String query) throws Exception;

    public void insertData(String query) throws SQLException;
}
