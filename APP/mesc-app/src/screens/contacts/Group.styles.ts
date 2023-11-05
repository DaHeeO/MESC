import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {colors} from '../../components/common/theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const Div = styled.View`
  width: 90%;
  height: 100%;
  // background-color: blue;
`;

export const Top = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: green;
`;

export const Navigation = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Func = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.Text<{size: number; color: string}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`;

export const BoldText = styled.Text<{size: number; color: string}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  font-weight: bold;
`;

export const TitleBox = styled.View`
  width: 60%;
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80%;
  // background-color: red;
`;

export const ContactDiv = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 94%;
  height: 55px
  margin-top: 5%;
  // background-color: green;
`;

export const ContactBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContactText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: bold;
  margin: 0px 10px;
`;

export const NavigateToContact = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const GroupDiv = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  // background-color: green;
`;

export const GroupBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const DeleteCircle = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 15px;
  background-color: ${colors.red};
`;

export const GroupText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: bold;
  margin: 0px 10px;
`;

export const ContactInput = styled.TextInput`
  font-size: 16px;
  width: 75%;
  height: 100%;
  color: ${colors.primary};
  font-weight: bold;
  margin: 0px 6px;
`;

export const DeleteContainer = styled(Animated.View)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const DeleteBox = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  padding: 0px 16px
  background-color: ${colors.red};';
`;
