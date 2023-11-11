// React
import React, {useEffect, useCallback, useState, useRef} from 'react';
//Styled
import {View, ScrollView} from 'react-native';
import * as S from '../chat/Chat.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
// Components
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import {ChatChooseSection1} from '../../components/message/Btn/ChatChooseSection1';
import {ChatChooseSection2} from '../../components/message/Btn/ChatChooseSection2';
import {RecoilState, useRecoilState, useRecoilValue} from 'recoil';
import {ChatComponentIdSwitch} from '../chat/ComponentId';
import {ChatbotHistoryState} from '../../states/ChatbotHistoryState';
import {Card} from '../../states/CardState';
import DataComponent from '../../components/chat/data/DataComponent';
import ChatInput from '../../components/chat/ChatInput';
import {BlockResponseData} from '../../states/BlockResponseState';
import {InputState} from '../../states/InputState';

//BottomSheet
import {ModalIdSwitch} from '../../components/common/id/ModalId';
import {BottomSheet} from '../../components/common/bottomSheet/BottomSheetModal1';
import {ConditionModifyState} from '../../states/BottomSheetState';
import {ConditionForm} from '../../components/message/Condition/ConditionForm';
import {modalIdState} from '../../states/ModalIdState';

//Api
import {getBlock} from '../../../Api';

interface BlockProps {
  cardList: Card[];
  isPossible: boolean;
  section: number;
}

function Test() {
  // 원하는 모달 띄우기 (모달은 채팅 하단에 있음)
  const modalId = useRecoilValue(modalIdState);
  const realModalId = ModalIdSwitch({modalId});
  // console.log('realModalId', realModalId);

  // const ModalState: RecoilState<string> = 'ConditionModifyState';

  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState); // 해당 모달State값 넣기

  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  const [block, setBlock] = useRecoilState(BlockResponseData);

  const [inputState, setInputState] = useRecoilState(InputState);

  const chatLayoutRef = useRef<ScrollView | null>(null); // Ref for the ScrollView

  useEffect(() => {
    const role = 12;
    putBlockToRecoil(role);
  }, []);

  useEffect(() => {
    if (block.blockId === 0) return;
    const chatbotBlock = makeChatbotBlock(block);
    setChatbotHistory(prev => [...prev, chatbotBlock]);
  }, [block]);

  const makeChatbotBlock = useCallback((data: any) => {
    // section 값에 따라 조건부 렌더링
    let buttonComponent;
    if (data.section === 1) {
      buttonComponent = <ChatChooseSection1 />;
    } else if (data.section === 2) {
      buttonComponent = <ChatChooseSection2 />;
    }

    setInputState(data.isPossible);

    // cardList를 순회하면서 각 cardType에 따른 컴포넌트 렌더링
    const cardComponents = data.cardList.map((card: any, index: any) => (
      <View key={index}>{ChatComponentIdSwitch(card)}</View>
    ));

    return (
      <>
        <ChatbotProfile />
        {cardComponents}
        {buttonComponent}
      </>
    );
  }, []);

  // chatbotHistory 변경될 때마다 스크롤
  useEffect(() => {
    scrollToBottom();
  }, [chatbotHistory]);

  const scrollToBottom = () => {
    chatLayoutRef.current?.scrollToEnd({animated: true});
  };

  const putBlockToRecoil = async (blockId: number) => {
    const newBlock = await getBlock(blockId, {});
    if (newBlock) setBlock(newBlock);
  };

  return (
    <S.Container>
      <Header />
      <S.ChatLayout>
        <ScrollView ref={chatLayoutRef} showsVerticalScrollIndicator={false}>
          {chatbotHistory.map((component, index) => (
            // chatbotHistory 배열 순회하며 컴포넌트 렌더링
            <View key={index}>{component}</View>
          ))}
          <DataComponent />
        </ScrollView>
      </S.ChatLayout>
      <BottomSheet
        isModalVisible={!isModalVisible} // 여기도 stateID값을 받을 수 있도록 해야함
        modalHeight={'70%'}
        modalBreakPoint={'20%'}
        component={realModalId} // 여기를 ID값을 받을 수 있도록
      />
      <ChatInput />
    </S.Container>
  );
}

export default Test;
