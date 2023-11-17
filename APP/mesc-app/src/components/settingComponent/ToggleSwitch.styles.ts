import styled from 'styled-components/native';
import {colors} from '../common/Theme';

export const ToggleSwitch = styled.Pressable<{isChecked: boolean}>`
  width: 42px;
  height: 25px;
  border-radius: 13px;
  padding: 2px;
  background-color: ${props =>
    props.isChecked ? colors.lightiris : '#E9E9EA'};
  display: flex;
  justify-content: center;
  align-items: ${props => (props.isChecked ? 'flex-end' : 'flex-start')};
`;

export const Circle = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 13px;
  background-color: white;
  elevation: 4;
`;
