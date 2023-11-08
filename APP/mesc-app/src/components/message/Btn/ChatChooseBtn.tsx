import React from 'react';
import {Text} from 'react-native';
import {BtnContainer, ChooseBtnBody} from './ChatChooseBtnStyle';

interface ChatBtnProps {
  btnTitle: string;
  // iconId: number;
  icon?: React.ReactNode;
}

export const AboutChatBtn = (props: ChatBtnProps) => {
  return (
    /* bottomSheet를 띄우기 위한 Btn */
    <ChooseBtnBody>
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
        <Text>{props.btnTitle}</Text>
      </BtnContainer>
    </ChooseBtnBody>
  );
};
