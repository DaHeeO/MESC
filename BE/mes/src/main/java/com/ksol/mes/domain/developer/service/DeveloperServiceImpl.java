package com.ksol.mes.domain.developer.service;

import java.sql.SQLException;
import java.util.List;

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
public class DeveloperServiceImpl implements DeveloperService {

	private final JdbcUtil jdbcUtil;

	@Override
	public Table getTable(String query, Integer page, List<String> queryList) throws SQLException {
		// public Table getTable(String query, List<String> queryList) throws SQLException {
		//		return jdbcUtil.select(query, page);

		if (queryList == null) {
			log.info("select 문 실행");
			// return jdbcUtil.select(getOnlyOneQuery(query));
			return jdbcUtil.select(getOnlyOneQuery(query), page);
		} else {
			log.info("queryList select 문 실행");
			// return jdbcUtil.selectAfterAllModify(getOnlyOneQuery(query), queryList);
			return jdbcUtil.selectAfterAllModify(query, queryList, page);
		}
	}

	private static String getOnlyOneQuery(String query) {
		return query.split(";")[0];
	}

	@Override
	@Transactional
	public Integer executeQuery(String query, List<String> queryList) throws SQLException {
		return jdbcUtil.execute(getOnlyOneQuery(query));
	}

	@Override
	@Transactional
	public Integer executeQueryList(List<String> queryList) throws SQLException {
		Integer queryCnt = queryList.size();
		for (int i = 0; i < queryCnt; i++) {
			String tempQuery = queryList.get(i);
			getOnlyOneQuery(tempQuery);
		}

		return jdbcUtil.executeQueryList(queryList);
	}

	@Override
	public Table executeQueryWithRollback(String query, Integer page, List<String> queryList) throws SQLException {
		// public Table executeQueryWithRollback(String query, List<String> queryList) throws SQLException {
		// return jdbcUtil.selectAfterModify(query);
		return jdbcUtil.selectAfterModify(query, page);
	}
}
