package com.ksol.mes.user.service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ksol.mes.user.User;
import com.ksol.mes.user.dto.request.UserReq;
import com.ksol.mes.user.service.UserService;
import com.ksol.mes.util.jdbc.JdbcUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
	private final JdbcUtil jdbcUtil;

	@Override
	public List<User> getUser(UserReq userReq) throws Exception {
		List<Integer> userList = userReq.getUserList();
		//userId List
		String strIds = userList.stream()
			.map(String::valueOf)
			.collect(Collectors.joining(", "));
		String query = "select * from Users where USER_ID in ("+strIds+")";

		ResultSet resultSet = jdbcUtil.select(query);
		List<User> resultUserList = new ArrayList<>();

		while (resultSet.next()) {
			User user = User.builder()
				.userId(resultSet.getInt("user_id"))
				.userName(resultSet.getString("user_name"))
				.role(resultSet.getString("user_role"))
				.email(resultSet.getString("email"))
				.profile(resultSet.getString("profile"))
				.build();

			resultUserList.add(user);
		}

		return resultUserList;
	}
}
