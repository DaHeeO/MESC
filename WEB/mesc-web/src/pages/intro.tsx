import React from "react";
import Header from "../component/layout/header";
import { Container } from "../component/common/About/AboutContainer";

function Intro() {
  return (
    <>
      <Container height="100vh" flexDirection="column">
        {/* header 25% */}
        <Header />
        {/* main공간*/}
        <Container height="80%">
          {/* sideBar */}
          <Container
            height="100%"
            width="15%"
            flexDirection="column"
            justifyContent="start"
          >
            {/* sideBar 메뉴들 */}
            <Container height="10%">메뉴 1</Container>
            <Container height="10%">메뉴 2</Container>
            <Container height="10%">메뉴 3</Container>
            <Container height="10%">메뉴 4</Container>
          </Container>
          <Container height="100%" width="85%" />
        </Container>
      </Container>
    </>
  );
}
export default Intro;
