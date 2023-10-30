package com.ksol.mes.developer.service;

import com.ksol.mes.util.jdbc.JdbcUtil;
import com.ksol.mes.util.jdbc.Table;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DeveloperServiceImpl implements DeveloperService {

    private final JdbcUtil jdbcUtil;

    @Override
    public Table getTable(String query) throws Exception {
        return new Table(jdbcUtil.select(query));
    }

    @Override
    public Integer executeQuery(String query) throws SQLException {
        return jdbcUtil.execute(query);
    }
}
