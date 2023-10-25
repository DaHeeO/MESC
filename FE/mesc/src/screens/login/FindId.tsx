import React from 'react';
import * as S from './FindId.styles';

import BackgroundImg from '../../assets/images/background.png';
import Girl from '../../assets/images/sammy-message.png';

interface LoginProps {
  navigation: any;
}

const FindId = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundImg} />
      <S.Img source={Girl} />
      <S.Div>
        <S.Top>
          <S.Title>Forgot ID</S.Title>
        </S.Top>
        <S.Body>
          <S.Text>삼성 임직원은 Knox Portal 계정을 아이디로 사용하시고,</S.Text>
          <S.Text>일반회원은 서비스데스크로 연락해 주세요.</S.Text>
          <S.IrisText>
            {'('}1661-3311, 2{'>'}3{'>'}4 또는 말로 하는 ARS{')'}
          </S.IrisText>
        </S.Body>
        {/* 비율 맞추기 위함 */}
        <S.Bottom></S.Bottom>
        <S.Button onPress={() => navigation.navigate('Login')}>
          <S.ButtonText> 로그인 </S.ButtonText>
        </S.Button>
      </S.Div>
    </S.Container>
  );
};

export default FindId;
