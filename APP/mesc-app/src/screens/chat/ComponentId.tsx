import React, {useEffect} from 'react';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatbotMessage from '../../components/chat/ChatbotMessage';
import ChatbotStartBoxOne from '../../components/chat/ChatbotStartBoxOne';
import ChatbotStartBoxTwo from '../../components/chat/ChatbotStartBoxTwo';
import ChatbotOptionBox from '../../components/chat/ChatbotOptionBox';
import DataComponent from '../../components/chat/data/DataComponent';
import DataBox from '../../components/chat/data/DataBox';
import Label from '../../components/chat/data/Label';
import Query from '../../components/chat/data/Query';
import Table from '../../components/chat/data/Table';
import Log from '../../components/chat/log/Log';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {AboutBottomSheetModal} from '../../components/common/bottomSheet/AboutBottomModal';
import customAxios from '../../../Api';
import {useRecoilState} from 'recoil';
import {Card, cardState} from '../../states/CardState';
import QueryResultMessage from '../../components/chat/QueryResultMessage';

interface ChatComponentIdSwitchProps {
  chatComponentId?: string;
  context?: string | null;
  header?: string[];
  typeHeader?: string[];
  body?: string[];
  btnTitle?: string | undefined;
  modalHeight?: string | undefined;
  modalBreakPoint?: string | undefined;
  component?: React.ReactNode;
  handleDataBoxPress?: () => void;
  cardName?: string | undefined | null;
  middleText?: string | undefined;
  optionText1?: string | undefined | null;
  optionText2?: string | undefined | null;
}

export function ChatComponentIdSwitch(card: Card) {
  const cardType = card.cardType;

  switch (cardType) {
    case 'TX': // 텍스트
      return <ChatbotMessage card={card} />;

    case 'TA': // 데이터 조회 테이블
      return <DataComponent card={card} />;

    // case 'STA': // 단일 테이블
    //   return <Table header={[]} typeHeader={[]} body={[]} />;

    // case 'QTA': // 쿼리입력(SELECT)에 따른 테이블
    //   return <Table header={[]} typeHeader={[]} body={[]} />;
    case 'QU':
      return <Table header={[]} typeHeader={[]} body={[]} />;

    // case 'ML': // 데이터 조회 시 공정 리스트
    //   return (
    //     <AboutBottomSheetModal
    //       btnTitle={''}
    //       modalHeight={''}
    //       modalBreakPoint={''}
    //       component={undefined}
    //     />
    //   );

    // // case 'MC': // 테이블 조회 시 조건 변경 리스트
    // //   return < />;

    // case 'LO': // 로그
    //   return <Log />;

    // // case 'RE': // 보고 눌렀을 때 나오는 창
    // //   return < />;

    case 'QTX':
      return <QueryResultMessage card={card} />;

    case 'CH1': // 작업자 시작 화면
      return <ChatbotStartBoxOne card={card} />;

    case 'CH2': // 개발자 시작 화면
      return <ChatbotStartBoxTwo card={card} />;
  }
}
