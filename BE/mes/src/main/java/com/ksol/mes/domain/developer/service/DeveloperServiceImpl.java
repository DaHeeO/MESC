package com.ksol.mes.domain.developer.service;

import java.sql.SQLException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
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
	private final static Integer PAGE_SIZE = 20;

	@Override
	public Table getTable(String query, Integer page) throws SQLException {
		query = getPaginationQuery(getOnlyOneQuery(query), page);
		return jdbcUtil.select(query);
	}

	private String getPaginationQuery(String query, Integer page) {
		return query + " LIMIT " + PAGE_SIZE + " OFFSET " + PAGE_SIZE * (page - 1);
	}

	private static String getOnlyOneQuery(String query) {
		return query.split(";")[0];
	}

	@Override
	@Transactional
	public Integer executeQuery(String query) throws SQLException {
		return jdbcUtil.execute(getOnlyOneQuery(query));
	}

	@Override
	public Table executeQueryWithRollback(String query, Integer page) throws SQLException {
		return jdbcUtil.selectAfterModify(query);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void commitTransation() {
		jdbcUtil.commitTransaction();
	}

}
