// React
import React, {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
// Api
import customAxios, {getUserName} from '../../../../Api';
// LocalStorage
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
import {checkContactState} from '../../../states/CheckContact';
import {ContactListForm} from '../../contact/ContactList';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {set} from 'lodash';

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
  // 모달 상태여부
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);
  const checkContact = useRecoilValue(checkContactState);
  const [user, setUser] = useRecoilState(checkContactState);
  const [complite, setComplite] = useState(false);
  const userName = getUserName();

  // useEffect(() => {
  //   setUser({users: []});
  // }, []);

  //다시 연락처 선택
  const reChooseContact = () => {
    // console.log('연락처가기');
    setComplite(!complite);
  };
  // const name = AsyncStorage.getItem('userName');

  const emailExample = `
  공장 이슈 발생 안내 \n
  안녕하세요 '${userName}'입니다.\n
  현재 공장에 이슈가 발생했습니다.\n\n
  - 이슈 상황 :\n 
  - 요청 내용 :\n\n
  확인 부탁드립니다.\n
  감사합니다.\n
  `;
  const [emails, setemails] = useState<string[]>([]); //이메일 주소
  const [subject, setsubject] = useState(''); //이메일 제목
  const [content, setContent] = useState(emailExample); //이메일 내용

  useEffect(() => {
    checkContact.users.forEach(user => {
      if (user.email !== '') {
        setemails(prevEmails => [...prevEmails, user.email]);
      }
    });
  }, [checkContact.users]);

  // 이메일 전송 post
  const sendEmail = () => {
    setIsModalVisible(false);
    customAxios
      .post('mesc/user/email', {
        emails,
        subject,
        content,
      })
      .then(res => {
        // console.log('axios res: ', res);
        Alert.alert('이메일 발송 완료');
        setUser({users: []});
      })
      .catch(err => {
        console.log('axios err: ', err);
      });
  };

  const renderName = useCallback(
    (item: any) => {
      // console.log(item);
      if (item.name === '') return null;
      return (
        <UserTag>
          <ReportContainer width="80%">
            <Text>{item.name}</Text>
          </ReportContainer>
          <ReportTouchContainer
            width="30%"
            onPress={() => {
              // console.log(item.userId);
              const array = checkContact.users.filter(user => {
                // console.log(user.userId !== item.userId);
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
  return (
    <>
      {complite === false ? (
        <ReportFormContainer>
          <ReportContainer
            height="10%"
            direction="row"
            // style={{backgroundColor: 'pink'}}
            justifyContent="flex-end">
            <ReportContainer
              width="110px"
              height="80%"
              // justifyContent="flex-end"
              // alignItems="flex-start"
              // style={{backgroundColor: 'skyblue'}}
            >
              <OkayBtn content={'전송'} height="80%" onPress={sendEmail} />
            </ReportContainer>
            {/* <ReportContainer
              width="55%"
              height="100%"
              justifyContent="flex-start"
            /> */}
          </ReportContainer>

          {/* 보내는 사람 Container */}
          <ReportContainer height="15%">
            {/* 보내는 사람 subjectContainer */}
            <ReportContainer height="50%" style={{flexDirection: 'row'}}>
              <ReportContainer
                height="100%"
                width="50%"
                alignItems="flex-start">
                <ReportText>받는 사람</ReportText>
              </ReportContainer>
              {/* 보내는 사람 Btn */}
              <ReportContainer
                height="100%"
                width="110px"
                alignItems="flex-end">
                <AddPersonBtn onPress={reChooseContact}>
                  <Text> + 주소록 </Text>
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
                  backgroundColor: 'gold',
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
            {/* 이메일 subject */}
            <ReportContainer height="50%" width="100%" alignItems="flex-start">
              <ReportText>제목</ReportText>
            </ReportContainer>
            {/* 이메일 input */}
            <ReportContainer height="50%" width="100%" alignItems="center">
              <ReportTextInput
                placeholder="제목"
                value={subject}
                onChangeText={text => setsubject(text)}
              />
            </ReportContainer>
          </ReportContainer>
          {/* 이메일 form Container */}
          <ReportContainer
            height="50%"
            justifyContent="flex-start"
            // style={{backgroundColor: 'green'}}
          >
            <CustomTextArea
              defaultValue={emailExample}
              value={content}
              onChangeText={text => setContent(text)}
              multiline
            />
          </ReportContainer>
        </ReportFormContainer>
      ) : (
        <ContactListForm />
      )}
    </>
  );
};
