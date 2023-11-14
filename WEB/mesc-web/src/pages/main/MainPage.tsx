// React
import React, { useEffect } from "react";
// Components
import Header from "../../component/common/Layout/layout/header";
import { AboutBody } from "../../component/common/About/AboutBody";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { ContainedBtn } from "../../component/common/About/AboutBtn";
import { SelectBlock } from "../../component/Block/Select/SelectBlock";
// Navigate
import { useNavigate } from "react-router-dom";
//etc
import img from "../../assest/image/samsungSDI.png";

export const MainPage = () => {
  const navigate = useNavigate();

  const goMeun1 = () => {
    navigate(`/Add`);
  };
  const goFAQ = () => {
    navigate(`/Faq`);
  };
  const goMyPage = () => {
    navigate(`/Mypage`);
  };

  useEffect(() => {
    if (localStorage.getItem("acessToken") === undefined) {
      navigate(`/Login`);
    }
  });

  return (
    // 메인페이지 전체
    <AboutBody>
      {/* 헤더 height: 10% */}
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
            >
              <AboutContainer height="50%">
                <AboutContainer
                  height="100%"
                  width="70%"
                  style={{
                    backgroundImage: `url(${img})`, // 이미지 스타일 적용
                    backgroundSize: "90% 90%",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                    backgroundRepeat: "no-repeat",
                  }}
                ></AboutContainer>
              </AboutContainer>
              <AboutContainer height="20%" flexDirection="row">
                <AboutContainer
                  width="50%"
                  height="100%"
                  flexDirection="column"
                >
                  <AboutContainer width="100%" height="50%">
                    이름
                  </AboutContainer>
                  <AboutContainer width="100%" height="50%">
                    {/* {user.name} */}
                    userName
                  </AboutContainer>
                </AboutContainer>
                <AboutContainer
                  width="50%"
                  height="100%"
                  flexDirection="column"
                >
                  <AboutContainer width="100%" height="50%">
                    직급
                  </AboutContainer>
                  <AboutContainer width="100%" height="50%">
                    {/* {user.role} */}
                    userRole
                  </AboutContainer>
                </AboutContainer>
              </AboutContainer>
              <AboutContainer height="10%">userEmail</AboutContainer>
              <AboutContainer height="20%">
                <ContainedBtn content="회원정보 수정" onClick={goMyPage} />
              </AboutContainer>
            </AboutContainer>
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
            >
              <AboutContainer
                width="100%"
                height="10%"
                style={{ border: "1px solid gray" }}
              >
                FAQ
              </AboutContainer>
              <AboutContainer
                width="100%"
                height="80%"
                style={{ border: "1px solid gray" }}
              >
                FAQ
              </AboutContainer>
              <AboutContainer
                style={{ marginRight: "10%" }}
                width="100%"
                height="10%"
                justifyContent="end"
              >
                <ContainedBtn content="FAQ 추가하기" onClick={goFAQ} />
              </AboutContainer>
            </AboutContainer>
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
              height="5%"
              style={{ border: "1px solid gray" }}
            >
              현재 있는 챗봇
            </AboutContainer>
            <AboutContainer
              width="100%"
              height="90%"
              style={{
                border: "1px solid gray",
                overflowY: "auto",
                paddingTop: "5%",
              }}
            >
              <SelectBlock data={[]} />
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
