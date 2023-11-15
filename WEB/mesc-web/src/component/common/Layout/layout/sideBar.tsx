import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AboutContainer } from "../../About/AboutContainer";
import * as C from "../../theme";
import * as S from "./sideBar.styles";

import HomeFocus from "../../../../assest/icon/homeFocus.svg";
import AddFocus from "../../../../assest/icon/addFocus.svg";
import EditFocus from "../../../../assest/icon/editFocus.svg";
import FaqFocus from "../../../../assest/icon/faqFocus.svg";
import LogoutFocus from "../../../../assest/icon/logoutFocus.svg";
import Home from "../../../../assest/icon/home.svg";
import Add from "../../../../assest/icon/add.svg";
import Edit from "../../../../assest/icon/edit.svg";
import Faq from "../../../../assest/icon/faq.svg";
import Logout from "../../../../assest/icon/logout.svg";

function SideBar() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goMain = () => {
    navigate("/");
  };
  const goAdd = () => {
    navigate("/Add");
  };
  const goMenu2 = () => {
    navigate("/Modify");
  };

  const goMenu4 = () => {
    navigate("/Faq");
  };

  const goLogout = () => {
    localStorage.clear();
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  const isActive = (path: string) => {
    if (location.pathname === path) {
      return true;
    }

    return location.pathname.startsWith(path + "/");
  };

  return (
    // {/* sideBar */}
    <AboutContainer
      height="100%"
      width="20%"
      flexDirection="column"
      justifyContent="flex-start"
      align="flex-end"
      style={{
        borderRight: "1px solid #dddddd",
        backgroundColor: C.colors.samsungBlue,
      }}
    >
      <S.HeaderDiv>
        <S.HeaderLogoDiv>
          <S.Logo>
            <S.Text size={24} color={C.colors.samsungBlue} weight={900}>
              M
            </S.Text>
          </S.Logo>
          <S.LogoBox>
            <S.Text size={24} color="white" weight={900}>
              MESC
            </S.Text>
            <S.Text size={12} color="white">
              ADMIN
            </S.Text>
          </S.LogoBox>
        </S.HeaderLogoDiv>
      </S.HeaderDiv>
      <S.BodyDiv>
        <S.MainDiv>
          <S.NavContainer onClick={goMain}>
            <img src={isActive("/") ? HomeFocus : Home} />
            <S.Text
              size={16}
              color={isActive("/") ? "white" : C.colors.textIcyGray}
              weight={500}
              style={{ paddingLeft: "14px" }}
            >
              홈
            </S.Text>
          </S.NavContainer>
          <S.NavContainer onClick={goAdd}>
            <img src={isActive("/Add") ? AddFocus : Add} />
            <S.Text
              size={16}
              color={isActive("/Add") ? "white" : C.colors.textIcyGray}
              weight={500}
              style={{ paddingLeft: "14px" }}
            >
              블록 추가하기
            </S.Text>
          </S.NavContainer>
          <S.NavContainer onClick={goMenu2}>
            <img src={isActive("/Modify") ? EditFocus : Edit} />
            <S.Text
              size={16}
              color={isActive("/Modify") ? "white" : C.colors.textIcyGray}
              weight={500}
              style={{ paddingLeft: "14px" }}
            >
              블록 수정하기
            </S.Text>
          </S.NavContainer>
          <S.NavContainer onClick={goMenu4}>
            <img src={isActive("/Faq") ? FaqFocus : Faq} />

            <S.Text
              size={16}
              color={isActive("/Faq") ? "white" : C.colors.textIcyGray}
              weight={500}
              style={{ paddingLeft: "14px" }}
            >
              FAQ
            </S.Text>
          </S.NavContainer>
        </S.MainDiv>
        <S.LogoutContainer
          onClick={goLogout}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? <img src={LogoutFocus} /> : <img src={Logout} />}
          <S.Text
            size={16}
            color={hovered ? "white" : C.colors.textIcyGray}
            weight={500}
            style={{ paddingLeft: "14px" }}
          >
            로그아웃
          </S.Text>
        </S.LogoutContainer>
      </S.BodyDiv>
    </AboutContainer>
  );
}

export default SideBar;
