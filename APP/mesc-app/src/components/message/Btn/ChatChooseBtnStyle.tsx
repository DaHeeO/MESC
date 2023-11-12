import styled from 'styled-components/native';

interface ChooseBtnProps {
  width?: string;
  height?: string;
  border?: string;
}

export const ChooseBtnBody = styled.TouchableOpacity<ChooseBtnProps>`
<<<<<<< HEAD
  border: ${props => props.border || 'none'};
  height: ${props => props.height || '40px'};
  width: 110px;
=======
  width: 100px;
  height: 30px;
>>>>>>> 0b60989669581405e27b55b3a4dd79ce5e5782f3
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
  // border: 1px solid red;
  width: 35px;
  height: 35px;
`;
