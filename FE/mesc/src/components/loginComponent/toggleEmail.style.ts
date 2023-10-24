import styled from 'styled-components/native';
import {colors} from '../theme';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  background-color: ${colors.backgroundIris};
  padding: 18px 10px;
  border-radius: 50px;
`;

export const Selected = styled.TouchableOpacity``;
export const NotSelected = styled.TouchableOpacity``;
