import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/chatHeader';
import ChatbotProfile from '../../components/chat/chatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';

function Chat() {
  const [message, setMessage] = useState('');

  return (
    <S.Container>
      <Header />
      <S.ChatLayout>
        <ChatbotProfile />
        <S.MescContainer>
          <Text>dsfaf</Text>
        </S.MescContainer>
      </S.ChatLayout>
      <ChatInput />
    </S.Container>
  );
}

export default Chat;
