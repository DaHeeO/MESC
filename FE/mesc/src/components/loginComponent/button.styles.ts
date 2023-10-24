import styled from 'styled-components/native';
import {colors} from '../theme';

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  background-color: ${colors.backgroundIris};
  padding: 18px 10px;
  border-radius: 14px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.iris};
`;
