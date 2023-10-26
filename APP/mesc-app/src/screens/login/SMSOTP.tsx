import React from 'react';
import {View, Text} from 'react-native';
import * as S from './SMSOTP.styles';

import BackgroundImg from '../../assets/images/background.png';
import Man from '../../assets/images/sammy-finance.png';

interface LoginProps {
  navigation: any;
}

const SMSOTP = ({navigation}: LoginProps) => {
  return (
    <S.Container style={{backgroundColor: 'green'}}>
      <Text>SMS</Text>
    </S.Container>
  );
};

export default SMSOTP;
