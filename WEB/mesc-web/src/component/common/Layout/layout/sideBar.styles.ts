import styled from "styled-components";
import { colors } from "../../theme";

interface ContainerProps {
  width?: string;
  height?: string;
  flexDirection?: string;
  justifyContent?: string;
  backcolor?: string | undefined;
  align?: string | undefined;
}

interface TextProps {
  size: number;
  color: string;
  weight?: number;
}

export const SContainer = styled.div<ContainerProps>`
  height: ${(props) => props.height}; /* props.height 값을 스타일에 적용 */
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.align ? props.align : "center")};
  background-color: ${(props) => props.backcolor};
`;

export const Text = styled.text<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 1px solid ${colors.backgroundBlue};
`;

export const HeaderLogoDiv = styled.div`
  width: 80%;
  padding-bottom: 7%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`;

export const BodyDiv = styled.div`
  width: 100%;
  height: 73%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 40%;
  padding-top: 7%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NavContainer = styled.div`
  width: 100%;
  padding-left: 10%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: #3148ba;
    cursor: pointer;
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  height: 45px;
  padding-left: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
