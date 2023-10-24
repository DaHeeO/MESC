import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as S from './Login.styles';

import BackgroundImg from '../../assets/images/background.png';
import Man from '../../assets/images/sammy-finance.png';
import User from '../../assets/icons/user.svg';
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import Lock from '../../assets/icons/lock.svg';

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
          {/* 아이디 입력창 */}
          <S.InputBox>
            <S.InputDiv>
              <User />
              <S.Input placeholder="Enter Your Know account ID"></S.Input>
            </S.InputDiv>
          </S.InputBox>
          {/* 비밀번호 입력창 */}
          <S.InputBox>
            <S.InputDiv>
              <Lock />
              <S.Input placeholder="Password"></S.Input>
            </S.InputDiv>
            <TouchableOpacity onPress={() => console.log('눈까리')}>
              <Eye />
            </TouchableOpacity>
          </S.InputBox>
          {/*아이디 저장, 아이디, 패스워드 찾기 */}
          <S.SubContainer>
            <S.CheckDiv onPress={() => console.log('checkbox')}>
              <S.Box />
              <S.SubText>Remember Me</S.SubText>
            </S.CheckDiv>
            <S.SubDiv>
              <S.Anchor onPress={() => console.log('Press')}>
                <S.IrisText>Forgot ID</S.IrisText>
              </S.Anchor>
              <S.IrisText> / </S.IrisText>
              <S.Anchor onPress={() => console.log('Press')}>
                <S.IrisText>Password</S.IrisText>
              </S.Anchor>
              <S.IrisText>?</S.IrisText>
            </S.SubDiv>
          </S.SubContainer>
        </S.Body>
        <S.Bottom>
          {/* 토글버튼 */}
          <S.Toggle>
            <S.NotSelected>
              <S.NotSelectedText>Email</S.NotSelectedText>
            </S.NotSelected>
            <S.Selected>
              <S.SelectedText>SMS</S.SelectedText>
            </S.Selected>
          </S.Toggle>
          {/* OTP 버튼 */}
          <S.OTPButton onPress={() => navigation.navigate('OTP')}>
            <S.ButtonText> Send OTP </S.ButtonText>
          </S.OTPButton>
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default Login;
