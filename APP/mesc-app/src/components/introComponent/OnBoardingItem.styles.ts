import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  // background-color: red;
`;

export const Img = styled(Image)`
  width: 300px;
  height: 300px;
`;

export const View = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 35%;
  // background-color: blue;
`;

export const MainText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.primary};
  text-align: center;
`;

export const SubText = styled.Text`
  font-size; 16px;
  color: ${colors.secondary}
  text-align: center;
`;
