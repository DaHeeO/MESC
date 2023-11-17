import React from 'react';
import * as S from './Intro.styles';
import OnBoarding from '../../components/introComponent/OnBoarding';

import BackgroundIntro from '../../assets/images/background-intro.png';
import intro1 from '../../assets/images/main1.png';
import intro2 from '../../assets/images/main2.png';
import intro3 from '../../assets/images/main3.png';

interface LoginProps {
  navigation: any;
}

const PAGES = [
  {
    num: 1,
    maintext: '공장 데이터 조회',
    subtext: '복잡한 데이터를 실시간으로 파악할 수 있습니다.',
    image: intro1,
  },
  {
    num: 2,
    maintext: 'DML 조작',
    subtext: '데이터 CRUD가 가능합니다.',
    image: intro2,
  },
  {
    num: 3,
    maintext: '보고 간편화',
    subtext: '위급상황 발생 시 간편하게 보고할 수 있습니다.',
    image: intro3,
  },
];

const Intro = ({navigation}: LoginProps) => {
  const handleButtonPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTab', params: {screen: 'Main'}}],
    });
  };

  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundIntro} />
      <S.Div>
        {/* <S.Top>
          <S.SkipBox
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'BottomTab', params: {screen: 'Main'}}],
              });
            }}>
            <S.Skip>Skip</S.Skip>
          </S.SkipBox>
        </S.Top> */}
        <OnBoarding pages={PAGES} />
      </S.Div>
    </S.Container>
  );
};

export default Intro;
