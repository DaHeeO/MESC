import React from 'react';
import {View, Text} from 'react-native';
import * as S from './FindPassword.styles';

interface LoginProps {
  navigation: any;
}

const FindPassword = ({navigation}: LoginProps) => {
  return (
    <S.Container style={{backgroundColor: 'green'}}>
      <Text>SMS</Text>
    </S.Container>
  );
};

export default FindPassword;
