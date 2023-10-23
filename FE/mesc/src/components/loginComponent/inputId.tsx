import React from 'react';
import * as S from './inputId.styles';

import User from '../../assets/icons/user.svg';

function InputId() {
  return (
    <S.Container>
      <S.Div>
        <User />
        <S.Input placeholder="Enter Your Know account ID"></S.Input>
      </S.Div>
    </S.Container>
  );
}

export default InputId;
