import React from "react";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import * as S from "./AddStyle";
//mui

export const AddMeun = () => {
  return (
    // 메뉴박스 컨테이너
    <AboutContainer
      height="50%"
      width="5%"
      flexDirection="column"
      style={{
        position: "fixed",
        top: 230,
        left: 250,
        marginLeft: "0",
      }}
    >
      {/* 카드 선택 메뉴 */}
      <S.AddCardMenu content="말풍선" />
      <S.AddCardMenu content="버튼1개" />
      <S.AddCardMenu content="버튼2개" />
      <S.AddCardMenu content="스크롤박스" />
      <S.AddCardMenu content="모달" />
    </AboutContainer>
  );
};
