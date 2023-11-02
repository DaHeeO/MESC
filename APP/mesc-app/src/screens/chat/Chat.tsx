import React from 'react';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/chatHeader';
import ChatbotProfile from '../../components/chat/chatbotProfileComponent';

function Chat() {
  return (
    <S.Container>
      <Header />
      <ChatbotProfile />
    </S.Container>
  );
}

export default Chat;
