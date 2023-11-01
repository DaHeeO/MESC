package com.ksol.mes.domain.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FindUserRes {

	@Schema(description = "사용자 id", example = "1")
	private Integer id;

	@Schema(description = "사용자 이메일", example = "ssafy@gmail.com")
	private String email;

	@Schema(description = "사용자 이름", example = "김싸피")
	private String name;

	@Schema(description = "사용자 휴대폰번호", example = "01012345678")
	private String phoneNumber;
}
