import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import ChatbotStartBoxTwo from '../../components/chat/ChatbotStartBoxTwo';
import ChatbotMessage from '../../components/chat/ChatbotMessage';
import UserMessage from '../../components/chat/UserMessage';
import Report from '../messages/Report';

// ChatMessage 타입 정의
interface ChatMessage {
  text: string;
}

function Chat() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]); // State to store chat messages
  const chatLayoutRef = useRef<ScrollView | null>(null); // Ref for the ScrollView

  const addChatMessage = (message: string) => {
    setChatMessages(prevMessages => [...prevMessages, {text: message}]);
  };

  const scrollToBottom = () => {
    chatLayoutRef.current?.scrollToEnd({animated: true});
  };

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
        <ScrollView ref={chatLayoutRef}>
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
        <Report />
      </S.ChatLayout>
      <ChatInput onSendMessage={addChatMessage} />
      {/* 모달 삽입 위치 */}
    </S.Container>
  );
}

export default Chat;
