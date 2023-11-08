import React from 'react';
import {ButtonContainer, TextBox} from '../Condition/ConditionFormStyle';

interface OkayBtnProps {
  backgroundColor?: string;
  color?: string;
  content: string;
  height?: string;
  onPress?: () => void;
}

export const OkayBtn = (props: OkayBtnProps) => {
  return (
    <ButtonContainer
      onPress={props.onPress}
      backgroundColor={props.backgroundColor}
      height={props.height}>
      <TextBox color={props.color}>{props.content}</TextBox>
    </ButtonContainer>
  );
};
