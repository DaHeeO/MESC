import { Container } from "../component/common/About/AboutContainer";
import LoginPic from "../assests/img/SdiPicture.jpg";
import Button from "@mui/material/Button";
import MuiBtn from "../component/common/About/MuiBtn";
import Logo from "../assests/img/MESC.png";

function Login() {
  return (
    <Container height="100vh" width="100vw" flexDirection="column">
      <Container height="100%" backcolor="#eaeff1">
        <Container height="70%" width="60%" backcolor="#ffffff">
          <Container height="90%" width="95%" backcolor="#ffffff">
            {/* Left Side Content */}
            <Container
              height="100%"
              width="50%"
              flexDirection="column"
              justifyContent="center"
              align="center"
              style={{ borderRight: "1px solid #eaeff1" }}
            >
              <Container height="20%" width="100%">
                <div
                  style={{
                    width: "57%",
                    height: "69%",
                    background: `url(${Logo}) center/cover no-repeat`,
                    borderRadius: "inherit",
                    filter: "blur(1px)",
                  }}
                />
              </Container>
              <Container
                height="45%"
                width="100%"
                // style={{ border: "1px solid black" }}
                flexDirection="column"
              >
                <MuiBtn />
              </Container>
              <Container
                height="15%"
                width="100%"
                justifyContent="space-around;"
                // style={{ border: "1px solid black" }}
              >
                <Button variant="text">아이디 찾기</Button>
                <Button variant="text">비밀번호 찾기</Button>
              </Container>
              <Container
                height="15%"
                width="100%"
                // style={{ border: "1px solid black" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "40%",
                    height: "60%",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  로그인
                </Button>
              </Container>
            </Container>
            <Container
              height="100%"
              width="50%"
              justifyContent="center"
              align="center"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",

                  width: "95%",
                  height: "95%",
                  background: `url(${LoginPic}) center/cover no-repeat`,
                  borderRadius: "inherit",
                  filter: "blur(1px)",
                }}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Login;
