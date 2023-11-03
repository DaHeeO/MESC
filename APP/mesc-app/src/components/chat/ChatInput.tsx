import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import * as S from './ChatInput.styles';
import Header from '../../components/common/chatHeader/chatHeader';
import ChatbotProfile from '../../components/chat/chatbotProfileComponent';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';

function ChatInput() {
  const [value, onChangeText] = useState('');

  return (
    <S.ChatInput>
      <S.PlusBox>
        <Plus />
      </S.PlusBox>
      <S.InputBox>
        <TextInput
          placeholder="내용을 입력해주세요."
          onChangeText={text => onChangeText(text)}
          value={value}
          multiline={true}
          returnKeyType="go"
        />
      </S.InputBox>
      <S.SendBox>
        <Send />
      </S.SendBox>
    </S.ChatInput>
  );
}

export default ChatInput;
