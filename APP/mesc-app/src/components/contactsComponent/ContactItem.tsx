import React from 'react';
import {View, Text, Image} from 'react-native';
import {colors} from '../common/Theme';
import * as S from './ContactItem.styles';

interface IContactItem {
  item: {
    userId: number;
    // ImageUrl: string;
    imageUrl: any;
    userName: string;
    userEmail: string;
    userRank: string;
  };
}

export default function ContactItem({item}: IContactItem) {
  return (
    <S.Container>
      <S.Box>
        <S.ImageBox>
          <S.Img source={item.imageUrl} />
        </S.ImageBox>
        <S.InfoBox>
          <S.BoldText size={17} color={colors.primary}>
            {item.userName}
          </S.BoldText>
          <S.BoldText size={14} color={colors.tertiary}>
            {item.userEmail}
          </S.BoldText>
        </S.InfoBox>
      </S.Box>
      <S.RankBox>
        <S.BoldText size={14} color={colors.tertiary}>
          {item.userRank}
        </S.BoldText>
      </S.RankBox>
    </S.Container>
  );
}
