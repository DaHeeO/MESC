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

interface BlockProps {
  cardList: Card[];
  isPossible: boolean;
  section: number;
}

function Chat() {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

  const role = 12; // 11: 작업자, 12: 개발자

  const render1 = useCallback((props: BlockProps) => {
    const sectionId = props.section;
    // console.log('asdfafd', props.cardList);

    const renderComponents: any = [];

    props.cardList.map((card: any) => {
      // console.log('여기와?');
      const value = ChatComponentIdSwitch(card);
      renderComponents.push(value);

      // ChatComponentIdSwitch(card.cardType);
    });

    return (
      <>
        <ChatbotProfile />
        {renderComponents.map((component: any) => component)}
        {sectionId == 0 ? (
          <></>
        ) : sectionId == 1 ? (
          <ChatChooseSection1 />
        ) : (
          <ChatChooseSection2 />
        )}
      </>
    );
  }, []);

  useEffect(() => {
    customAxios
      .post(`block/${role}`, {})
      .then(response => {
        const data = response.data.data;
        console.log(data.cardList);
        data.cardList.map((card: any) => {
          console.log(card);
        });
        // chatbotHistory.push(data);
        // setChatbotHistory(prev => [...prev, data]);
        const rr = render1(data);
        setChatbotHistory(prev => [...prev, rr]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(chatbotHistory);

  return (
    <S.Container>
      <Header />
      {/* 챗봇 메세지 보이는 화면 */}
      {/* <ChatbotStartBoxTwo
        handleDataBoxPress={function (): void {
          throw new Error('Function not implemented.');
        }}
        handleLogBoxPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      /> */}
      <S.ChatLayout>
        <ScrollView>
          <>{chatbotHistory[1]}</>
        </ScrollView>
      </S.ChatLayout>
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
        onModalShow={showModal}
        onModalHide={hideModal}
      /> */}
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
