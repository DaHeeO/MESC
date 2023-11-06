import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import ChatbotStartBox from '../../components/chat/ChatbotStartBox';
import Report from '../messages/Report';
import {AboutBottomSheetModal} from '../../components/common/bottomSheet/AboutBottomModal';
import {ConditionForm} from '../../components/message/Condition/ConditionForm';
import LogLevelForm from '../../components/chat/log/LogLevelForm';

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
        <ScrollView ref={chatLayoutRef} showsVerticalScrollIndicator={false}>
          <ChatbotProfile />
          <S.MescContainer>
            <View style={{marginLeft: 10, marginTop: 5, marginBottom: 5}}>
              <Text
                style={{fontSize: 14, textAlign: 'left', fontWeight: 'bold'}}>
                안녕하세요! 000님{'\n'}무엇을 도와드릴까요?? 아래 버튼을 눌러
                {'\n'}원하시는 작업을 선택하세요!!
              </Text>
            </View>
          </S.MescContainer>
          {/* 챗봇 시작하기 박스 컴포넌트 */}
          <ChatbotStartBox
            handleDataBoxPress={handleDataBoxPress}
            handleLogBoxPress={handleLogBoxPress}
          />
          {chatMessages.map((message, index) => (
            <View key={index}>
              <S.TextBox>
                <Text style={{fontSize: 14, textAlign: 'left', color: 'white'}}>
                  {message.text}
                </Text>
              </S.TextBox>
              <ChatbotProfile />
              {message.text === '데이터 조회' && (
                <S.MescContainer>
                  <View style={{marginLeft: 10, marginTop: 5, marginBottom: 5}}>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: 'left',
                        fontWeight: 'bold',
                      }}>
                      아래의 <Text>[입력창]</Text>을 통해{'\n'}원하는 [쿼리문]을
                      작성해주세요.
                    </Text>
                  </View>
                </S.MescContainer>
              )}
            </View>
          ))}
        </ScrollView>
      </S.ChatLayout>
      <AboutBottomSheetModal
        btnTitle={'bottomSheet예시'}
        modalHeight={'70%'}
        modalBreakPoint={'25%'}
        component={<ConditionForm />}
      />
      <AboutBottomSheetModal
        btnTitle={'로그레벨'}
        modalHeight={'60%'}
        modalBreakPoint={'10%'}
        component={<LogLevelForm />}
      />
      <ChatInput onSendMessage={addChatMessage} />
      {/* 모달 삽입 위치 */}
    </S.Container>
  );
}

export default Chat;
