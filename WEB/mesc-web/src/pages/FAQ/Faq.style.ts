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
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  height: 8%;
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

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.buttonBlue};
  border-radius: 8px;
  padding: 6px 20px;
  margin-left: 10px;
  &:hover {
    box-shadow: 0px 0px 10px rgba(68, 97, 242, 0.3);
    cursor: pointer;
  }
`;

export const LeftBody = styled.div`
  height: 86%;
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
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const RightBody = styled.div`
  height: 86%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
`;
