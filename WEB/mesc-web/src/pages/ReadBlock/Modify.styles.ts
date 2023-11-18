import styled from "styled-components";
import { colors } from "../../component/common/theme";

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

export const LeftDiv = styled.div`
  height: 95%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  height: 4%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const LeftBody = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
`;

export const RightDiv = styled.div`
  height: 95%;
  width: 71%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const BlockNameInput = styled.input`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  font-size: 2rem;
  margin: 10%;
`;

export const RightBody = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
