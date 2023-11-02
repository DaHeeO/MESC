import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import * as S from './ChatInput.styles';
import Header from '../../components/common/chatHeader/chatHeader';
import ChatbotProfile from '../../components/chat/chatbotProfileComponent';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';

function ChatInput() {
  return (
    <S.ChatInput>
      <S.PlusBox>
        <Plus />
      </S.PlusBox>
      <S.InputBox placeholder="입력해주세요"></S.InputBox>
      <S.SendBox>
        <Send />
      </S.SendBox>
    </S.ChatInput>
  );
}

export default ChatInput;
