import React from "react";
//style
import * as S from "./FormStyle";
import * as C from "../../pages/AddBlock/AddStyle";
//imgae
import chatbot from "../../assest/image/chatbot.png";

//Component
import { AboutContainer } from "../common/About/AboutContainer";

export const CH2Form = () => {
  return (
    <S.ComponentContainer height="85%" width="100%" radius="30px">
      <AboutContainer
        width="95%"
        height="95%"
        flexDirection="column"
        style={{ borderRadius: "10px" }}
      >
        {/*로봇 머리 있는 공간 content 1개 있음 */}
        <C.InnerContainer
          width="100%"
          height="50%"
          flexDirection="row"
          alignItems="end"
          style={{
            backgroundColor: "#7879f1",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <S.FormInput height="30%" width="60%" placeholder="내용 1" />
          <C.InnerContainer
            width="40%"
            height="100%"
            style={{
              backgroundImage: `url(${chatbot})`,
              backgroundSize: "80% 80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          ></C.InnerContainer>
        </C.InnerContainer>
        {/* 하단 공간  */}
        <C.InnerContainer width="100%" height="50%" flexDirection="column">
          {/* 버튼 위 text 공간 */}
          <C.InnerContainer width="100%" height="30%" alignItems="center">
            <S.FormInput width="60%" height="70%" placeholder="내용 2" />
          </C.InnerContainer>
          <C.InnerContainer width="100%" height="35%" justifyContent="center">
            <S.FormBtn>
              <S.FormInput width="80%" height="70%"></S.FormInput>
            </S.FormBtn>
          </C.InnerContainer>
          <C.InnerContainer width="100%" height="35%" justifyContent="center">
            <S.FormBtn>
              <S.FormInput width="80%" height="70%"></S.FormInput>
            </S.FormBtn>
          </C.InnerContainer>
          {/* 버튼 있는 공간  */}
        </C.InnerContainer>
      </AboutContainer>
    </S.ComponentContainer>
  );
};
