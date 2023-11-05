import React from 'react';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';

function Chat() {
  return (
    <S.Container>
      <Header />
      <ChatbotProfile />
    </S.Container>
  );
}

export default Chat;
