import React, {useCallback, useEffect} from 'react';
import {
  AddPersonBtn,
  CustomTextArea,
  ReportContainer,
  ReportFormContainer,
  ReportText,
  ReportTextInput,
  ReportTouchContainer,
  UserTag,
} from './ReportForm.styles';
import {ScrollView, Text} from 'react-native';
import {OkayBtn} from '../Btn/SaveBtn';
import {useRecoilState, useRecoilValue} from 'recoil';
import {checkContactState} from '../../../states/CheckContact';
import {ContactListForm} from 'src/components/contact/ContactList';
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
  const checkContact = useRecoilValue(checkContactState);
  const [user, setUser] = useRecoilState(checkContactState);
  console.log(checkContact);

  const renderName = useCallback(
    (item: any) => {
      console.log(item);
      if (item.name === '') return null;
      return (
        <UserTag>
          <ReportContainer width="70%">
            <Text>{item.name}</Text>
          </ReportContainer>
          <ReportTouchContainer
            width="30%"
            onPress={() => {
              console.log(item.userId);
              const array = checkContact.users.filter(user => {
                console.log(user.userId !== item.userId);
                return user.userId !== item.userId;
              });

              setUser({users: array});
            }}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>X</Text>
          </ReportTouchContainer>
        </UserTag>
      );
    },
    [checkContact.users],
  );

  useEffect(() => {}, []);

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
        <ScrollView horizontal={true} style={{flex: 1, width: '100%'}}>
          <ReportContainer
            width="100%"
            height="100%"
            direction="row"
            style={{
              marginLeft: 5,
              // backgroundColor: 'gold',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* 보내는 사람 Tag */}
            {checkContact.users.map(renderName)}
          </ReportContainer>
        </ScrollView>
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
      {/* <ContactListForm/> */}
    </ReportFormContainer>
  );
};
