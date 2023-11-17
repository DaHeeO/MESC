import styled from 'styled-components/native';
import {Image, Animated} from 'react-native';
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
  height: 16%;
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
  margin-top: 25px;
  // background-color: red;
`;

export const Left = styled.TouchableOpacity`
  width: 20%;
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
  padding-bottom: 4px;
`;

export const Right = styled.TouchableOpacity`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

export const Search = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.icy};
  border-radius: 10px;
  height: 48px;
  width: 100%;
  padding: 0 16px;
`;

export const SearchText = styled.TextInput`
  font-size: 16px;
  color: ${colors.tertiary};
  padding-left: 12px;
  width: 95%;
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75%;
`;

export const FilterDiv = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 8px;
`;

export const FilterText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const ContactDiv = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  // background-color: green;
`;

export const ContactBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const ImageBox = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  overflow: hidden;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const InfoBox = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const RankBox = styled.View<{isNull?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 6px;
  background-color: ${props => (props.isNull ? 'white' : colors.lightiris)}
  border-radius: 100px;
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

export const MContactDiv = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 16px;
`;

export const CheckBox = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 6px;
  border-radius: 12px;
  border: 1.5px solid ${colors.quaternary};
`;
