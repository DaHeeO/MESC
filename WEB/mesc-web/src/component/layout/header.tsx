import React from "react";
import { Container } from "../common/About/AboutContainer";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/Main`);
  };

  return (
    // header의 전체 높이, 웹사이트에서 차지하는 비율
    <Container
      onClick={goMain}
      height="15%"
      backcolor="#19234b"
      justifyContent="start"
    >
      <Container
        height="100%"
        width="15%"
        fonts="4vw"
        fontw="bolder"
        style={{
          color: "#ffffff",
          cursor: "pointer",
          // border: "1px solid white",
        }}
      >
        MESC
      </Container>
    </Container>
  );
}

export default Header;
