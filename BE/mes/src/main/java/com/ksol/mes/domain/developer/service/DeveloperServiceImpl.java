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
	private final static Integer PAGE_SIZE = 10;

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
		String selectQuery = getPaginationQuery(getSelectQuery(query), page);
		String upperCase = query.toUpperCase();
		if (upperCase.startsWith("INSERT") || upperCase.startsWith("UPDATE")) {
			return jdbcUtil.selectAfterUpdate(query, selectQuery);
		} else if (upperCase.startsWith("DELETE")) {
			return jdbcUtil.select(selectQuery);
		}
		return null;
	}

	private String getSelectQuery(String modifyQuery) {
		// update 테이블명 set ~~~ where 조건문
		// UPDATE `mes`.`action_map` SET `ACTION_ID` = '21213', `QUERY` = 'select * from query_viewsdfsa', `QUERY_TYPE` = 'select123' WHERE (`ACTION_ID` = '21');
		String upperModifyQuery = modifyQuery.toUpperCase();
		int index = 0;
		if (upperModifyQuery.startsWith("INSERT") || upperModifyQuery.startsWith("DELETE")) {
			index = 2;
		} else if (upperModifyQuery.startsWith("UPDATE")) {
			index = 1;
		}
		String tableName = modifyQuery.split(" ")[index].split("\\(")[0];

		// Extract the WHERE clause using a regular expression
		int where = upperModifyQuery.indexOf("WHERE");
		String whereClause = where == -1 ? "" : modifyQuery.substring(where);

		// =을 찾고 그다음에
		// 작은따옴표라면 다음 작은 따옴표를 찾아야함
		// 다음 작은 따옴표
		// 뒤에가 콤마 또는 공백('\n', '\t', '\r', ' ')
		//
		// 큰따옴표라면
		// 문자(글자 또는 숫자)라면
		String selectQuery = "select * from " + tableName + ' ' + whereClause;
		return selectQuery;
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void commitTransation() {
		jdbcUtil.commitTransaction();
	}

}
