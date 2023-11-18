import React from 'react';
import {useWindowDimensions} from 'react-native';
import * as S from './OnBoardingItem.styles';
import intro1 from '../../../assets/images/조회.png';
import intro2 from '../../../assets/images/조작.png';
import intro3 from '../../../assets/images/보고.png';

interface IOnBoardingItem {
  item: {
    num: number;
    image: any;
    maintext: string;
    subtext: string;
  };
}

export default function OnBoardingItem({item}: IOnBoardingItem) {
  const {width} = useWindowDimensions();

  return (
    <S.Container>
      <S.ImageBox>
        <S.Img source={item.image} />
      </S.ImageBox>
      <S.View>
        <S.MainText>{item.maintext}</S.MainText>
        <S.SubText>{item.subtext}</S.SubText>
      </S.View>
    </S.Container>
  );
}
