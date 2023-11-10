import React, {useState} from 'react';
import * as S from './SearchDataForm.styles';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBtn from '../../../assets/icons/searchbtn.svg';
import NextBtn from '../../../assets/icons/nextBtn.svg';

const dummyData = {
  statusCode: 200,
  message: 'Success',
  data: {
    blockId: 3,
    isPossible: false,
    cardList: [
      {
        cardId: 3,
        cardType: 'TX',
        cardName: '공정목록텍스트',
        content: '다음 공정리스트 중 원하는 목록을 선택해주세요.',
      },
      {
        cardId: 4,
        cardType: 'ML',
        cardName: '공정목록',
        content: null,
        button: [
          {
            id: 4,
            name: '전체 작업 지시 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 5,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 6,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 7,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 8,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 9,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 10,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 11,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 12,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
          {
            id: 13,
            name: '전체 작업 조회',
            linkType: 'B',
            link: '4',
            iconId: null,
            response: '전체 작업 조회',
          },
        ],
      },
    ],
    dcbList: [],
  },
};

const SearchDataForm = () => {
  // Extract cardList from dummyData
  const {cardList} = dummyData.data;

  // Filter the cardList to get only those cards with cardType 'ML'
  const mlCard = cardList.find(card => card.cardType === 'ML');

  return (
    <S.Container>
      <S.SearchInput>
        <S.ImageBox>
          <SearchBtn />
        </S.ImageBox>
        <S.SearchText placeholder="검색어를 입력하세요" />
      </S.SearchInput>
      <S.ButtonContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mlCard &&
            mlCard.button &&
            mlCard.button.map((button: any) => (
              <S.ButtonRow key={button.id}>
                <S.ButtonName>{button.name}</S.ButtonName>
                <S.ImageBox>
                  <NextBtn />
                </S.ImageBox>
              </S.ButtonRow>
            ))}
        </ScrollView>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default SearchDataForm;
