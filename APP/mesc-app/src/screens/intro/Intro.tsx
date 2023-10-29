import React from 'react';
import * as S from './Intro.styles';
import OnBoarding from '../../components/introComponent/OnBorading';

import BackgroundIntro from '../../assets/images/background-intro.png';
import intro1 from '../../assets/images/intro1.png';
import intro2 from '../../assets/images/intro2.png';
import intro3 from '../../assets/images/intro3.png';

interface LoginProps {
  navigation: any;
}

const PAGES = [
  {
    num: 1,
    maintext: 'Work Smater And Collaborate Better',
    subtext:
      'You can easily put data with ChatBot in Apps, and add to chatroom or channel you want.',
    image: intro1,
  },
  {
    num: 2,
    maintext: 'Work Smater And Collaborate Better',
    subtext:
      'You can easily put data with ChatBot in Apps, and add to chatroom or channel you want.',
    image: intro2,
  },
  {
    num: 3,
    maintext: 'Work Smater And Collaborate Better',
    subtext:
      'You can easily put data with ChatBot in Apps, and add to chatroom or channel you want.',
    image: intro3,
  },
];

const Intro = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundIntro} />
      <S.Div>
        <S.Top>
          <S.SkipBox onPress={() => navigation.navigate('Main')}>
            <S.Skip>Skip</S.Skip>
          </S.SkipBox>
        </S.Top>
        <OnBoarding pages={PAGES} />
      </S.Div>
    </S.Container>
  );
};

export default Intro;
