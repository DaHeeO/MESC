import React from 'react';
import * as S from './inputPwd.styles';

import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import Lock from '../../assets/icons/lock.svg';

function InputPwd() {
  return (
    <S.Container>
      <S.Div>
        <Lock />
        <S.Input placeholder="Password"></S.Input>
      </S.Div>
      <S.Div>
        <Eye />
      </S.Div>
    </S.Container>
  );
}

export default InputPwd;
