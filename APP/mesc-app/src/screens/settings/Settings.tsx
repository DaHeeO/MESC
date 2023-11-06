import BottomSheetComponent from '../../components/common/bottomSheet/BottomSheet';

import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import * as S from './Settings.styles';
import Header from '../../components/common/chatHeader/ChatHeader';
import Log from '../../components/chat/log/Log';

import {AboutBottomSheetModal} from '../../components/common/bottomSheet/AboutBottomModal';
import LogLevelForm from '../../components/chat/log/LogLevelForm';

function Settings() {
  return (
    <S.Container>
      <Header />
      {/* 챗봇 메세지 보이는 화면 */}
      <S.ChatLayout>
        <AboutBottomSheetModal
          btnTitle={'로그레벨'}
          modalHeight={'55%'}
          modalBreakPoint={'20%'}
          component={<LogLevelForm />}
        />
        <Log />
      </S.ChatLayout>
      {/* 모달 삽입 위치 */}
    </S.Container>
  );
}

export default Settings;
