import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import * as S from './ChatbotStartBoxTwo.styles';
import RobotIcon2 from '../../assets/images/RobotIcon2.png';
import ChatbotOptionBox from './ChatbotOptionBox';
import {useRecoilValue} from 'recoil';
import {cardState} from '../../states/CardState';

interface ChatbotStartBoxTwoProps {
  handleDataBoxPress: () => void;
  handleLogBoxPress: () => void;
}

export const ChatbotStartBoxTwo = ({
  handleDataBoxPress,
  handleLogBoxPress,
}: ChatbotStartBoxTwoProps) => {
  const card = useRecoilValue(cardState);
  let buttonName0;
  let buttonName1;
  if (card.button !== undefined && card.button !== null) {
    buttonName0 = card.button[0].name;
    buttonName1 = card.button[1].name;
  }

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
            {card.cardName}
          </Text>
        </S.NameBox>
        <S.ImgBox>
          <S.Img source={RobotIcon2}></S.Img>
        </S.ImgBox>
      </S.TopBox>
      <S.MidBox>
        <Text style={{fontWeight: 'bold', color: 'black'}}>{card.content}</Text>
      </S.MidBox>
      <S.BottomBox>
        {/* 챗봇 시작화면 옵션 선택 */}
        <ChatbotOptionBox
          handleOptionPress={handleDataBoxPress}
          optionTitle={buttonName0}
        />
        <ChatbotOptionBox
          handleOptionPress={handleLogBoxPress}
          optionTitle={buttonName1}
        />
      </S.BottomBox>
    </S.ChatbotBox>
  );
};

export default ChatbotStartBoxTwo;
