import styled from "styled-components";
import { colors } from "../../common/theme";

interface TextProps {
  size: number;
  color: string;
  weight?: number;
}

interface TableProps {
  width: string;
  justify?: string | undefined;
}

export const Text = styled.text<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export const RightBody = styled.div`
  height: 86%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
`;

export const FormHeader = styled.div`
  height: 10%;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonHug = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "#ffffff")};
  border-radius: 8px;
  padding: 6px 8px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.div`
  font-size: 16px;
  color: ${colors.buttonBlue};
  font-weight: 600;
`;

export const FormBody = styled.div`
  height: 80%;
  margin-top: 5%;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2%;
`;

export const TextBox = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
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

export const FormBottom = styled.div`
  height: 10%;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonFix = styled.div<{ color?: string }>`
  width: 44%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "#ffffff")};
  border-radius: 8px;
  padding: 6px 8px;
  &:hover {
    cursor: pointer;
  }
`;
