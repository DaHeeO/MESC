import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

export const UserMessage = styled.View`
  margin-left: auto;
  margin-top: 20px;
  border-radius: 10px;
  height: auto;
  min-height: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.iris};
`;

export const TextBox = styled.View`
  border-radius: 10px;
  width: 90%;
  height: auto;
  align-items: center;
  justify-content: center;
`;
