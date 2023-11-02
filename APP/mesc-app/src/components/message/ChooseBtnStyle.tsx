import styled from 'styled-components/native';

interface ChooseBtnProps {
  width?: string;
}

export const BtnBody = styled.View<ChooseBtnProps>`
  width: ${props => props.width};
  height: 15%
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 14px;
`;
