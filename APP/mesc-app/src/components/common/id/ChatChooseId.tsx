import React from 'react';
// icon
import Home from '../../../assets/icons/homeIcon.svg';
import Report from '../../../assets/icons/reportIcon.svg';
import DataControll from '../../../assets/icons/dbIcon.svg';
import Filter from '../../../assets/icons/filterIcon.svg';
import {AboutChatBtn} from '../../message/Btn/ChatChooseBtn';
import Close from '../../../assets/icons/close.svg';
//recoil
import {useRecoilState} from 'recoil';
import {ConditionModifyState} from '../../../states/BottomSheetState';

interface chatBtnprops {
  onPress: () => void;
}

export const GoStartChat = () => {
  return <AboutChatBtn btnTitle={'처음으로'} icon={<Home />} />;
};

export const GoReport = () => {
  return <AboutChatBtn btnTitle={'보고하기'} icon={<Report />} />;
};

export const GoDataControll = () => {
  return <AboutChatBtn btnTitle={'데이터조작'} icon={<DataControll />} />;
};

export const CloseModal = (props: chatBtnprops) => {
  return (
    <AboutChatBtn
      bordercolor="1px solid black"
      // width="100px"
      // height="30px"
      btnTitle={'창 닫기'}
      icon={<Close />}
      onPress={() => {
        props.onPress();
      }}
    />
  );
};

export const ConditionModify = (props: chatBtnprops) => {
  const [openCoditionForm, setOpenCoditionForm] =
    useRecoilState(ConditionModifyState);
  return (
    <AboutChatBtn
      height="30px"
      width="105px"
      bordercolor="1px solid black"
      btnTitle={'조건 변경'}
      icon={<Filter />}
      onPress={() => {
        props.onPress();
      }}
    />
  );
};
