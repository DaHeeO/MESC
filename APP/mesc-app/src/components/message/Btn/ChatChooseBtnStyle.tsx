import styled from 'styled-components/native';

interface ChooseBtnProps {
  width?: string;
}

export const ChooseBtnBody = styled.TouchableOpacity<ChooseBtnProps>`
  width: 100px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  flex-direction: row;
  // border: 3px solid green;
`;

export const BtnContainer = styled.View<ChooseBtnProps>`
  width: ${props => props.width || '50%'};
  height: 100%;
  justify-content: center;
  align-items: center;
  // background-color: yellow;
`;

interface IconBoxProps {
  icon: string;
}

export const IconBox = styled.Image`
  border: 1px solid red;
  width: 35px;
  height: 35px;
`;
