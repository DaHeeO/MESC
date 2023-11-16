package mesc.mesc.domain.user.dto;

import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SendEmailReq {

	@NotNull
	@Schema(description = "사용자 이메일 목록", example = "ssafy@gmail.com")
	private List<@NotBlank String> emails;
}
