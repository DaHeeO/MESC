import styled from 'styled-components/native';
import {Image} from 'react-native';
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
  height: 67%;
  // background-color: green;
`;

export const FilterDiv = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 4px;
`;

export const FilterText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: bold;
`;
