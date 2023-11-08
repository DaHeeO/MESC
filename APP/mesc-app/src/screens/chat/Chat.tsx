import React, {useState, useEffect, useRef} from 'react';
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
import {useRecoilState} from 'recoil';
import {cardState} from '../../states/CardState';

// ChatMessage 타입 정의
interface ChatMessage {
  text: string;
}

interface AxiosResult {
  statusCode: number;
  message: string;
  data: {
    blockId: number;
    isPossible: string;
    cardList: {
      cardId: number;
      cardType: string;
      content: string;
      message: string;
    }[];
    dcbList: number[];
  };
}

interface Card {
  cardId: number;
  cardName?: string;
  content: string | null;
  cardType: string;
  labels?: LabelItem[];
  table?: TableData;
  button?: ButtonItem[];
}

type LabelItem = {
  name: string;
  labelType: string;
  query: string;
};

type TableData = {
  columnNameList: string[];
  columnTypeList: string[];
  rowList: string[][];
};

type ButtonItem = {
  id: number;
  name: string;
  linkType: string;
  link: string;
  iconId?: any | null;
  response: string;
};

function Chat() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]); // State to store chat messages
  const chatLayoutRef = useRef<ScrollView | null>(null); // Ref for the ScrollView
  const [axiosResult, setAxiosResult] = useState<AxiosResult>(); // State to store axios result
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 상태 추가
  const [card, setCard] = useRecoilState(cardState);

  // 모달을 여는 함수
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 모달을 닫는 함수
  const hideModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Whenever chatMessages change, scroll to the bottom
    scrollToBottom();
  }, [chatMessages]);

  // cardState가 변경될 때만 메시지를 추가하는 useEffect
  useEffect(() => {
    // card 상태가 바뀌고, 유효한 TX 메시지를 가지고 있는 경우에만 채팅 메시지를 추가합니다.
    // 여기에서 card.content가 null인지 확인합니다.
    if (card?.cardType === 'TX' && card.content) {
      // null이 아닌 경우에만 addChatMessage를 호출합니다.
      console.log('22222222222222222');
      addChatMessage(card.content);
    }
  }, [card]);

  const handleDataBoxPress = () => {
    // 데이터 조회 버튼이 클릭되었을 때 처리할 로직
    // Axios 요청을 설정합니다.
    console.log('1111111111111111111');
    addChatMessage('데이터 조회');
    customAxios
      .post('/block/3', {})
      .then(response => {
        console.log('Data retrieved:', response.data);
        const txCard = response.data.data.cardList.find(
          (card: Card) => card.cardType === 'TX',
        );
        if (txCard) {
          setCard(txCard); // recoil에 카드 정보 저장
        } else {
          console.log('No TX type card found');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleLogBoxPress = () => {
    // 로그 보기 버튼이 클릭되었을 때 처리할 로직
    addChatMessage('로그 보기');
  };

  const addChatMessage = (message: string) => {
    console.log('message:', message);
    if (!message) return;

    // 마지막 메시지와 현재 추가하려는 메시지가 같은지 비교합니다.
    const isSameAsLastMessage =
      chatMessages.length > 0 &&
      chatMessages[chatMessages.length - 1].text === message;

    console.log('isSameAsLastMessage:', isSameAsLastMessage);
    // 만약 메시지가 마지막 메시지와 같지 않다면, 새 메시지를 추가합니다.
    if (!isSameAsLastMessage) {
      setChatMessages(prevMessages => [...prevMessages, {text: message}]);
    }
  };

  const addInputMessage = (message: string) => {
    console.log('message:', message);
    if (!message) return;
    // 대문자로 변환된 메시지
    const upperCaseMessage = message.toUpperCase();
    console.log('upperCaseMessage:', upperCaseMessage);

    // 마지막 메시지와 현재 추가하려는 메시지가 같은지 비교합니다.
    const isSameAsLastMessage =
      chatMessages.length > 0 &&
      chatMessages[chatMessages.length - 1].text === upperCaseMessage;
    console.log('isSameAsLastMessage:', isSameAsLastMessage);
    // 만약 메시지가 마지막 메시지와 같지 않다면, 새 메시지를 추가합니다.
    if (!isSameAsLastMessage) {
      setChatMessages(prevMessages => [
        ...prevMessages,
        {text: upperCaseMessage},
      ]);
      console.log('33333333333333333333');
    }
  };

  const scrollToBottom = () => {
    chatLayoutRef.current?.scrollToEnd({animated: true});
  };

  // 모달을 결정하는 함수
  const ModalForm = ModalIdSwitch({modalId: 'RF'});
  // 아이콘을 결정하는 함수
  const IconForm = IconSwitch({iconId: 1});

  //지문인식//

  return (
    <S.Container>
      <Header />
      {/* 챗봇 메세지 보이는 화면 */}
      <S.ChatLayout>
        <ScrollView
          ref={chatLayoutRef}
          showsVerticalScrollIndicator={false}
          // style={{backgroundColor: 'aqua'}}
        >
          <ChatbotProfile />
          <ChatbotMessage
            context={`안녕하세요! HIHI님\n무엇을 도와드릴까요?\n아래 버튼\n작업을 선택해주세요!`}
          />
          {/* 챗봇 시작하기 박스 컴포넌트 */}
          <ChatbotStartBoxTwo
            handleDataBoxPress={handleDataBoxPress}
            handleLogBoxPress={handleLogBoxPress}
            title="시작하기"
            middleText="아래 버튼을 선택하세요"
            optionText1="데이터 조회"
            optionText2="로그 보기"
          />
          {chatMessages.map((message, index) => (
            <View key={index}>
              <UserMessage message={message.text} />
              <ChatbotProfile />
              {message.text === '데이터 조회' && card?.content && (
                <ChatbotMessage context={card.content} />
              )}
              {message.text.startsWith('SELECT') && (
                <ChatbotMessage context={`아래는 selet문입니다`} />
              )}
              {(message.text.startsWith('INSERT') ||
                message.text.startsWith('UPDATE') ||
                message.text.startsWith('DELETE')) && (
                <>
                  <ChatbotMessage context={`아래는 데이터 조작문입니다`} />
                  <ChatbotMessage context={`${axiosResult?.message}`} />
                </>
              )}
            </View>
          ))}
          {/* <ChatChooseSection1 /> */}
          <ChatChooseSection2 />
        </ScrollView>
      </S.ChatLayout>
      <AboutBottomSheetModal
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
      />
      {isModalVisible ? null : (
        <ChatInput
          onSendMessage={addChatMessage}
          onAxiosResult={result => setAxiosResult(result)}
        />
      )}
      {/* 모달 삽입 위치 */}
    </S.Container>
  );
}

export default Chat;
