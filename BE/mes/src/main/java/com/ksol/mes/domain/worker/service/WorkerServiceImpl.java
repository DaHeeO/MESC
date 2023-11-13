package com.ksol.mes.domain.worker.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ksol.mes.global.util.jdbc.JdbcUtil;
import com.ksol.mes.global.util.jdbc.Table;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class WorkerServiceImpl implements WorkerService {

	private final JdbcUtil jdbcUtil;

	@Override
	public String getQuery(Integer actionId, String conditions, Integer page) throws SQLException {
		String query = null;
		Integer pageSize = 10;    //한 페이지에 보여줄 사이즈
		try {
			Table selectResult = jdbcUtil.select("SELECT QUERY FROM ACTION_MAP WHERE ACTION_ID=" + actionId);
			query =
				selectResult.getRows().get(0).get(0) + ' ' + getOnlyOneQuery(conditions) + " LIMIT " + pageSize
					+ " OFFSET " + pageSize * (page - 1);
		} catch (IndexOutOfBoundsException e) {
			log.info("해당 actionId와 일치하는 쿼리가 존재하지 않습니다.");
		}
		return query;
	}

	@Override
	public Map<String, Object> getTable(Integer actionId, String conditions, Integer page) throws SQLException {
		String query = null;
		Map<String, Object> map = new HashMap<>();

		try {
			query = Optional.ofNullable(this.getQuery(actionId, conditions, page)).orElseThrow(() -> new Exception());
		} catch (Exception e) {
			log.info(e.getMessage());
		}

		log.info("query : {}", query);
		map.put("query", query);
		map.put("table", jdbcUtil.select(query));
		return map;
	}

	private static String getOnlyOneQuery(String query) {
		return query.split(";")[0];
	}
}
