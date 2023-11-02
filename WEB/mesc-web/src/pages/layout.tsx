import { Outlet } from "react-router-dom";
import Header from "../component/layout/header";
import SideBar from "../component/layout/sideBar";
import { Container } from "../component/common/About/AboutContainer";
import { Body } from "../component/common/About/AboutBody";

function Layout() {
  return (
    <Body>
      <Header />
      <Container height="90%">
        <SideBar />
        <Container
          height="100%"
          width="90%"
          backcolor="#eaeff1"
          //   style={{ border: "solid 1px red" }}
        >
          {/* 이 부분은 Outlet을 사용하여 현재 라우트의 하위 라우트를 렌더링하는 부분 */}
          <Outlet></Outlet>
        </Container>
      </Container>
    </Body>
  );
}

export default Layout;
