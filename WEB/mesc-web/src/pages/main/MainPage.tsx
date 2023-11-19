// React
import React, { useEffect } from "react";

//Recoil
import { useRecoilState } from "recoil";
import { userInfo } from "../../state/UserInfo";

// Components
import { AboutBody } from "../../component/common/About/AboutBody";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { SelectBlock } from "../../component/Block/Select/SelectBlock";
import { Header } from "../../component/common/Header/Header";

// Navigate
import { useNavigate } from "react-router-dom";
//etc
import Arrow from "../../assets/icon/arrowRight.svg";
import User from "../../assets/icon/userBlue.svg";
import DataBase from "../../assets/icon/database.svg";
import Contacts from "../../assets/icon/contacts.svg";
import * as S from "./MainPage.style";
import * as C from "../../component/common/theme";

export const MainPage = () => {
  const navigate = useNavigate();

  const [userInfoValue, setUserInfoValue] = useRecoilState(userInfo);

  const goMeun1 = () => {
    navigate(`/Add`);
  };
  const goFAQ = () => {
    navigate(`/Faq`);
  };

  useEffect(() => {
    if (localStorage.getItem("acessToken") === undefined) {
      navigate(`/Login`);
    }
  });

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
        {/* MainBody의 왼쪽 - ChatbotList */}
        <S.BlockContainer>
          <S.BlockHeader>
            <S.Text size={18} color={C.colors.textBlack} weight={800}>
              블록 리스트
            </S.Text>
            <S.SeeMore onClick={goMeun1}>
              <S.Text size={14} color={C.colors.samsungBlue} weight={700}>
                더보기
              </S.Text>
              <img width={18} height={18} src={Arrow} />
            </S.SeeMore>
          </S.BlockHeader>
          <S.BlockBody>
            <SelectBlock data={[]} />
          </S.BlockBody>
        </S.BlockContainer>
        {/* MainBody의 오른쪽 - Info, FAQ */}
        <S.RightDiv>
          {/* MainBody 우측 상단 -회원정보 */}
          <S.InfoDiv>
            {/* 회원정보를 넣을 Container */}
            <S.BlockHeader>
              <S.Text size={14} color={C.colors.textBlack} weight={800}>
                회원정보
              </S.Text>
            </S.BlockHeader>
            <S.InfoBody>
              <S.UserImg>
                <S.Text size={58} color={"white"} weight={800}>
                  A
                </S.Text>
              </S.UserImg>
              <S.UpperText>
                <S.Text size={18} color={C.colors.textBlack} weight={800}>
                  {userInfoValue.name}
                </S.Text>
                <S.RoleButton>
                  <S.Text size={10} color={C.colors.textIcyGray} weight={600}>
                    {userInfoValue.name}
                  </S.Text>
                </S.RoleButton>
              </S.UpperText>
              <S.Text size={10} color={C.colors.textIcyGray} weight={600}>
                {userInfoValue.email}
              </S.Text>
            </S.InfoBody>
          </S.InfoDiv>
          {/* MainBody 우측 하단 -공지사항 */}
          <S.FaqDiv>
            {/* 회원정보를 넣을 Container */}
            <S.BlockHeader>
              <S.Text size={14} color={C.colors.textBlack} weight={800}>
                FAQ
              </S.Text>
            </S.BlockHeader>

            <S.FaqBody>
              <S.CategoryDiv>
                <S.IconContainer>
                  <img width={20} height={20} src={User} />
                </S.IconContainer>
                <S.Text
                  size={14}
                  color={C.colors.samsungBlue}
                  weight={800}
                  style={{ paddingLeft: "15px" }}
                >
                  로그인
                </S.Text>
              </S.CategoryDiv>
              <S.CategoryDiv>
                <S.IconContainer>
                  <img width={20} height={20} src={DataBase} />
                </S.IconContainer>
                <S.Text
                  size={14}
                  color={C.colors.samsungBlue}
                  weight={800}
                  style={{ paddingLeft: "15px" }}
                >
                  챗봇
                </S.Text>
              </S.CategoryDiv>
              <S.CategoryDiv>
                <S.IconContainer>
                  <img width={20} height={20} src={Contacts} />
                </S.IconContainer>
                <S.Text
                  size={14}
                  color={C.colors.samsungBlue}
                  weight={800}
                  style={{ paddingLeft: "15px" }}
                >
                  연락처
                </S.Text>
              </S.CategoryDiv>
            </S.FaqBody>

            <S.FaqBottom onClick={goFAQ}>
              <S.Text size={14} color={C.colors.samsungBlue} weight={800}>
                FAQ 추가하기
              </S.Text>
              <img width={22} height={22} src={Arrow} />
            </S.FaqBottom>
          </S.FaqDiv>
        </S.RightDiv>
      </AboutContainer>
    </AboutBody>
  );
};
