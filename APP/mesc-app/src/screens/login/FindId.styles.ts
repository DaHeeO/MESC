import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

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
  top: 15%;
  left: 45%;
`;

export const Div = styled.View`
  width: 80%;
  height: 100%;
`;

export const Top = styled.View`
  height: 35%;
  padding-top: 70px;
  // background-color: red;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 900;
  color: ${colors.primary};
`;

export const Body = styled.View`
  display: flex;
  justify-content: center;
  height: 50%;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.secondary};
`;

export const IrisText = styled.Text`
  padding-top: 12px;
  font-size: 16px;
  color: ${colors.iris};
  font-weight: bold;
`;

export const Bottom = styled.View`
  align-items: center;
  height: 15%;
  // background-color: green;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 56px;
  background-color: ${colors.iris};
  border-radius: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
