import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  // background-color: red;
  height: 350px;
  width: 370px;
`;

export const Img = styled(Image)`
  width: 250px;
  height: 250px;
  // background-color: blue;
  align-items: center;
  justify-content: center;
`;

export const View = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 90px;
  // background-color: green;
`;

export const MainText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
  text-align: center;
`;

export const SubText = styled.Text`
  font-size; 15px;
  color: ${colors.secondary}
  text-align: center;
`;
