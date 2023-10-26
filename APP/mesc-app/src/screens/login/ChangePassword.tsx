import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as S from './ChangePassword.styles';

import BackgroundImg from '../../assets/images/background.png';
import Girl from '../../assets/images/sammy-message.png';

import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import Lock from '../../assets/icons/lock.svg';

interface LoginProps {
  navigation: any;
}

const ChangePassword = ({navigation}: LoginProps) => {
  // 비밀번호 눈까리
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 비밀번호 확인 눈까리
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // 비밀번호 체크
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordMatch = password === confirmPassword;

  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundImg} />
      <S.Img source={Girl} />
      <S.Div>
        <S.Top>
          <S.Title>비밀번호 변경</S.Title>
        </S.Top>
        <S.Body>
          <S.Text>이전 비밀번호와 다른 비밀번호로 설정해주세요</S.Text>

          <View>
            <S.InputBox>
              <S.InputDiv>
                <Lock />
                <S.Input
                  secureTextEntry={!showPassword}
                  placeholder="비밀번호"
                  value={password}
                  onChangeText={text => setPassword(text)}></S.Input>
              </S.InputDiv>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                {showPassword ? <Eye /> : <EyeOff />}
              </TouchableOpacity>
            </S.InputBox>
            <S.InputBox>
              <S.InputDiv>
                <Lock />
                <S.Input
                  secureTextEntry={!showConfirmPassword}
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}></S.Input>
              </S.InputDiv>
              <TouchableOpacity onPress={toggleShowConfirmPasswordVisibility}>
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </TouchableOpacity>
            </S.InputBox>
          </View>
        </S.Body>
        <S.Bottom>
          {passwordMatch ? (
            <S.Button onPress={() => navigation.navigate('Login')}>
              <S.ButtonText> 제출 </S.ButtonText>
            </S.Button>
          ) : (
            <S.BorderButton>
              <S.BorderButtonText> 제출 </S.BorderButtonText>
            </S.BorderButton>
          )}
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default ChangePassword;
