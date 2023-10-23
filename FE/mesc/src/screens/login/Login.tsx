import React from 'react';
import {View, Text} from 'react-native';
import * as S from './Login.styles';

import BackgroundImg from '../../assets/images/background.png';
import Man from '../../assets/images/sammy-finance.png';

import InputId from '../../components/loginComponent/inputId';
import InputPwd from '../../components/loginComponent/inputPwd';
import ToggleEmail from '../../components/loginComponent/toggleEmail';
import Button from '../../components/loginComponent/button';
import SubText from '../../components/loginComponent/subtext';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundImg} />
      <S.Img source={Man} />
      <S.Div>
        <S.Top>
          <S.Title>Sign In</S.Title>
          <Text>Welcome Back!</Text>
        </S.Top>
        <S.Body>
          <InputId></InputId>
          <InputPwd></InputPwd>
          <SubText></SubText>
        </S.Body>
        <S.Bottom>
          <ToggleEmail></ToggleEmail>
          <Button></Button>
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default Login;
