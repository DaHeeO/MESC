import React from 'react';
import {View, Text} from 'react-native';
import * as S from './Success.styles';

interface LoginProps {
  navigation: any;
}

const Success = ({navigation}: LoginProps) => {
  return (
    <S.Container style={{backgroundColor: 'green'}}>
      <Text>SMS</Text>
    </S.Container>
  );
};

export default Success;
