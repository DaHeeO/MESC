// React
import React from "react";
// Style
import styled from "styled-components";
// Components
import { AboutBody } from "../../component/common/About/AboutBody";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import Header from "../../component/layout/header";
import { ContainedBtn } from "../../component/common/About/AboutBtn";
// Navigate
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  const goMeun1 = () => {
    navigate(`/Menu1`);
  };

  return (
    // 메인페이지 전체
    <AboutBody>
      {/* 헤더 height: 10% */}
      <Header />
      {/* MainBody height: 90% */}
      <AboutContainer height="90%" width="100%">
        {/* MainBody의 오른쪽 */}
        <AboutContainer
          height="100%"
          width="50%"
          flexDirection="column"
          justifyContent="center"
          align="flex-start"
        >
          {/* MainBody 우측 상하단 나누기 */}
          {/* MainBody 우측 상단 -회원정보 */}
          <AboutContainer height="50%" width="100%">
            {/* 회원정보를 넣을 Container */}
            <AboutContainer
              height="90%"
              width="50%"
              flexDirection="column"
              justifyContent="center"
              align="flex-start"
              style={{
                border: "1px solid black",
              }}
            ></AboutContainer>
          </AboutContainer>
          {/* MainBody 우측 하단 -공지사항 */}
          <AboutContainer height="50%" width="100%">
            {/* 회원정보를 넣을 Container */}
            <AboutContainer
              height="90%"
              width="90%"
              flexDirection="column"
              justifyContent="center"
              align="flex-start"
              style={{
                border: "1px solid black",
              }}
            ></AboutContainer>
          </AboutContainer>
        </AboutContainer>
        {/* MainBody의 오른쪽 */}
        <AboutContainer
          height="100%"
          width="50%"
          flexDirection="column"
          justifyContent="center"
          align="center"
          style={{
            border: "1px solid black",
          }}
        >
          <AboutContainer height="90%" width="90%" flexDirection="column">
            <AboutContainer
              width="100%"
              height="10%"
              style={{ border: "1px solid gray" }}
            >
              현재 있는 챗봇
            </AboutContainer>
            <AboutContainer
              width="100%"
              height="80%"
              style={{ border: "1px solid gray" }}
            >
              현재 있는 챗봇
            </AboutContainer>
            <AboutContainer
              style={{ marginRight: "10%" }}
              width="100%"
              height="10%"
              justifyContent="end"
            >
              <ContainedBtn content="챗봇 만들기" onClick={goMeun1} />
            </AboutContainer>
          </AboutContainer>
        </AboutContainer>
      </AboutContainer>
    </AboutBody>
  );
};
