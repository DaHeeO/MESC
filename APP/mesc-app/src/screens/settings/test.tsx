// React
import React, {useEffect, useCallback, useState} from 'react';
//Styled
import {ScrollView} from 'react-native';
import * as S from '../chat/Chat.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
// Components
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import {ChatChooseSection1} from '../../components/message/Btn/ChatChooseSection1';
import {ChatChooseSection2} from '../../components/message/Btn/ChatChooseSection2';
import {customAxios} from '../../../Api';
import {RecoilState, useRecoilState, useRecoilValue} from 'recoil';
import {ChatComponentIdSwitch} from '../chat/ComponentId';
import {ChatbotHistoryState} from '../../states/BlockState';
import {Card} from '../../states/CardState';
import DataComponent from '../../components/chat/data/DataComponent';
//BottomSheet
import {ModalIdSwitch} from '../../components/common/id/ModalId';
import {BottomSheet} from '../../components/common/bottomSheet/BottomSheetModal1';
import {ConditionModifyState} from '../../states/BottomSheetState';
import {ConditionForm} from '../../components/message/Condition/ConditionForm';
import {modalIdState} from '../../states/ModalIdState';

interface BlockProps {
  cardList: Card[];
  isPossible: boolean;
  section: number;
}

function Test() {
  // 원하는 모달 띄우기 (모달은 채팅 하단에 있음)
  const modalId = useRecoilValue(modalIdState);
  const realModalId = ModalIdSwitch({modalId});

  // const ModalState: RecoilState<string> = 'ConditionModifyState';

  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState); // 해당 모달State값 넣기

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

  // useEffect(() => {
  //   customAxios
  //     .post(`block/${role}`, {})
  //     .then(response => {
  //       const data = response.data.data;
  //       console.log(data.cardList);
  //       data.cardList.map((card: any) => {
  //         console.log(card);
  //       });

  //       const rr = render1(data);
  //       setChatbotHistory(prev => [...prev, rr]);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(chatbotHistory);

  return (
    <S.Container>
      <Header />
      {/* 챗봇 메세지 보이는 화면 */}
      <S.ChatLayout>
        <ScrollView>
          <>{chatbotHistory[1]}</>
          <DataComponent />
        </ScrollView>
        <BottomSheet
          isModalVisible={!isModalVisible} // 여기도 stateID값을 받을 수 있도록 해야함
          modalHeight={'70%'}
          modalBreakPoint={'20%'}
          component={`${realModalId}`} // 여기를 ID값을 받을 수 있도록
        />
      </S.ChatLayout>
    </S.Container>
  );
}

export default Test;
