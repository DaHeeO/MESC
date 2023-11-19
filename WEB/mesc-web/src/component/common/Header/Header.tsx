import { AboutContainer } from "../../../component/common/About/AboutContainer";

//Recoil
import { useRecoilState } from "recoil";
import { userInfo } from "../../../state/UserInfo";

import * as S from "./Header.styles";
import * as C from "../theme";

import Logo from "../../../assets/img/logo.png";

export const Header = () => {
  const [userInfoValue, setUserInfoValue] = useRecoilState(userInfo);
  return (
    <AboutContainer height="13%">
      <AboutContainer
        width="89%"
        justifyContent="space-between"
        style={{ paddingTop: "1%" }}
      >
        <img src={Logo} alt="logo" style={{ width: "110px", height: "50px" }} />
        {/* 회원이메일 */}
        <S.UserDiv>
          <S.UserImg>
            <S.Text size={20} color="white" weight={500}>
              A
            </S.Text>
          </S.UserImg>
          <S.Text
            size={13}
            color={C.colors.textBlack}
            weight={700}
            style={{ paddingLeft: "10px" }}
          >
            {userInfoValue.email}
          </S.Text>
        </S.UserDiv>
      </AboutContainer>
    </AboutContainer>
  );
};
