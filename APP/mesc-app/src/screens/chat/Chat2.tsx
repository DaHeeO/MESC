import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import * as S from './Chat.styles';
// Components
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import {ModalIdSwitch} from '../../components/common/id/ModalId';
import {ChatChooseSection1} from '../../components/message/Btn/ChatChooseSection1';
import {ChatChooseSection2} from '../../components/message/Btn/ChatChooseSection2';
import SearchDataForm from '../../components/chat/data/SearchDataForm';
import {customAxios, getBlock, getUserRole} from '../../../Api';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ChatbotHistoryState} from '../../states/ChatbotHistoryState';
import {BlockResponseData} from '../../states/BlockResponseState';
import {InputState} from '../../states/InputState';
import {BlockType} from '../../const/constants';
// Switch
import {ChatComponentIdSwitch} from './ComponentId';
// BottomSheet 모달
import {BottomSheet} from '../../components/common/bottomSheet/BottomSheetModal1';
import {ConditionModifyState} from '../../states/BottomSheetState';
import {modalIdState} from '../../states/ModalIdState';
import {AboutBottomSheetModal} from '../../components/common/bottomSheet/AboutBottomModal';

function Chat() {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  const [block, setBlock] = useRecoilState(BlockResponseData);

  const [inputState, setInputState] = useRecoilState(InputState);

  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState); // 해당 모달State값 넣기
  const modalId = useRecoilValue(modalIdState);
  const realModalId = ModalIdSwitch({modalId});

  const [buttonComponent, setButtonComponent] =
    useState<React.JSX.Element | null>(null);

  const chatLayoutRef = useRef<ScrollView | null>(null); // Ref for the ScrollView

  useEffect(() => {
    putStartBlockToRecoil();
  }, []);

  useEffect(() => {
    console.log(block);

    if (block.blockId === 0) return;
    const chatbotBlock = makeChatbotBlock(block);
    setChatbotHistory(prev => [...prev, chatbotBlock]);
  }, [block]);

  const makeChatbotBlock = (data: any) => {
    let newButtonComponent = <ChatChooseSection1 />;
    if (data.section === 1) {
      newButtonComponent = <ChatChooseSection1 />;
    } else if (data.section === 2) {
      newButtonComponent = <ChatChooseSection2 />;
    }
    setButtonComponent(newButtonComponent);
    // setInputState(data.isPossible);
    // setInputState(true);

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
  };

  // chatbotHistory 변경될 때마다 스크롤
  useLayoutEffect(() => {
    scrollToBottom();
  }, [chatbotHistory, buttonComponent]);

  const scrollToBottom = () => {
    setTimeout(() => {
      chatLayoutRef.current?.scrollToEnd({animated: true});
    }, 10);
  };

  const putStartBlockToRecoil = async () => {
    const role = await getRoleBlockId();
    const newBlock = await getBlock(role, {});
    if (newBlock) setBlock(newBlock);
  };

  const getRoleBlockId = async () => {
    const roleType = await getUserRole();
    if (roleType === 'DEVELOPER') {
      return BlockType.DEVELOPER;
    }
    return BlockType.WORKER;
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

      <BottomSheet
        isModalVisible={isModalVisible} // 여기도 stateID값을 받을 수 있도록 해야함
        modalHeight={'70%'}
        modalBreakPoint={'20%'}
        component={realModalId} // 여기를 ID값을 받을 수 있도록
      />
      <ChatInput />
      {/* <AboutBottomSheetModal
        btnTitle={'데이터조회'}
        modalHeight={'70%'}
        modalBreakPoint={'30%'}
        component={<SearchDataForm />}
      /> */}
    </S.Container>
  );
}

export default Chat;
