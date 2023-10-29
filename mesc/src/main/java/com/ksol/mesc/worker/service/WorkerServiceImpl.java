package com.ksol.mesc.worker.service;

import com.ksol.mesc.util.jdbc.JdbcUtil;
import com.ksol.mesc.util.jdbc.SelectResult;
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
    public String getQuery(Integer actionId, String conditions) {
        String query = null;
        try {
            ResultSet resultSet = jdbcUtil.select("SELECT QUERY FROM ACTION_MAP WHERE ACTION_ID=" + actionId);
            SelectResult selectResult = new SelectResult(resultSet);
            query = selectResult.getRows().get(0).get(0) + ' ' + conditions;
        } catch (SQLException e) {
            log.info(e.getMessage());
        } catch (IndexOutOfBoundsException e) {
            log.info("해당 actionId와 일치하는 쿼리가 존재하지 않습니다.");
        }
        return query;
    }
}
