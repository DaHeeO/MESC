import React from 'react';
import {View, Text} from 'react-native';
import * as S from './ChangePassword.styles';

interface LoginProps {
  navigation: any;
}

const ChangePassword = ({navigation}: LoginProps) => {
  return (
    <S.Container style={{backgroundColor: 'red'}}>
      <Text>Email</Text>
    </S.Container>
  );
};

export default ChangePassword;
