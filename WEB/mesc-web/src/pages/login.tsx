import React, { useState } from "react";
import * as S from "./login.styles";
import Background from "../assest/image/bg_visual.jpg";
import Logo from "../assest/image/logo.png";

import Circle from "../assest/icon/circle-x.svg";
import EyeOff from "../assest/icon/eye-off.svg";
import Eye from "../assest/icon/eye.svg";

import { useNavigate } from "react-router-dom";
import { api } from "../apis/Api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const clearEmail = () => {
    setEmail("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const goToMain = () => {
    navigate("/");
  };

  const goToDownload = () => {
    window.location.href = "https://www.youtube.com/";
  };

  const goToSDI = () => {
    window.location.href = "https://www.samsungsdi.co.kr/";
  };

  const doLogin = async () => {
    let loginPass = false;

    api
      .post("/mesc/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const accessToken = res.data.tokenInfo.accessToken;
        const userName = res.data.name;
        // console.log('usrName : ', userName);
        const userRole = res.data.role;
        console.log(res.data);
        localStorage.clear();
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userName", userName);
        localStorage.setItem("userRole", userRole);
        loginPass = true;
        navigate("/");
      })
      .catch(() => {
        alert("로그인 실패");
      });
    return loginPass;
  };

  return (
    <S.Container>
      {/* 로그인창 */}
      <S.SContainer width="38%" height="100vh" flexDirection="column">
        <S.Div>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "110px", height: "50px" }}
            onClick={goToSDI}
          />
          <S.Description>
            <S.TitleDiv>
              <S.ExtraBoldText size={42} color="black">
                SDI 챗봇 서비스
              </S.ExtraBoldText>
              <S.ExtraBoldText size={42} color="#2A3DA6">
                MESC
              </S.ExtraBoldText>
            </S.TitleDiv>
            <S.TextDiv>
              <S.Text size={18} color="black">
                해당 서비스는{" "}
                <S.BoldText size={18} color="#2A3DA6">
                  챗봇 개발
                </S.BoldText>
                을 위한 페이지입니다.
              </S.Text>
              <S.Text size={18} color="black">
                챗봇을 이용하시려면{" "}
                <S.BoldText size={18} color="#2A3DA6" onClick={goToDownload}>
                  여기
                </S.BoldText>
                로 이동하세요.
              </S.Text>
            </S.TextDiv>
          </S.Description>
          <S.LoginDiv>
            <S.InputBox color="#EAF0F7">
              <S.Input
                type="text"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={Circle} alt="Circle" onClick={clearEmail} />
            </S.InputBox>
            <S.InputBox color="#EAF0F7">
              <S.Input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? Eye : EyeOff}
                alt="Eye"
                onClick={togglePasswordVisibility}
              />
            </S.InputBox>

            <S.InputBox
              color="#4461F2"
              style={{ marginTop: "8vh", justifyContent: "center" }}
              onClick={doLogin}
            >
              <S.BoldText size={17} color={"white"}>
                로그인
              </S.BoldText>
            </S.InputBox>
          </S.LoginDiv>
        </S.Div>
      </S.SContainer>
      {/* 배경 */}
      <S.SContainer width="62%" height="100vh">
        <img
          src={Background}
          alt="background"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </S.SContainer>
    </S.Container>
  );
}

export default Login;
