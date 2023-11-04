import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as S from './ChatbotStartBox.styles';
import RobotIcon2 from '../../assets/images/RobotIcon2.png';

interface ChatbotStartBoxProps {
  handleDataBoxPress: () => void;
  handleLogBoxPress: () => void;
}

function ChatbotStartBox({
  handleDataBoxPress,
  handleLogBoxPress,
}: ChatbotStartBoxProps) {
  return (
    <S.ChatbotBox>
      <S.TopBox>
        <S.NameBox>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginTop: 20,
            }}>
            시작하기
          </Text>
        </S.NameBox>
        <S.ImgBox>
          <S.Img source={RobotIcon2}></S.Img>
        </S.ImgBox>
      </S.TopBox>
      <S.MidBox>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          아래 버튼을 선택해주세요.
        </Text>
      </S.MidBox>
      <S.BottomBox>
        <S.OptionBox>
          <S.DataBox onPress={handleDataBoxPress}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
              }}>
              데이터 조회
            </Text>
          </S.DataBox>
        </S.OptionBox>
        <S.OptionBox>
          <S.LogBox onPress={handleLogBoxPress}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
              }}>
              로그 보기
            </Text>
          </S.LogBox>
        </S.OptionBox>
      </S.BottomBox>
    </S.ChatbotBox>
  );
}

export default ChatbotStartBox;
