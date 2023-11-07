import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as S from './ChatbotStartBoxOne.styles';
import RobotIcon2 from '../../assets/images/RobotIcon2.png';
import ChatbotOptionBox from './ChatbotOptionBox';

interface ChatbotStartBoxOneProps {
  handleDataBoxPress: () => void;
  title: string;
  middleText: string;
  optionText1: string;
}

function ChatbotStartBoxOne({
  handleDataBoxPress,
  title,
  middleText,
  optionText1,
}: ChatbotStartBoxOneProps) {
  return (
    <S.ChatbotBox>
      <S.TopBox>
        <S.NameBox>
          {/* 챗봇이미지 옆에 글자 들어갈곳 */}
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginTop: 20,
            }}>
            {title}
          </Text>
        </S.NameBox>
        <S.ImgBox>
          <S.Img source={RobotIcon2}></S.Img>
        </S.ImgBox>
      </S.TopBox>
      <S.MidBox>
        <Text style={{fontWeight: 'bold', color: 'black'}}>{middleText}</Text>
      </S.MidBox>
      <S.BottomBox>
        {/* 챗봇 시작화면 옵션 선택 */}
        <ChatbotOptionBox
          handleOptionPress={handleDataBoxPress}
          optionTitle={optionText1}
        />
      </S.BottomBox>
    </S.ChatbotBox>
  );
}

export default ChatbotStartBoxOne;
