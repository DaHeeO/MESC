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

export const Div = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  // background-color: blue;
`;

export const Top = styled.View`
  width: 100%;
  height: 14%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 5%;
  align-items: center;
  margin-top: 25px;
`;

export const Back = styled.TouchableOpacity`
  width: 20%;
  display: flex;
  flex-direction: row;
  //   background-color: yellow;
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

export const Menu = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SelectBox = styled.TouchableOpacity<{selected: boolean}>`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-bottom-width: 3px;
  border-bottom-color: ${props =>
    props.selected ? colors.primary : colors.backgroundGray};
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  height: 77%;
  width: 90%;
`;
