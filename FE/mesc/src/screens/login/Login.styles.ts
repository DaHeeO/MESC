import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const BackgroundImg = styled(Image)`
  position: absolute;
  width: 100%;
  object-fit: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Img = styled(Image)`
  position: absolute;
  width: 180px;
  height: 180px;
  top: 7%;
  left: 45%;
`;

export const Div = styled.View`
  width: 80%;
  height: 100%;
`;

export const Top = styled.View`
  height: 40%;
  padding-top: 70px;
  // background-color: red;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 35px;
`;

export const Body = styled.View`
  height: 30%;
  padding-top: 12px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.tertiary};
  border-bottom-width: 1px;
  // background-color: blue;
`;

export const Bottom = styled.View`
  height: 30%;
  // background-color: green;
`;
