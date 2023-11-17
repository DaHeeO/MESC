import styled from "styled-components";
import { colors } from "../common/theme";

interface FormProps {
  width?: string;
  height?: string;
  radius?: string;
  backColor?: string;
  justify?: string;
  align?: string;
  flexDirection?: string;
}

export const FormTextarea = styled.textarea`
  width: 90%;
  height: 90%;
  font-size: 1.5rem;
`;

export const ComponentContainer = styled.div<FormProps>`
  background-color: ${(props) => props.backColor};
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
`;

export const Input = styled.textarea`
  width: 90%;
  height: 90%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.textBlack};

  resize: none;
  font-family: inherit;
`;
