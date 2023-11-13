package com.ksol.mes.domain.developer.service;

import java.sql.SQLException;

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
	public Table getTable(String query, Integer page) throws SQLException {
		Integer pageSize = 10;
		query = getOnlyOneQuery(query) + " LIMIT " + pageSize + " OFFSET " + pageSize * (page - 1);
		System.out.println("query = " + getOnlyOneQuery(query));
		return jdbcUtil.select(query);
	}

	private static String getOnlyOneQuery(String query) {
		return query.split(";")[0];
	}

	@Override
	@Transactional
	public Integer executeQuery(String query, Integer page) throws SQLException {
		return jdbcUtil.execute(getOnlyOneQuery(query));
	}
}
