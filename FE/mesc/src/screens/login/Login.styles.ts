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

export const InputBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.backgroundGray};
  border-radius: 14px;
  margin-bottom: 20px;
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

export const SubContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px 4px;
`;

export const SubDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckDiv = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.View`
  width: 12px;
  height: 12px;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
`;

export const SubText = styled.Text`
  margin-left: 6px;
  color: ${colors.secondary};
`;

export const Anchor = styled.TouchableOpacity`
  color: ${colors.iris};
  font-weight: 600;
`;

export const IrisText = styled.Text`
  color: ${colors.iris};
  font-weight: 600;
`;

export const Bottom = styled.View`
  align-items: center;
  height: 30%;
  // background-color: green;
`;

export const Toggle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 95%;
  height: 56px;
  background-color: ${colors.backgroundIris};
  border-radius: 50px;
`;

export const Selected = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 45%;
  background-color: ${colors.lightiris};
  border-radius: 30px;
`;

export const SelectedText = styled.Text`
  font-size: 16px;
  color: white;
`;
export const NotSelected = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 45%;
  border-radius: 30px;
`;
export const NotSelectedText = styled.Text`
  font-size: 16px
  color: ${colors.secondary}
`;

export const OTPButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 56px;
  background-color: ${colors.backgroundIris};
  border-radius: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.iris};
`;
