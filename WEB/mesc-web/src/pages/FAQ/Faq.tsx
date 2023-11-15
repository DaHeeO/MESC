// React
import React, { useEffect } from "react";

//Recoil
import { useRecoilState } from "recoil";
import { userInfo } from "../../state/UserInfo";

//style
import * as S from "./Faq.style";
import * as C from "../../component/common/theme";

// Components
import { AboutBody } from "../../component/common/About/AboutBody";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { Header } from "../../component/common/Header/Header";

// Navigate
import { useNavigate } from "react-router-dom";

//etc
import Arrow from "../../assest/icon/arrowRight.svg";
import User from "../../assest/icon/userBlue.svg";
import DataBase from "../../assest/icon/database.svg";
import Contacts from "../../assest/icon/contacts.svg";

export const Faq = () => {
  const navigate = useNavigate();

  const [userInfoValue, setUserInfoValue] = useRecoilState(userInfo);

  const goMeun1 = () => {
    navigate(`/Add`);
  };
  const goFAQ = () => {
    navigate(`/Faq`);
  };
  return (
    // 메인페이지 전체
    <AboutBody>
      {/* 헤더 height: 13%  width 89% */}
      <Header />
      <AboutContainer
        height="87%"
        width="89%"
        justifyContent="space-between"
        align="flex-start"
      >
        {/* MainBody의 왼쪽 - FAQ전체 조회 */}
        <S.LeftDiv>
          <S.LeftHeader>
            <S.HeaderDiv>
              <S.CategoryDiv>
                <S.Text
                  size={18}
                  color={C.colors.textBlack}
                  weight={700}
                  style={{ paddingRight: "30px" }}
                >
                  FAQ
                </S.Text>
                <S.ButtonHug isFocused={true}>
                  <S.ButtonText isFocused={true}>전체보기</S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug isFocused={false}>
                  <S.ButtonText isFocused={false}>로그인</S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug isFocused={false}>
                  <S.ButtonText isFocused={false}>챗봇</S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug isFocused={false}>
                  <S.ButtonText isFocused={false}>연락처</S.ButtonText>
                </S.ButtonHug>
              </S.CategoryDiv>
              <S.AddButton>
                <S.Text
                  size={16}
                  color={C.colors.buttonBlueBackground}
                  weight={500}
                >
                  추가
                </S.Text>
              </S.AddButton>
            </S.HeaderDiv>
          </S.LeftHeader>
          <S.LeftBody>HI</S.LeftBody>
        </S.LeftDiv>
        {/* MainBody의 오른쪽 - FAQ 추가 폼*/}
        <S.RightDiv>
          <S.RightBody>HI</S.RightBody>
        </S.RightDiv>
      </AboutContainer>
    </AboutBody>
  );
};
