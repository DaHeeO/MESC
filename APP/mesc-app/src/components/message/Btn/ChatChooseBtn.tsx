import React from 'react';
import {Text} from 'react-native';
import {BtnContainer, ChooseBtnBody} from './ChatChooseBtnStyle';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import {useRecoilState} from 'recoil';
import {getBlock} from '../../../../Api';
import {BlockResponseData} from '../../../states/BlockResponseState';
import UserMessage from '../../chat/UserMessage';
import {BlockType} from '../../../const/constants';
import {getUserRole} from '../../../../Api';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {modalIdState} from '../../../states/ModalIdState';
import {set} from 'lodash';

interface ChatBtnProps {
  btnTitle: string;
  height?: string;
  width?: string;
  icon?: React.ReactNode;
  bordercolor?: string;
  onPress?: () => void;
  backgroundColor?: string;
}

export const AboutChatBtn = (props: ChatBtnProps) => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

  // 모달 상태여부
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);

  // 모달 종류
  const [modalId, setModalId] = useRecoilState(modalIdState);

  async function handle() {
    let blockId = 0;

    setChatbotHistory(prev => [
      ...prev,
      <UserMessage message={props.btnTitle} />,
    ]);

    if (props.btnTitle === '처음으로') {
      // 개발자인지, 작업자인지 구분해야함
      blockId = await getRoleBlockId();
    } else if (props.btnTitle === '보고하기') {
      blockId = BlockType.Report;
    } else if (props.btnTitle === '데이터 조작') {
      blockId = BlockType.QueryInput;
    }
    putBlockToRecoil(blockId);

    if (props.btnTitle == '보고하기') {
      setIsModalVisible(true);
      setModalId('RF');
    }
  }

  const putBlockToRecoil = async (blockId: number) => {
    const newBlock = await getBlock(blockId, {});
    if (newBlock) setBlock(newBlock);
  };

  const getRoleBlockId = async () => {
    const roleType = await getUserRole();
    if (roleType === 'DEVELOPER') {
      return BlockType.DEVELOPER;
    }
    return BlockType.WORKER;
  };

  // onPress 가 지금 props. 으로 안되어있는데 혹시 문제 있으면 확인하기

  return (
    /* bottomSheet를 띄우기 위한 Btn */
    <ChooseBtnBody
      height={props.height}
      width={props.width}
      border={props.bordercolor}
      onPress={props.onPress ? props.onPress : handle}>
      {/* icon 자리 */}
      <BtnContainer width="25px">
        {/* ';아이콘 넘기 */}
        {props.icon}
      </BtnContainer>
      {/* 버튼 내용 자리 */}
      <BtnContainer width="70px">
        <Text style={{color: '#323639'}}>{props.btnTitle}</Text>
      </BtnContainer>
    </ChooseBtnBody>
  );
};
