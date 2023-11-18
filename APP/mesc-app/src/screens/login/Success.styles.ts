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

export const Div = styled.View`
  width: 80%;
  height: 100%;
`;

export const Top = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45%;
  padding-top: 60px;
  // background-color: red;
`;

export const Img = styled(Image)`
  width: 180px;
  height: 180px;
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40%;
  padding-top: 10%;
  padding-bottom: 30%;
  // background-color: green;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

export const MainText = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
  font-weight: bold;
`;

export const SubDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 13px;
  color: ${colors.secondary};
`;

export const IrisText = styled.Text`
  font-size: 12px;
  color: ${colors.iris};
  font-weight: 600;
`;

export const Anchor = styled.TouchableOpacity``;

export const Bottom = styled.View`
  height: 15%;
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
