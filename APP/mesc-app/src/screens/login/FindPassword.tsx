import React from 'react';
import {View, Text} from 'react-native';
import * as S from './FindPassword.styles';

import BackgroundImg from '../../assets/images/background.png';
import Girl from '../../assets/images/sammy-message.png';
import User from '../../assets/icons/user.svg';
import Mail from '../../assets/icons/mail.svg';

interface LoginProps {
  navigation: any;
}

const FindPassword = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundImg} />
      <S.Img source={Girl} />
      <S.Div>
        <S.Top>
          <S.Title>비밀번호 찾기</S.Title>
        </S.Top>
        <S.Body>
          <S.Text>
            요청하신 비밀번호는 등록되어 있는 이메일 또는 SMS로 임시 번호가
            전송됩니다.
          </S.Text>

          <View>
            <S.InputBox>
              <S.InputDiv>
                <User />
                <S.Input placeholder="이름"></S.Input>
              </S.InputDiv>
            </S.InputBox>
            <S.InputBox>
              <S.InputDiv>
                <Mail />
                <S.Input placeholder="이메일"></S.Input>
              </S.InputDiv>
            </S.InputBox>
          </View>

          <S.SubDiv>
            <S.Text>비밀번호가 기억나셨나요? </S.Text>
            <S.Anchor onPress={() => navigation.navigate('Login')}>
              <S.IrisText>로그인</S.IrisText>
            </S.Anchor>
          </S.SubDiv>
        </S.Body>
        <S.Bottom>
          <S.Button onPress={() => navigation.navigate('Success')}>
            <S.ButtonText> 제출 </S.ButtonText>
          </S.Button>
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default FindPassword;
