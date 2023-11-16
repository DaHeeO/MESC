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
  // width: 105px;
  // height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f5f8fc;
  border-radius: 10px;
  flex-direction: row;
  // border: 3px solid green;
  // padding: 1px;
`;

export const BtnContainer = styled.View<ChooseBtnProps>`
  width: ${props => props.width || '50%'};
  height: 100%;
  justify-content: center;
  align-items: center;
`;

interface IconBoxProps {
  icon: string;
}

export const IconBox = styled.Image`
  // border: 1px solid red;
  width: 35px;
  height: 35px;
`;
