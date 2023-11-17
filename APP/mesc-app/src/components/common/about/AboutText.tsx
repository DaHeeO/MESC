import React from 'react';
import styled from 'styled-components/native';

interface TextBoxProps {
  fontSize?: string;
  fontWeight?: 'normal' | 'bold';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  // 다른 스타일 속성 추가
}

export const TextBox = styled.TextInput<TextBoxProps>`
  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || 'black'};
  text-align: ${props => props.textAlign || 'center'};
`;
