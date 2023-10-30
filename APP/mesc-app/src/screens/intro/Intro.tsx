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
    maintext: '데이터 조회 가능',
    subtext: '챗봇을 통해 복잡한 데이터를 쉽게 파악할 수 있어요',
    image: intro1,
  },
  {
    num: 2,
    maintext: '데이터 조작 가능',
    subtext: '챗봇을 통해 데이터를 쉽게 조작 할 수 있어요.',
    image: intro2,
  },
  {
    num: 3,
    maintext: '업무 효율 증진',
    subtext:
      'MESC로 바로 연락을 취하고 회사 밖에서도 \n 데이터를 조작할 수 있어요',
    image: intro3,
  },
];

const Intro = ({navigation}: LoginProps) => {
  const handleButtonPress = () => {
    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'BottomTab', params: {screen: 'Main'}}],
    // });
  };

  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundIntro} />
      <S.Div>
        <S.Top>
          <S.SkipBox
            onPress={() => {
              // navigation.reset({
              //   index: 0,
              //   routes: [{name: 'BottomTab', params: {screen: 'Main'}}],
              // });
            }}>
            <S.Skip>Skip</S.Skip>
          </S.SkipBox>
        </S.Top>
        <OnBoarding pages={PAGES} onButtonPress={handleButtonPress} />
      </S.Div>
    </S.Container>
  );
};

export default Intro;
