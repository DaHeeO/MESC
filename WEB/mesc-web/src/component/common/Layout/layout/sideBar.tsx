import React from "react";
import { AboutContainer } from "../../About/AboutContainer";
import { HoverContainer } from "../sideBarHover";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const goMenu1 = () => {
    navigate("/Menu1");
  };
  const goMenu2 = () => {
    navigate("/Menu2");
  };
  const goMenu3 = () => {
    navigate("/MyPage");
  };
  const goMenu4 = () => {
    navigate("/Faq");
  };

  return (
    // {/* sideBar */}
    <AboutContainer
      height="100%"
      width="10%"
      flexDirection="column"
      justifyContent="start"
      style={{ borderRight: "1px solid #dddddd" }}
    >
      {/* sideBar 메뉴들 */}
      <HoverContainer onClick={goMenu1}>추가하기</HoverContainer>
      <HoverContainer onClick={goMenu2}>수정하기</HoverContainer>
      <HoverContainer onClick={goMenu3}>마이페이지</HoverContainer>
      <HoverContainer onClick={goMenu4}>FAQ</HoverContainer>
    </AboutContainer>
  );
}

export default SideBar;
