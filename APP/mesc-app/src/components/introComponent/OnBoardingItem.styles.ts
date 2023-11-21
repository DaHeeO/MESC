import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  // background-color: red;
  height: 400px;
  width: 370px;
`;

export const ImageBox = styled.View`
  width: 100%;
  height: 300px;
  // background-color: yellow;
  align-items: center;
  justify-content: center;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 300px;
  // background-color: blue;
  border-radius: 10px;
  margin-bottom: 20px;
  // align-items: center;
  // justify-content: center;
`;

export const View = styled.View`
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
  // justify-content: space-evenly;
  // background-color: pink;
`;

export const MainText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 5px;
  text-align: center;
`;

export const SubText = styled.Text`
  font-size; 15px;
  color: ${colors.secondary}
  text-align: center;
`;
