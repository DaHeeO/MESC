import React from "react";
import { Container } from "../common/About/AboutContainer";
// import styled from "styled- components";

function Header() {
  return (
    // header의 전체 높이, 웹사이트에서 차지하는 비율
    <Container
      height="20%"
      backcolor="#19234b"
      justifyContent="flex-start"
    ></Container>
  );
}
export default Header;
