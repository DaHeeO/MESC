import { useNavigate } from "react-router-dom";
import { HoverContainer } from "../sideBarHover";
import { AboutContainer } from "../../About/AboutContainer";

function SideBar() {
  const navigate = useNavigate();

  const goAdd = () => {
    navigate("/Add");
  };
  const goMenu2 = () => {
    navigate("/Modify");
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
      <HoverContainer onClick={goAdd}>추가하기</HoverContainer>
      <HoverContainer onClick={goMenu2}>수정하기</HoverContainer>
      <HoverContainer onClick={goMenu3}>마이페이지</HoverContainer>
      <HoverContainer onClick={goMenu4}>FAQ</HoverContainer>
    </AboutContainer>
  );
}

export default SideBar;
