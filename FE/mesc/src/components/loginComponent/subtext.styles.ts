import styled from 'styled-components/native';
import {colors} from '../theme';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px 4px;
`;

export const Div = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Check = styled.TouchableOpacity`
  width: 12px;
  height: 12px;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
`;

export const Text = styled.Text`
  margin-left: 6px;
  color: ${colors.secondary};
`;

export const Anchor = styled.Text`
  color: ${colors.iris};
  font-weight: 600;
`;

export const IrisText = styled.Text`
  color: ${colors.iris};
  font-weight: 600;
`;
