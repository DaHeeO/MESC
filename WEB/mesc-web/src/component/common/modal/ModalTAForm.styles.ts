import styled from "styled-components";
import { colors } from "../../common/theme";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
  background-color: ${colors.buttonBlueBackground};
`;

export const TAContainer = styled.div`
  width: 90%;
  height: 90%;
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
