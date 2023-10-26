import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as S from './Login.styles';

import BoxChecked from '../../components/loginComponent/BoxChecked';

import BackgroundImg from '../../assets/images/background.png';
import Man from '../../assets/images/sammy-finance.png';
import User from '../../assets/icons/user.svg';
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import Lock from '../../assets/icons/lock.svg';
import FindId from './FindId';
import FindPassword from './FindPassword';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isRemebered, setIsRemembered] = useState(false);

  const toggleCheckBox = () => {
    setIsRemembered(!isRemebered);
  };

  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundImg} />
      <S.Img source={Man} />
      <S.Div>
        <S.Top>
          <S.Title>로그인</S.Title>
          <Text>로그인하세요 </Text>
        </S.Top>
        <S.Body>
          {/* 아이디 입력창 */}
          <S.InputBox>
            <S.InputDiv>
              <User />
              <S.Input placeholder="KNOX 아이디"></S.Input>
            </S.InputDiv>
          </S.InputBox>
          {/* 비밀번호 입력창 */}
          <S.InputBox>
            <S.InputDiv>
              <Lock />
              <S.Input
                secureTextEntry={!showPassword}
                placeholder="비밀번호"></S.Input>
            </S.InputDiv>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {showPassword ? <Eye /> : <EyeOff />}
            </TouchableOpacity>
          </S.InputBox>
          {/*아이디 저장, 아이디, 패스워드 찾기 */}
          <S.SubContainer>
            <S.CheckDiv onPress={toggleCheckBox}>
              {isRemebered ? <BoxChecked /> : <S.Box />}
              <S.SubText>아이디 저장</S.SubText>
            </S.CheckDiv>
            <S.SubDiv>
              <S.Anchor onPress={() => navigation.navigate(FindId)}>
                <S.IrisText>아이디</S.IrisText>
              </S.Anchor>
              <S.IrisText> / </S.IrisText>
              <S.Anchor onPress={() => navigation.navigate(FindPassword)}>
                <S.IrisText>비밀번호 찾기</S.IrisText>
              </S.Anchor>
            </S.SubDiv>
          </S.SubContainer>
        </S.Body>
        <S.Bottom>
          {/* 로그인 버튼 */}
          <S.OTPButton onPress={() => navigation.navigate('EmailOTP')}>
            <S.ButtonText> 로그인 </S.ButtonText>
          </S.OTPButton>
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default Login;
