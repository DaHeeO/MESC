package com.ksol.mesc.domain.user.dto;

import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SendEmailReq {

	@NotNull
	@Schema(description = "사용자 이메일 목록", example = "[\"B201MESC@gmail.com\", \"songsoy95@gmail.com\"]")
	private List<@NotBlank String> emails;

	@NotNull
	@Schema(description = "메일 제목", example = "공장에 이슈가 발생했습니다.")
	private String subject;

	@NotNull
	@Schema(description = "메일 내용", example = "안녕하세요\n김싸피입니다.\n\n현재 공정에 이슈가 발생했습니다.\n\n- 이슈 상황 : A라인 B공정 중지 \n- 요청 내용 : B공정 배터리 생산 날짜를 26일에서 27일로 바꿔주세요.\n\n확인부탁드립니다.\n감사합니다.\n\n김싸피 드림")
	private String content;
}
