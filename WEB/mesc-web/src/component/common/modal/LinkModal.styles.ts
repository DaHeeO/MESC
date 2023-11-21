import styled from "styled-components";
import { colors } from "../../../component/common/theme";

interface LinkModalProps {
  width?: string;
  height?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

export const InnerBoxContainer = styled.div<LinkModalProps>`
  // border: 1px solid red;
  width: ${(props) => props.width};
  height: ${(props) => props.height || "100%"};
  overflow-y: auto;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

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

export const ButtonText = styled.text<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  &:hover {
    cursor: pointer;
    color: ${colors.white};
  }
`;

export const BlueButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundBlue};
  padding: 4px 10px;
  border-radius: 5px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.buttonBlue};
  }
`;
