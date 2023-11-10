import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as S from './ChatbotOptionBox.styles';

interface ChatbotOptionBoxProps {
  handleOptionPress: () => void;
  optionTitle: string | undefined;
}

function ChatbotOptionBox({
  handleOptionPress,
  optionTitle,
}: ChatbotOptionBoxProps) {
  return (
    <S.OptionBox>
      <S.DataBox onPress={handleOptionPress}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}>
          {optionTitle}
        </Text>
      </S.DataBox>
    </S.OptionBox>
  );
}

export default ChatbotOptionBox;
