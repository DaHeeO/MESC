import { Outlet } from "react-router-dom";
import Header from "../component/common/Layout/layout/header";
import SideBar from "../component/common/Layout/layout/sideBar";
import { AboutContainer } from "../component/common/About/AboutContainer";
import { AboutBody } from "../component/common/About/AboutBody";

function Layout() {
  return (
    <AboutBody>
      {/* <Header /> */}
      <AboutContainer height="100%">
        <SideBar />
        <AboutContainer
          height="100%"
          width="80%"
          backcolor="#F4F7FE"
          //   style={{ border: "solid 1px red" }}
        >
          {/* 이 부분은 Outlet을 사용하여 현재 라우트의 하위 라우트를 렌더링하는 부분 */}
          <Outlet></Outlet>
        </AboutContainer>
      </AboutContainer>
    </AboutBody>
  );
}

export default Layout;
