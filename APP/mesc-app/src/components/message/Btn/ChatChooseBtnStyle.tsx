import styled from 'styled-components/native';

interface ChooseBtnProps {
  width?: string;
  height?: string;
  border?: string;
}

export const ChooseBtnBody = styled.TouchableOpacity<ChooseBtnProps>`
  border: ${props => props.border || 'none'};
  height: ${props => props.height || '30px'};
  width: ${props => props.width || '100px'};
  width: 110px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f5f8fc;
  border-radius: 15px;
  flex-direction: row;
  // border: 3px solid green;
  padding-left: 3px;
`;

export const BtnContainer = styled.View<ChooseBtnProps>`
  width: ${props => props.width || '50%'};
  height: 100%;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
`;

interface IconBoxProps {
  icon: string;
}

export const IconBox = styled.Image`
  // border: 1px solid blue;
  width: 35px;
  height: 35px;
`;
