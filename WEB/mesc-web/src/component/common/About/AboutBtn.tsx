import styled from "styled-components";
import { Container } from "./AboutContainer";

interface AboutBtnProps {
  text: string; // 로그인 버튼에 표시할 텍스트
}

function AboutBtn({ text }: AboutBtnProps) {
  return (
    <Container
      height="80%"
      width="40%"
      backcolor="#273896"
      color="#ffffff"
      fonts="1.5rem"
      fontw="bold"
      style={{ borderRadius: "5px", cursor: "pointer" }}
    >
      {text}
    </Container>
  );
}
export default AboutBtn;
