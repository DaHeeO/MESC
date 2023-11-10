import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import ChatbotStartBox from '../../components/chat/ChatbotStartBoxOne';
import ChatbotStartBoxTwo from '../../components/chat/ChatbotStartBoxTwo';
import ChatbotMessage from '../../components/chat/ChatbotMessage';
import UserMessage from '../../components/chat/UserMessage';
import {AboutBottomSheetModal} from '../../components/common/bottomSheet/AboutBottomModal';
import {ConditionForm} from '../../components/message/Condition/ConditionForm';
import {handleFingerPrint} from '../../components/figerprint/FingerPrint';
import axios from 'axios';
import LogLevelForm from '../../components/chat/log/LogLevelForm';
import {ModalIdSwitch} from '../../components/common/ModalId';
import {IconSwitch} from '../../components/common/ChatIcon';
import {ChatChooseSection1} from '../../components/message/Btn/ChatChooseSection1';
import {ChatChooseSection2} from '../../components/message/Btn/ChatChooseSection2';
import SearchDataForm from '../../components/chat/data/SearchDataForm';
import {customAxios} from '../../../Api';
import {useRecoilState, useRecoilValue} from 'recoil';
import {cardState} from '../../states/CardState';
import {ChatComponentIdSwitch} from './ComponentId';
import {AboutContainer} from '../../components/common/about/AboutContainer';
import {ChatbotHistoryState} from '../../states/BlockState';
import {set} from 'lodash';
import {Card} from '../../states/CardState';
import {BlockIdState} from '../../states/BlockIdState';
import {UserMessageState} from '../../states/UserMessageState';

interface BlockProps {
  blockId: number;
  cardList: Card[];
  isPossible: boolean;
  section: number;
}

function Chat() {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  const [blockId, setBlockId] = useRecoilState(BlockIdState);
  // const [userMessage, setUserMessage] = useRecoilState(UserMessageState);

  const chatLayoutRef = useRef<ScrollView | null>(null); // Ref for the ScrollView

  useEffect(() => {
    setBlockId(12);
  }, []);

  useEffect(() => {
    // console.log('blockId', blockId);
    customAxios
      .post(`block/${blockId}`, {})
      .then(response => {
        const data = response.data.data;
        // console.log(data.cardList);

        const chatbotBlock = makeChatbotBlock(data);
        setChatbotHistory(prev => [...prev, chatbotBlock]);
        // console.log('chatbotHistory', chatbotHistory);
      })
      .catch(error => {
        console.log(error);
      });
  }, [blockId]);

  const makeChatbotBlock = useCallback((props: BlockProps) => {
    // section 값에 따라 조건부 렌더링을 위한 변수
    let buttonComponent;
    if (props.section === 1) {
      buttonComponent = <ChatChooseSection1 />;
    } else if (props.section === 2) {
      buttonComponent = <ChatChooseSection2 />;
    }

    // cardList를 순회하면서 각 cardType에 따른 컴포넌트를 렌더링
    const cardComponents = props.cardList.map((card, index) => (
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

  return (
    <S.Container>
      <Header />
      <S.ChatLayout>
        <ScrollView ref={chatLayoutRef} showsVerticalScrollIndicator={false}>
          {chatbotHistory.map((component, index) => (
            // chatbotHistory 배열을 순회하며 컴포넌트 렌더링
            <View key={index}>{component}</View>
          ))}
          {/* <UserMessage message={userMessage} /> */}
          <ChatChooseSection1 />
        </ScrollView>
      </S.ChatLayout>
      <ChatInput />
      {/* <AboutBottomSheetModal
        btnTitle={'bottomSheet예시'}
        modalHeight={'70%'}
        modalBreakPoint={'30%'}
        component={ModalForm}
        onModalShow={showModal}
        onModalHide={hideModal}
      />
      <AboutBottomSheetModal
        btnTitle={'로그레벨'}
        modalHeight={'60%'}
        modalBreakPoint={'30%'}
        component={<LogLevelForm />}
        onModalShow={showModal}
        onModalHide={hideModal}
      />
      <AboutBottomSheetModal
        btnTitle={'데이터조회'}
        modalHeight={'70%'}
        modalBreakPoint={'30%'}
        component={<SearchDataForm />}
        // onModalShow={showModal}
        // onModalHide={hideModal}
      />*/}
      {/* {isModalVisible ? null : (
        <ChatInput
          onSendMessage={addChatMessage}
          onAxiosResult={result => setAxiosResult(result)}
        />
      )} */}
      {/* 모달 삽입 위치 */}
    </S.Container>
  );
}

export default Chat;
