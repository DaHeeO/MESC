import React from 'react';
// icon
import Home from '../../assets/icons/homeIcon.svg';
import Report from '../../assets/icons/reportIcon.svg';
import DataControll from '../../assets/icons/dbIcon.svg';
import Filter from '../../assets/icons/filterIcon.svg';
import {AboutChatBtn} from '../message/Btn/ChatChooseBtn';

export const GoStartChat = () => {
  return <AboutChatBtn btnTitle={'처음으로'} icon={<Home />} />;
};

export const GoReport = () => {
  return <AboutChatBtn btnTitle={'보고하기'} icon={<Report />} />;
};

export const GoDataControll = () => {
  return <AboutChatBtn btnTitle={'데이터 조작'} icon={<DataControll />} />;
};

export const ConditionModify = () => {
  return <AboutChatBtn btnTitle={'조건변경'} icon={<Filter />} />;
};
