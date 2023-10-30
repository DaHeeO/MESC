import React from 'react';
import {View, Text} from 'react-native';
import * as S from './Main.styles';

import BackgroundImg from '../../assets/images/background.png';
import Man from '../../assets/images/sammy-finance.png';

const Main = ({navigation}: any) => {
  return (
    <S.Container style={{backgroundColor: 'green'}}>
      <Text>SMS</Text>
    </S.Container>
  );
};

export default Main;
