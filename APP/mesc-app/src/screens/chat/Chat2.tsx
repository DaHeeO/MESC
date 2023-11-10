import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import {ConditionForm} from '../../components/message/Condition/ConditionForm';
import {handleFingerPrint} from '../../components/figerprint/FingerPrint';
import LogLevelForm from '../../components/chat/log/LogLevelForm';
import {ModalIdSwitch} from '../../components/common/ModalId';
import {IconSwitch} from '../../components/common/ChatIcon';
import {ChatChooseSection1} from '../../components/message/Btn/ChatChooseSection1';
import {ChatChooseSection2} from '../../components/message/Btn/ChatChooseSection2';
import SearchDataForm from '../../components/chat/data/SearchDataForm';
import {customAxios, getBlock} from '../../../Api';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ChatComponentIdSwitch} from './ComponentId';
import {AboutContainer} from '../../components/common/about/AboutContainer';
import {ChatbotHistoryState} from '../../states/ChatbotHistoryState';
import {BlockResponseData} from '../../states/BlockResponseState';
import {AboutBottomSheetModal} from '../../components/common/bottomSheet/AboutBottomModal';

function Chat() {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  const [block, setBlock] = useRecoilState(BlockResponseData);

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
        </ScrollView>
      </S.ChatLayout>
      <ChatInput />
      <AboutBottomSheetModal
        btnTitle={'데이터조회'}
        modalHeight={'70%'}
        modalBreakPoint={'30%'}
        component={<SearchDataForm />}
      />
    </S.Container>
  );
}

export default Chat;
