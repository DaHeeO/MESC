import React from 'react';
import {ReportContainer, ReportFormContainer} from './reportFormStyle';

export const ReportForm = () => {
  return (
    <ReportFormContainer>
      {/* 보내는 사람 Container */}
      <ReportContainer height="17%" style={{backgroundColor: 'orange'}}>
        {/* 보내는 사람 titleContainer */}
        <ReportContainer height="50%" style={{flexDirection: 'row'}}>
          <ReportContainer
            height="100%"
            width="50%"
            style={{backgroundColor: 'red'}}></ReportContainer>
          {/* 보내는 사람 Btn */}
          <ReportContainer
            height="100%"
            width="50%"
            style={{backgroundColor: 'purple'}}></ReportContainer>
        </ReportContainer>
        <ReportContainer height="50%">{/* 보내는 사람 Tag */}</ReportContainer>
      </ReportContainer>
      {/*  이메일 제목 Container */}
      <ReportContainer height="17%" style={{backgroundColor: 'yellow'}}>
        {/* 이메일 title */}
        <ReportContainer height="50%" style={{backgroundColor: 'gray'}}>
          {/* 이메일  제목 Title */}
        </ReportContainer>
        {/* 이메일 input */}
        <ReportContainer height="50%" style={{backgroundColor: 'white'}}>
          {/* 이메일  제목Input*/}
        </ReportContainer>
      </ReportContainer>
      {/* 이메일form Container */}
      <ReportContainer
        height="66%"
        style={{backgroundColor: 'green'}}></ReportContainer>
    </ReportFormContainer>
  );
};
