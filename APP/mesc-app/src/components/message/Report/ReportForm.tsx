import React, {useCallback, useState} from 'react';
import {
  AddPersonBtn,
  CustomTextArea,
  ReportContainer,
  ReportFormContainer,
  ReportText,
  ReportTextInput,
} from './ReportForm.styles';
import {Text} from 'react-native';
import {OkayBtn} from '../Btn/SaveBtn';
//interface
interface BottomSheetProps {
  //   모달 전체 높이
  modalHeight?: string;
  // 모달 닫힐 때 한번
  modalBreakPoint?: string;
  component?: React.ReactNode;
  onModalShow?: () => void;
  onModalHide?: () => void;
  // 모달 아이디
}

export const ReportForm = (props: BottomSheetProps) => {
  const [index, setIndex] = useState(1); // 모달이 닫힐 때 한번 호출

  const handleheetChanges = () => {
    console.log(index);
    setIndex(-1);
    if (index < 0) props.onModalHide?.();
  };

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
      <ReportContainer
        height="10%"
        direction="row"
        // style={{backgroundColor: 'pink'}}
      >
        <ReportContainer
          width="40%"
          height="80%"
          justifyContent="flex-end"
          alignItems="flex-start"
          // style={{backgroundColor: 'skyblue'}}
        >
          <OkayBtn content={'전송'} height="90%" />
        </ReportContainer>
        <ReportContainer
          width="55%"
          height="100%"
          justifyContent="flex-start"
        />
      </ReportContainer>
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
    </ReportFormContainer>
  );
};
