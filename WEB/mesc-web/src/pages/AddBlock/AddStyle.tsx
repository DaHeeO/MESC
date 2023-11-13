import React from "react";

import styled from "styled-components";

interface AddProps {
  width?: string;
  height?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

export const InnerContainer = styled.div<AddProps>`
  border: 1px solid blue;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
`;

export const BlockNameInput = styled.input`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  font-size: 2rem;
  margin: 10%;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  flex-direction: column;
  height: 50%;
  width: 25%;
  margin: 1%; // 카드 사이의 간격을 설정
`;

interface AddCardProps {
  content: string;
  // clickEvent?: () => void;
}

export const AddCardMenu = (props: AddCardProps) => {
  return (
    <InnerContainer width="100%" height="100%" flexDirection="column">
      <InnerContainer
        width="100%"
        height="80%"
        // onClick={props.clickEvent}
      ></InnerContainer>
      <InnerContainer
        width="100%"
        height="20%"
        justifyContent="center"
        alignItems="center"
        style={{ fontWeight: "bold" }}
      >
        {props.content}
      </InnerContainer>
    </InnerContainer>
  );
};
