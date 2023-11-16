import React from "react";

import styled from "styled-components";
import { colors } from "../../component/common/theme";

interface AddProps {
  width?: string;
  height?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

export const InnerContainer = styled.div<AddProps>`
  // border: 1px solid blue;
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

interface TextProps {
  size: number;
  color: string;
  weight?: number;
}

export const Text = styled.text<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export const BlockContainer = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const BlockHeader = styled.div`
  height: 14%;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.buttonBlueBackground};
`;

export const InputBox = styled.div<{ color: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 45%;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.textBlack};
`;

export const AddButton = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.color ? props.color : colors.buttonBlue};
  border-radius: 8px;
  padding: 6px 20px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const BlockMiddle = styled.div`
  height: 14%;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonHug = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isFocused ? colors.buttonBlue : colors.buttonBlueBackground};
  border-radius: 8px;
  padding: 6px 8px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.div<{ isFocused: boolean }>`
  font-size: 16px;
  color: ${(props) =>
    props.isFocused ? colors.buttonBlueBackground : colors.buttonBlue};
  font-weight: ${(props) => (props.isFocused ? 500 : 600)};
`;
