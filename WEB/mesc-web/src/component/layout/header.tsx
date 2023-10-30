import React from "react";
import { Container } from "../common/About/AboutContainer";
import { useNavigate } from "react-router-dom";
import BasicMenu from "../mypage/mypageMenu";

function Header() {
  const navigate = useNavigate();
  const userName = "김싸피";

  const goMain = () => {
    navigate(`/Main`);
  };

  return (
    // header의 전체 높이, 웹사이트에서 차지하는 비율
    <Container height="10%" backcolor="#19234b" justifyContent="space-between">
      <Container
        onClick={goMain}
        height="100%"
        width="15%"
        fonts="3vw"
        fontw="bolder"
        style={{
          color: "#ffffff",
          cursor: "pointer",
          // border: "1px solid white",
        }}
      >
        MESC
      </Container>
      <Container
        height="100%"
        width="10%"
        fonts="1vw"
        // fontw="bolder"
        style={{
          color: "#ffffff",
          cursor: "pointer",
          // border: "1px solid white",
        }}
      >
        <BasicMenu />
      </Container>
    </Container>
  );
}

export default Header;
