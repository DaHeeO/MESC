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
  height: 40%;
  padding-top: 60px;
  // background-color: red;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Body = styled.View`
  display: flex;
  justify-content: space-evenly;
  height: 45%;
  padding: 40px 0px 60px 0px;
  // background-color: green;
`;

export const InputBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.backgroundGray};
  border-radius: 14px;
  margin: 10px 0px;
  padding: 2px 20px;
`;

export const InputDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  padding-left: 10px;
  font-size: 16px;
  color: ${colors.secondary};
`;

export const Text = styled.Text`
  font-size: 13px;
  color: ${colors.secondary};
`;

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

export const BorderButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 56px;
  background-color: ${colors.backgroundIris};
  border-radius: 14px;
`;

export const BorderButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.iris};
`;
