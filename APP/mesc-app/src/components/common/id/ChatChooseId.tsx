import React from 'react';
// icon
import Home from '../../../assets/icons/homeIcon.svg';
import Report from '../../../assets/icons/reportIcon.svg';
import DataControll from '../../../assets/icons/dbIcon.svg';
import Filter from '../../../assets/icons/filterIcon.svg';
import {AboutChatBtn} from '../../message/Btn/ChatChooseBtn';
//recoil
import {useRecoilState} from 'recoil';
import {ConditionModifyState} from '../../../states/BottomSheetState';

interface chatBtnprops {
  onPress: () => any;
}

export const GoStartChat = () => {
  return <AboutChatBtn btnTitle={'처음으로'} icon={<Home />} />;
};

export const GoReport = () => {
  return <AboutChatBtn btnTitle={'보고하기'} icon={<Report />} />;
};

export const GoDataControll = () => {
  return <AboutChatBtn btnTitle={'데이터 조작'} icon={<DataControll />} />;
};

export const ConditionModify = (props: chatBtnprops) => {
  const [openCoditionForm, setOpenCoditionForm] =
    useRecoilState(ConditionModifyState);
  return (
    <AboutChatBtn
      bordercolor="1px solid black"
      height="35px"
      btnTitle={'조건변경'}
      icon={<Filter />}
      onPress={() => {
        props.onPress();
      }}
    />
  );
};
