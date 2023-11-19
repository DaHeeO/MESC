package com.ksol.mes.domain.worker.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
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
	public String getQuery(Integer actionId, String conditions, Integer page) throws
	// public String getQuery(Integer actionId, String conditions) throws
		SQLException {
		String query = null;
		Integer pageSize = 20;    //한 페이지에 보여줄 사이즈
		try {
			Table selectResult = jdbcUtil.select("SELECT QUERY FROM ACTION_MAP WHERE ACTION_ID=" + actionId, 1);
			// Table selectResult = jdbcUtil.select("SELECT QUERY FROM ACTION_MAP WHERE ACTION_ID=" + actionId);
			System.out.println("selectResult = " + selectResult);
			query =
				selectResult.getRows().get(0).get(0) + ' ' + getOnlyOneQuery(conditions);
			//			selectResult.getRows().get(0).get(0) + ' ' + getOnlyOneQuery(conditions) + " LIMIT " + pageSize
			//					+ " OFFSET " + pageSize * (page - 1);
		} catch (IndexOutOfBoundsException e) {
			log.info("해당 actionId와 일치하는 쿼리가 존재하지 않습니다.");
		}
		return query;
	}

	@Override
	public Map<String, Object> getTable(Integer actionId, String conditions, Integer page,
	// public Map<String, Object> getTable(Integer actionId, String conditions,
		List<String> queryList) throws SQLException {
		String query = null;
		Map<String, Object> map = new HashMap<>();

		try {
			// query = Optional.ofNullable(this.getQuery(actionId, conditions))
				query = Optional.ofNullable(this.getQuery(actionId, conditions, page))
				.orElseThrow(() -> new Exception());
		} catch (Exception e) {
			log.info(e.getMessage());
		}

		map.put("query", query);

		if (queryList == null) {
			// map.put("table", jdbcUtil.select(query));
			map.put("table", jdbcUtil.select(query, page));
		} else {
			// map.put("table", jdbcUtil.selectAfterAllModify(query, queryList));
			map.put("table", jdbcUtil.selectAfterAllModify(query, queryList, page));
		}

		return map;
	}

	private static String getOnlyOneQuery(String query) {
		return query.split(";")[0];
	}
}
