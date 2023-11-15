import React, {useState, useEffect} from 'react';
import * as S from './SearchDataForm.styles';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBtn from '../../../assets/icons/searchbtn.svg';
import NextBtn from '../../../assets/icons/nextBtn.svg';
import {useRecoilValue, useRecoilState} from 'recoil';
import {BlockResponseData} from '../../../states/BlockResponseState';
import {getBlock} from '../../../../Api';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import UserMessage from '../UserMessage';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {is} from 'date-fns/locale';

type ButtonItem = {
  id: number;
  name: string;
  link: string;
  actionId?: number;
};

const SearchDataForm = () => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  // 모달 띄우기 관련
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);
  const cardList = block.cardList;
  const mlCard = cardList.find(card => card.cardType === 'ML');

  const handleButtonClick = async (button: ButtonItem) => {
    setIsModalVisible(false);
    setChatbotHistory([
      ...chatbotHistory,
      <UserMessage message={button.name} />,
    ]);
    const body = {
      actionId: button.actionId,
      title: button.name,
      conditions: '',
    };

    const block = await getBlock(4, body);
    setBlock(block);
  };

  return (
    <S.Container>
      {/* =========================== */}
      <S.InputContainer>
        <S.SearchInput>
          <S.ImageBox>
            <SearchBtn />
          </S.ImageBox>
          <S.SearchText placeholder="검색어를 입력하세요" />
        </S.SearchInput>
      </S.InputContainer>
      {/* =========================== */}
      <S.ButtonContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mlCard &&
            mlCard.button &&
            mlCard.button.map((button: ButtonItem) => (
              <S.ButtonRow
                key={button.id}
                onPress={() => handleButtonClick(button)}>
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
