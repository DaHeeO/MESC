package com.ksol.mesc.domain.user.dto;

import com.ksol.mesc.global.config.jwt.TokenInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {
    String name;
    String role;
    TokenInfo tokenInfo;
}
