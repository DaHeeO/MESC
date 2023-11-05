import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import * as S from './ChatInput.styles';
import Header from '../common/chatHeader/ChatHeader';
import ChatbotProfile from './ChatbotProfileComponent';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  contextWidth: number;
}

function ChatInput({onSendMessage, contextWidth}: ChatInputProps) {
  const [value, onChangeText] = useState('');

  const handleSendButtonPress = () => {
    if (value.trim() !== '') {
      onSendMessage(value); // 메시지를 부모 컴포넌트인 Chat로 전송
      console.log(value);
      onChangeText(''); // 입력 필드 지우기
    }
  };
  contextWidth = value.length * 10;

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
        <Send onPress={handleSendButtonPress} />
      </S.SendBox>
    </S.ChatInput>
  );
}

export default ChatInput;
