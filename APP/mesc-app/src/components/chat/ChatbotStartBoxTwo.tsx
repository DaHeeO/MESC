import React, {useState} from 'react';
import {Text} from 'react-native';
import * as S from './ChatbotStartBoxTwo.styles';
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
import {ConditionModifyState} from '../../states/BottomSheetState';
import {modalIdState} from '../../states/ModalIdState';
import {set} from 'lodash';

export const ChatbotStartBoxTwo = (props: {card: Card}) => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

  const [isModalPossible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);

  const [modalId, setModalId] = useRecoilState(modalIdState);

  const {card} = props;
  let buttonName0: any;
  let buttonName1: any;
  if (card.button !== undefined && card.button !== null) {
    buttonName0 = card.button[0].name;
    buttonName1 = card.button[1].name;
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
          setIsModalVisible(true);
          setModalId('SF');
        }
      }
    }
  };

  const putBlockToRecoil = async (blockId: number) => {
    const newBlock = await getBlock(blockId, {});
    console.log('============================');

    console.log('새로운블럭', newBlock);

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
          optionTitle={buttonName0}
        />
        <ChatbotOptionBox
          handleOptionPress={() => handleButtonPress(1)}
          optionTitle={buttonName1}
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

export default ChatbotStartBoxTwo;
