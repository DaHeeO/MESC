import React from 'react';
import * as S from './Log.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import ChatbotStartBox from '../../components/chat/ChatbotStartBoxTwo';

function Chat() {
  return (
    <S.Container>
      <Header />
      <ChatbotProfile />
      <ChatInput />
    </S.Container>
  );
}

export default Chat;
