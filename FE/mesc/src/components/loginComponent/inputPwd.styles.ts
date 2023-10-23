import styled from 'styled-components/native';
import {colors} from '../theme';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.backgroundGray};
  border-radius: 14px;
  margin-bottom: 20px;
  padding: 2px 20px;
`;

export const Div = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding-left: 10px;
  font-size: 16px;
  color: ${colors.secondary};
`;
