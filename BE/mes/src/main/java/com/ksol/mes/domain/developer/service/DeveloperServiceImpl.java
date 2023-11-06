package com.ksol.mes.domain.developer.service;

import com.ksol.mes.global.util.jdbc.JdbcUtil;
import com.ksol.mes.global.util.jdbc.Table;
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
    public Table getTable(String query) throws SQLException {
        System.out.println("query = " + getOnlyOneQuery(query));
        return jdbcUtil.select(getOnlyOneQuery(query));
    }

    private static String getOnlyOneQuery(String query) {
        return query.split(";")[0];
    }

    @Override
    public Integer executeQuery(String query) throws SQLException {
        return jdbcUtil.execute(getOnlyOneQuery(query));
    }
}
