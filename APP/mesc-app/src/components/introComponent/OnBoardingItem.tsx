import React from 'react';
import {useWindowDimensions} from 'react-native';
import * as S from './OnBoardingItem.styles';

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
    <S.Container style={{width}}>
      <S.Img source={item.image} />
      <S.View>
        <S.MainText>{item.maintext}</S.MainText>
        <S.SubText>{item.subtext}</S.SubText>
      </S.View>
    </S.Container>
  );
}
