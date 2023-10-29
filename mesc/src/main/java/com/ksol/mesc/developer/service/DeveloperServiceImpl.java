package com.ksol.mesc.developer.service;

import com.ksol.mesc.util.jdbc.JdbcUtil;
import com.ksol.mesc.util.jdbc.Table;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

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
}
