import styled from "styled-components";

interface TextProps {
  size: number;
  color: string;
  weight?: number;
}

export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 22px;
  background-color: #73d5be;
  justify-content: center;
`;

export const Text = styled.text<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;
