import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import * as S from './ChatbotStartBoxTwo.styles';
import RobotIcon2 from '../../assets/images/RobotIcon2.png';
import ChatbotOptionBox from './ChatbotOptionBox';
import {useRecoilValue, useRecoilState} from 'recoil';
import {cardState} from '../../states/CardState';
import {Card} from '../../states/CardState';
import {BlockIdState} from '../../states/BlockIdState';
import {set} from 'lodash';

interface ChatbotStartBoxTwoProps {
  handleDataBoxPress: () => void;
  handleLogBoxPress: () => void;
}

export const ChatbotStartBoxTwo = (props: {card: Card}) => {
  const [blockId, setBlockId] = useRecoilState(BlockIdState);
  const [isModalVisible, setModalVisible] = useState(false);
  const {card} = props;
  let buttonName0;
  let buttonName1;
  if (card.button !== undefined && card.button !== null) {
    buttonName0 = card.button[0].name;
    buttonName1 = card.button[1].name;
  }
  const test1 = () => {
    console.log('1번');
    if (card.button?.[0]?.link) {
      // link가 undefined가 아닌 경우에만 parseInt 호출
      const link = parseInt(card.button[0].link);
      if (!isNaN(link)) {
        setBlockId(link);
        setModalVisible(true);
        console.log('link', link);
      }
    }
  };

  const test2 = () => {
    console.log('2번');
    if (card.button?.[1]?.link) {
      // link가 undefined가 아닌 경우에만 parseInt를 호출합니다.
      const link = parseInt(card.button[1].link);
      if (!isNaN(link)) {
        setBlockId(link);
        setModalVisible(true);
        console.log('link', link);
      }
    }
  };

  const hideModal = () => {
    setModalVisible(false); // 모달을 숨기도록 상태를 설정합니다.
  };

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
        <ChatbotOptionBox handleOptionPress={test1} optionTitle={buttonName0} />
        <ChatbotOptionBox handleOptionPress={test2} optionTitle={buttonName1} />
      </S.BottomBox>
    </S.ChatbotBox>
  );
};

export default ChatbotStartBoxTwo;
