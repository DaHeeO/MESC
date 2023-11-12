import React from 'react';
import {Text} from 'react-native';
import {BtnContainer, ChooseBtnBody} from './ChatChooseBtnStyle';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import {useRecoilState} from 'recoil';
import {getBlock} from '../../../../Api';
import {BlockResponseData} from '../../../states/BlockResponseState';
import UserMessage from '../../chat/UserMessage';

interface ChatBtnProps {
  btnTitle: string;
  height?: string;
  icon?: React.ReactNode;
  bordercolor?: string;
  onPress?: () => void;
}

export const AboutChatBtn = (props: ChatBtnProps) => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

  async function handle() {
    let blockId = 0;

    setChatbotHistory(prev => [
      ...prev,
      <UserMessage message={props.btnTitle} />,
    ]);

    if (props.btnTitle === '처음으로') {
      // 개발자인지, 작업자인지 구분해야함
      blockId = 12;
    } else if (props.btnTitle === '보고하기') {
      blockId = 6;
    } else if (props.btnTitle === 'DB 조작') {
      blockId = 7;
    }
    putBlockToRecoil(blockId);
  }

  const putBlockToRecoil = async (blockId: number) => {
    const newBlock = await getBlock(blockId, {});
    if (newBlock) setBlock(newBlock);
  };

  return (
    /* bottomSheet를 띄우기 위한 Btn */
    <ChooseBtnBody
      height={props.height}
      border={props.bordercolor}
      onPress={props.onPress}>
      {/* icon 자리 */}
      <BtnContainer width="25%" /* style={{backgroundColor: 'pink'}} */>
        {/* ';아이콘 넘기 */}
        {props.icon}
      </BtnContainer>
      {/* 버튼 내용 자리 */}
      <BtnContainer width="65%" /* style={{backgroundColor: 'skyblue'}} */>
        <Text style={{color: 'gray'}}>{props.btnTitle}</Text>
      </BtnContainer>
    </ChooseBtnBody>
  );
};
