import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheetComponent from '../../../components/common/bottomSheet/BottomSheet';
import LogLevelForm from './LogLevelForm';

// 이제 BottomSheetComponent에 필요한 props를 전달합니다.
export const LogLevelComponent = () => {
  // 필요한 데이터를 정의합니다.
  const data = {
    // 데이터 객체
  };

  // 필요한 props 값들
  const btnTitle = 'Open Log';
  const sheetTitle = 'Log Details';
  const component = (
    <View>
      {/* 여기에 BottomSheet 안에 표시할 컴포넌트를 넣습니다. */}
      <Text>Log Data</Text>
    </View>
  );

  return (
    <>
      <BottomSheetComponent
        width="20%"
        btnTitle="로그레벨"
        sheetTitle="로그레벨"
        component={<LogLevelForm />}
      />
    </>
  );
};

export default LogLevelComponent;
