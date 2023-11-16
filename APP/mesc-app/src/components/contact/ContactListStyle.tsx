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
  height: 20%;
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
  height: 30px;
  width: 60%;
  display: flex;
  align-items: center;
  // background-color: yellow;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Right = styled.TouchableOpacity`
  width: 20%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: pink;
  height: 40px;
`;

export const Search = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.backgroundGray};
  border-radius: 10px;
  height: 40px;
  width: 100%;
  padding: 0 16px;
  // background-color: aqua;
`;

export const SearchText = styled.TextInput`
  font-size: 16px;
  color: ${colors.tertiary};
  padding-left: 12px;
  width: 95%;
  line-height: 40px;
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75%;
  // background-color: pink;
`;

export const FilterDiv = styled.View`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FilterText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const ContactDiv = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
  margin-top: 3px;
  border-bottom-width: 0.7px;
  // justify-content: space-between;
  // width: 100%;
  // border: 1px solid ${colors.tertiary};
`;

export const ContactBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin-bottom: 10px;
  height: 100%;
  // background-color: skyblue;
`;

export const NameBox = styled.View`
  width: 70px;
  flex-direction: column;
  margin-left: 10px;
  // background-color: red;
  justify-content: center;
`;

export const EmailBox = styled.View`
  width: 230px;
  flex-direction: column;
  margin-left: 10px;
  // background-color: red;
  justify-content: center;
`;

export const CheckBox = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 6px;
  border-radius: 12px;
  border: 1.5px solid ${colors.header};
`;

export const Row = styled.View`
  width: 100%;
  // background-color: green;
  // border: 1px solid ${colors.tertiary};
`;

export const CheckboxContainer = styled.TouchableOpacity`
  width: 10%;
  align-items: center;
  justify-content: center;
  // background-color: yellow;
  margin-bottom: 10px;
`;

export const SendBtn = styled.TouchableOpacity`
  height: 30px;
  width: 70px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-size: 15px;
  background: #3c56a0;
`;

export const SendText = styled.Text`
  // font-weight: bold;
  font-size: 16px;
  color: #fff;
  line-height: 30px;
`;
