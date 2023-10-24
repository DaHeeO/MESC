import React from 'react';
import {View, Text} from 'react-native';
import * as S from './Login.styles';

import BackgroundImg from '../../assets/images/background.png';
import Man from '../../assets/images/sammy-finance.png';

interface LoginProps {
  navigation: any;
}

const OTP = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundImg} />
      <S.Img source={Man} />
      <S.Div>
        <S.Top>
          <S.Title>Sign In</S.Title>
          <Text>Welcome Back!</Text>
        </S.Top>
        <S.Body></S.Body>
        <S.Bottom></S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default OTP;
