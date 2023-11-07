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
import LogLevelForm from '../../components/chat/log/LogLevelForm';
import {ModalIdSwitch} from '../../components/common/ModalId';
import {IconSwitch} from '../../components/common/ChatIcon';
import {
  ConditionModify,
  GoDataControll,
  GoReport,
  GoStartChat,
} from '../../components/common/ChatChooseId';

// ChatMessage 타입 정의
interface ChatMessage {
  text: string;
}

function Chat() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]); // State to store chat messages
  const chatLayoutRef = useRef<ScrollView | null>(null); // Ref for the ScrollView
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 상태 추가

  // 모달을 여는 함수
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 모달을 닫는 함수
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const addChatMessage = (message: string) => {
    setChatMessages(prevMessages => [...prevMessages, {text: message}]);
  };

  const scrollToBottom = () => {
    chatLayoutRef.current?.scrollToEnd({animated: true});
  };

  // 모달을 결정하는 함수
  const ModalForm = ModalIdSwitch({modalId: 'RF'});
  // 아이콘을 결정하는 함수
  const IconForm = IconSwitch({iconId: 1});

  useEffect(() => {
    // Whenever chatMessages change, scroll to the bottom
    scrollToBottom();
  }, [chatMessages]);

  const handleDataBoxPress = () => {
    // 데이터 조회 버튼이 클릭되었을 때 처리할 로직
    addChatMessage('데이터 조회');
  };

  const handleLogBoxPress = () => {
    // 로그 보기 버튼이 클릭되었을 때 처리할 로직
    addChatMessage('로그 보기');
  };

  return (
    <S.Container>
      <Header />
      {/* 챗봇 메세지 보이는 화면 */}
      <S.ChatLayout>
        <ScrollView ref={chatLayoutRef} showsVerticalScrollIndicator={false}>
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
              {message.text === '데이터 조회' && (
                <ChatbotMessage
                  context={`아래의 [입력창]을 통해\n원하는 [쿼리문]을 작성해주세요.`}
                />
              )}
            </View>
          ))}
        </ScrollView>
      </S.ChatLayout>
      <GoStartChat />
      <GoReport />
      <GoDataControll />
      <ConditionModify />
      <AboutBottomSheetModal
        btnTitle={'bottomSheet예시'}
        modalHeight={'70%'}
        modalBreakPoint={'25%'}
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
      {isModalVisible ? null : <ChatInput onSendMessage={addChatMessage} />}
      {/* 모달 삽입 위치 */}
    </S.Container>
  );
}

export default Chat;
