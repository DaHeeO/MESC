import React from "react";
import { AboutContainer } from "../common/About/AboutContainer";
import { HoverContainer } from "../common/Layout/sideBarHover";
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
    navigate("/Menu3");
  };
  const goMenu4 = () => {
    navigate("/Menu4");
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
      <HoverContainer onClick={goMenu1}>메뉴 1</HoverContainer>
      <HoverContainer onClick={goMenu2}>메뉴 2</HoverContainer>
      <HoverContainer onClick={goMenu3}>메뉴 3</HoverContainer>
      <HoverContainer onClick={goMenu4}>메뉴 4</HoverContainer>
    </AboutContainer>
  );
}

export default SideBar;
