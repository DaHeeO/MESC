import React, {useState} from 'react';
import {Text} from 'react-native';
import * as S from './ChatbotStartBoxOne.styles';
import RobotIcon2 from '../../assets/images/RobotIcon2.png';
import ChatbotOptionBox from './ChatbotOptionBox';
import {useRecoilState} from 'recoil';
import {Card} from '../../states/CardState';
import {ChatbotHistoryState} from '../../states/ChatbotHistoryState';
import Usermessage from './UserMessage';
import {AboutBottomSheetModal} from '../common/bottomSheet/AboutBottomModal';
import SearchDataForm from '../../components/chat/data/SearchDataForm';
import {getBlock} from '../../../Api';
import {BlockResponseData} from '../../states/BlockResponseState';

interface ChatbotStartBoxOneProps {
  handleDataBoxPress: () => void;
  title: string;
  middleText: string;
  optionText1: string;
}

export const ChatbotStartBoxOne = (props: {card: Card}) => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  const {card} = props;
  let buttonName: any;
  if (card.button !== undefined && card.button !== null) {
    buttonName = card.button[0].name;
  }

  const handleButtonPress = (buttonIndex: number) => {
    const button = card.button?.[buttonIndex];
    if (button?.link) {
      const link = parseInt(button.link);
      if (!isNaN(link)) {
        setChatbotHistory(prev => [
          ...prev,
          <Usermessage message={button.name} />,
        ]);
        putBlockToRecoil(link);

        if (buttonIndex === 0) {
          setModalVisible(true);
        }
      }
    }
  };

  const putBlockToRecoil = async (blockId: number) => {
    const newBlock = await getBlock(blockId, {});
    setBlock(newBlock);
  };

  const hideBottomSheetModal = () => {
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
        <ChatbotOptionBox
          handleOptionPress={() => handleButtonPress(0)}
          optionTitle={buttonName}
        />
      </S.BottomBox>
      {isModalVisible && (
        <AboutBottomSheetModal
          btnTitle="모달 버튼"
          modalHeight="50%"
          modalBreakPoint="25%"
          component={<SearchDataForm />} // 모달에 표시할 컴포넌트
          onModalHide={hideBottomSheetModal}
        />
      )}
    </S.ChatbotBox>
  );
};

export default ChatbotStartBoxOne;
