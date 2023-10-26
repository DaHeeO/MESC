import React from 'react';
import {View, Text} from 'react-native';
import * as S from './Success.styles';

import BackgroundBlur from '../../assets/images/background-blur.png';
import Girl from '../../assets/images/sammy-shopping.png';

interface LoginProps {
  navigation: any;
}

const Success = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundBlur} />
      <S.Div>
        <S.Top>
          <S.Img source={Girl} />
        </S.Top>
        <S.Body>
          <View>
            <S.Title>Success</S.Title>
            <S.MainText>이메일을 확인하세요</S.MainText>
          </View>
          <S.SubDiv>
            <S.Text>이메일을 못받으셨나요? </S.Text>
            <S.Anchor onPress={() => navigation.navigate('FindPassword')}>
              <S.IrisText>재제출</S.IrisText>
            </S.Anchor>
          </S.SubDiv>
        </S.Body>
        <S.Bottom>
          <S.Button onPress={() => navigation.navigate('ChangePassword')}>
            <S.ButtonText> 확인 </S.ButtonText>
          </S.Button>
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default Success;
