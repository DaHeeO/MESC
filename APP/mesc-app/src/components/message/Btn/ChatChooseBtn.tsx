import React from 'react';
import {Text} from 'react-native';
import {BtnContainer, ChooseBtnBody} from './ChatChooseBtnStyle';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import {useRecoilState, useRecoilValue} from 'recoil';
import {set} from 'lodash';
import UserMessage from '../../chat/UserMessage';
import {getBlock} from '../../../../Api';
import {BlockResponseData} from '../../../states/BlockResponseState';

interface ChatBtnProps {
  btnTitle: string;
  // iconId: number;
  icon?: React.ReactNode;
}

export const AboutChatBtn = (props: ChatBtnProps) => {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

  const [block, setBlock] = useRecoilState(BlockResponseData);

  async function handle() {
    // 사용자 응답집어넣기
    setChatbotHistory(prev => [
      ...prev,
      <UserMessage message={props.btnTitle} />,
    ]);

    if (props.btnTitle === '처음으로') {
      console.log('처음으로');
    } else if (props.btnTitle === '보고하기') {
      console.log('보고하기');
    } else if (props.btnTitle === '데이터 조작') {
      console.log('데이터 조작');
      const response = await getBlock(7, {});
      console.log(response);

      setBlock(response);
    }
  }

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
