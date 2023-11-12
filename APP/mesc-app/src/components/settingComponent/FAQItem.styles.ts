import styled from 'styled-components/native';
import {colors} from '../common/Theme';

export const Text = styled.Text<{size: number; color: string}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`;

export const BoldText = styled.Text<{size: number; color: string}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  font-weight: bold;
`;

export const FAQBox = styled.Pressable`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FAQTitleBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
`;

export const FAQAnswerBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
  background-color: ${colors.backgroundGray};
`;

export const Container = styled.View`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;
