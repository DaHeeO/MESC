import styled from 'styled-components/native';
import {Image, ImageBackground} from 'react-native';
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
  object-fit: cover;
  top: -30%;
`;

export const Div = styled.View`
  width: 90%;
  height: 100%;
`;

export const Top = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  padding-top: 25px;
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
`;

export const ProfileContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
`;

export const AvatarBox = styled.View`
  width: 120px;
  height: 120px;
  position: relative;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;

export const AvatarEdit = styled.Pressable`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 18px;
  bottom: 0;
  right: 0;
`;

export const ProfileBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SettingContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40%;
`;

export const TextBox = styled.View`
  display: flex;
  width: 100%;
  margin: 10px 0;
`;

export const SettingBox = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: white;
  padding: 16px 16px;
  margin-bottom: 10px;
`;

export const SettingDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
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
  height: 50%;
  margin-left: 20px;
`;

export const ChatButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edb01b;
  padding: 8px 16px 12px 16px;
  margin-top: 5%;
  border-radius: 6px;
  margin-left: 20px;
`;
