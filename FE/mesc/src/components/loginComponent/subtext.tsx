import React from 'react';
import * as S from './subtext.styles';

function SubText() {
  return (
    <S.Container>
      <S.Div>
        <S.Check></S.Check>
        <S.Text>Remember Me</S.Text>
      </S.Div>
      <S.Div>
        <S.Anchor>Forgot ID</S.Anchor>
        <S.IrisText> / </S.IrisText>
        <S.Anchor>Password</S.Anchor>
        <S.IrisText>?</S.IrisText>
      </S.Div>
    </S.Container>
  );
}

export default SubText;
