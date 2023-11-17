import styled from "styled-components";

interface ContainerProps {
  width?: string;
  height?: string;
  flexDirection?: string;
  justifyContent?: string;
  backcolor?: string | undefined;
  align?: string | undefined;
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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const Div = styled.div`
  width: 65%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Description = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const LoginDiv = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 15vh;
`;

export const Text = styled.text<{ size: number; color: string }>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;

export const BoldText = styled.text<{ size: number; color: string }>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: 500;
`;

export const ExtraBoldText = styled.text<{ size: number; color: string }>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: 800;
`;

export const InputBox = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 85%;
  padding: 14px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
`;
