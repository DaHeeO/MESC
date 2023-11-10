import React from 'react';
import {Text} from 'react-native';
import {BtnContainer, ChooseBtnBody} from './ChatChooseBtnStyle';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import {useRecoilState} from 'recoil';
import {getBlock} from '../../../../Api';
import {BlockResponseData} from '../../../states/BlockResponseState';

interface ChatBtnProps {
  btnTitle: string;
  // iconId: number;
  icon?: React.ReactNode;
}

export const AboutChatBtn = (props: ChatBtnProps) => {
  const [block, setBlock] = useRecoilState(BlockResponseData);

  async function handle() {
    let blockId = 0;

    if (props.btnTitle === '처음으로') {
      // 개발자인지, 작업자인지 구분해야함
      blockId = 12;
    } else if (props.btnTitle === '보고하기') {
      blockId = 6;
    } else if (props.btnTitle === '데이터 조작') {
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
    <ChooseBtnBody onPress={handle}>
      {/* icon 자리 */}
      <BtnContainer
        width="25%"
        // style={{backgroundColor: 'pink'}}
      >
        {/* ';아이콘 넘기 */}
        {props.icon}
      </BtnContainer>
      {/* 버튼 내용 자리 */}
      <BtnContainer
        width="65%"
        // style={{backgroundColor: 'skyblue'}}
      >
        <Text style={{color: 'grey'}}>{props.btnTitle}</Text>
      </BtnContainer>
    </ChooseBtnBody>
  );
};
