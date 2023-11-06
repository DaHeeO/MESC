import React from 'react';
import {
  AddPersonBtn,
  CustomTextArea,
  ReportContainer,
  ReportFormContainer,
  ReportText,
  ReportTextInput,
} from './ReportForm.styles';
import {Text} from 'react-native';
import {OkayBtn} from './Condition/ConditionBtn';

export const ReportForm = () => {
  const UserName = '송소연';
  const emailExample = `
  공장 이슈 발생 안내 \n
  안녕하세요 '${UserName}'입니다.\n
  현재 공장에 이슈가 발생했습니다.\n\n
  - 이슈 상황 :\n 
  - 요청 내용 :\n\n
  확인 부탁드립니다.\n
  감사합니다.\n
  `;

  return (
    <ReportFormContainer>
      {/* 보내는 사람 Container */}
      <ReportContainer height="15%">
        {/* 보내는 사람 titleContainer */}
        <ReportContainer height="50%" style={{flexDirection: 'row'}}>
          <ReportContainer height="100%" width="50%" alignItems="flex-start">
            <ReportText>받는 사람</ReportText>
          </ReportContainer>
          {/* 보내는 사람 Btn */}
          <ReportContainer height="100%" width="50%" alignItems="flex-end">
            <AddPersonBtn>
              <Text>+ 주소록</Text>
            </AddPersonBtn>
          </ReportContainer>
        </ReportContainer>
        <ReportContainer height="50%">{/* 보내는 사람 Tag */}</ReportContainer>
      </ReportContainer>

      {/* 이메일 제목 Container */}
      <ReportContainer height="15%" direction="column">
        {/* 이메일 title */}
        <ReportContainer height="50%" width="100%" alignItems="flex-start">
          <ReportText>제목</ReportText>
        </ReportContainer>
        {/* 이메일 input */}
        <ReportContainer height="50%" width="100%" alignItems="center">
          <ReportTextInput placeholder="제목" />
        </ReportContainer>
      </ReportContainer>

      {/* 이메일 form Container */}
      <ReportContainer
        height="50%"
        justifyContent="flex-start"
        // style={{backgroundColor: 'green'}}
      >
        <CustomTextArea defaultValue={emailExample} multiline />
      </ReportContainer>
      <ReportContainer
        height="20%"
        direction="row"
        // style={{backgroundColor: 'pink'}}
      >
        <ReportContainer width="55%" height="100%" justifyContent="flex-start">
          <OkayBtn content={'전송'} height="50%" />
        </ReportContainer>
        <ReportContainer width="55%" height="100%" justifyContent="flex-start">
          <OkayBtn content={'취소'} height="50%" backgroundColor="#ebecef" />
        </ReportContainer>
      </ReportContainer>
    </ReportFormContainer>
  );
};
