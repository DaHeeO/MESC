import React from 'react';
import * as S from './Intro1.styles';

import BackgroundIntro from '../../assets/images/background-intro.png';
import asset from '../../assets/images/intro3.png';

interface LoginProps {
  navigation: any;
}

const Intro3 = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundIntro} />
      <S.Div>
        <S.Top>
          <S.SkipBox>
            <S.Skip>Skip</S.Skip>
          </S.SkipBox>
          <S.Img source={asset} />
        </S.Top>
        <S.Body>
          <S.MainText>Work Smater And Collaborate Better</S.MainText>
          <S.SubText>
            You can easily put data with ChatBot in Apps, and add to chatroom or
            channel you want.
          </S.SubText>
          <S.Circles>
            <S.Circle></S.Circle>
            <S.Circle></S.Circle>
            <S.CircleSelected></S.CircleSelected>
          </S.Circles>
        </S.Body>
        <S.Bottom>
          <S.Button onPress={() => navigation.navigate('Main')}>
            <S.ButtonText> 시작하기 </S.ButtonText>
          </S.Button>
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default Intro3;
