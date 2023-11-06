package com.ksol.mes.domain.worker.service;

import com.ksol.mes.global.util.jdbc.JdbcUtil;
import com.ksol.mes.global.util.jdbc.Table;
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
public class WorkerServiceImpl implements WorkerService{

    private final JdbcUtil jdbcUtil;

    @Override
    public String getQuery(Integer actionId, String conditions) throws SQLException {
        String query = null;
        try {
            Table selectResult = jdbcUtil.select("SELECT QUERY FROM ACTION_MAP WHERE ACTION_ID=" + actionId);
            query = selectResult.getRows().get(0).get(0) + ' ' + getOnlyOneQuery(conditions);
        } catch (IndexOutOfBoundsException e) {
            log.info("해당 actionId와 일치하는 쿼리가 존재하지 않습니다.");
        }
        return query;
    }

    @Override
    public Table getTable(Integer actionId, String conditions) throws SQLException {
        String query = null;
        try {
            query = Optional.ofNullable(this.getQuery(actionId, conditions)).orElseThrow(() -> new Exception());
        } catch (Exception e) {
            log.info(e.getMessage());
        }
        return jdbcUtil.select(query);
    }

    private static String getOnlyOneQuery(String query) {
        return query.split(";")[0];
    }
}
