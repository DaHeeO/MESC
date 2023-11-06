import BottomSheetComponent from '../../components/common/bottomSheet/BottomSheet';

import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import * as S from './Settings.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import ChatbotStartBox from '../../components/chat/ChatbotStartBox';
import Report from '../messages/Report';
import LogLevelComponent from '../../components/chat/log/LogLevelComponent';
import Log from '../../components/chat/log/Log';

function Settings() {
  return (
    <S.Container>
      <Header />
      {/* 챗봇 메세지 보이는 화면 */}
      <S.ChatLayout>
        {/* <LogLevelComponent /> */}
        <Log />
      </S.ChatLayout>
      {/* 모달 삽입 위치 */}
    </S.Container>
  );
}

export default Settings;
