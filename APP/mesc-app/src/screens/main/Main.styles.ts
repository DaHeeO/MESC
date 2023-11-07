import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
import {colors} from '../../components/common/Theme';

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
  height: 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // background-color: green;
`;

export const InfoDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
`;

export const WelcomeBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding-left: 10px;
`;

export const Text = styled.Text<{size: number; color: string}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`;

export const BoldText = styled.Text<{
  size: number;
  color: string;
}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  font-weight: bold;
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 79%;
`;

export const ToChat = styled(ImageBackground)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 180px;
  border-radius: 20px;
`;

export const ChatDiv = styled.View`
  display: flex;
  justify-content: space-between;
  height: 40%;
  margin-left: 20px;
`;

export const ChatButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightiris};
  padding: 8px 16px 12px 16px;
  margin-top: 5%;
  border-radius: 6px;
  margin-left: 20px;
`;

export const GroupContainer = styled.View`
  display: flex;
  width: 100%;
  height: 72%;
  // background-color: ${colors.lightiris};
`;

export const GroupNav = styled.View`
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
`;

export const SeeMore = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const GroupList = styled.FlatList`
  display: flex;
  width: 100%;
`;

export const ItemContainer = styled.View`
  display: flex;
  width: 48%;
  margin-right: 4%;
  margin-bottom: 3%;
  padding: 12px 14px;
  border-radius: 12px;
  background-color: white;
  elevation: 4;
`;

export const ItemTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ItemBackground = styled.View<{bgColor: string}>`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background-color: ${props => props.bgColor};
`;

export const Image = styled.Image`
  width: 60%;
  height: 60%;
`;

export const ItemBody = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Bottom = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.icy};
  border-radius: 5px;
  padding: 8px 0px;
`;
