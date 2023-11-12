import React, {useState} from 'react';
import * as S from './SearchDataForm.styles';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBtn from '../../../assets/icons/searchbtn.svg';
import NextBtn from '../../../assets/icons/nextBtn.svg';
import {useRecoilValue, useRecoilState} from 'recoil';
import {BlockResponseData} from '../../../states/BlockResponseState';
import {getBlock} from '../../../../Api';
import {get, set} from 'lodash';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {TableTitleState} from '../../../states/DataTitleState';
import {Table} from '@mui/material';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import UserMessage from '../UserMessage';

type ButtonItem = {
  id: number;
  name: string;
  link: string;
  actionId?: number;
};

const SearchDataForm = () => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [tableTitle, setTataTitle] = useRecoilState(TableTitleState);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  // console.log('block', block);
  const cardList = block.cardList;
  const mlCard = cardList.find(card => card.cardType === 'ML');

  const handleButtonClick = async (button: ButtonItem) => {
    setChatbotHistory([
      ...chatbotHistory,
      <UserMessage message={button.name} />,
    ]);
    const body = {
      actionId: 23,
      conditions: '',
    };
    const block = await getBlock(4, body);
    console.log(block);
    setBlock(block);
    setTataTitle(button.name);
  };

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
            mlCard.button.map((button: ButtonItem) => (
              <S.ButtonRow key={button.id}>
                <TouchableOpacity onPress={() => handleButtonClick(button)}>
                  <S.ButtonName>{button.name}</S.ButtonName>
                  <S.ImageBox>
                    <NextBtn />
                  </S.ImageBox>
                </TouchableOpacity>
              </S.ButtonRow>
            ))}
        </ScrollView>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default SearchDataForm;
