import React from 'react';
import {View, Text} from 'react-native';
import * as S from './EmailOtp.styles';

interface LoginProps {
  navigation: any;
}

const EmailOTP = ({navigation}: LoginProps) => {
  return (
    <S.Container style={{backgroundColor: 'red'}}>
      <Text>Email</Text>
    </S.Container>
  );
};

export default EmailOTP;
