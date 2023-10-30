import styled from 'styled-components/native';
import {colors} from '../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  height: 100%;
  // background-color: green;
`;

export const Indicator = styled.View<{focused: boolean}>`
  background-color: ${props => (props.focused ? '#949BA5' : '#D9D9D9')};
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin: 0px 7px;
`;

export const IndicatorWrapper = styled.View`
  flex-direction: row;
  height: 10%;
  // background-color: blue;
`;

export const Bottom = styled.View`
  align-items: center;
  width: 80%;
  height: 15%;
  // background-color: green;
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
