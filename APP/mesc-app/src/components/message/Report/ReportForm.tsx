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
  ReportText2,
  ReportTextInput,
  ReportTouchContainer,
  UserTag,
  Container,
} from './ReportForm.styles';
import {ScrollView, Text} from 'react-native';
import {OkayBtn} from '../Btn/SaveBtn';
import {checkContactState} from '../../../states/CheckContact';
import {ContactListForm} from '../../contact/ContactList';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {set} from 'lodash';
//
import Check from '../../../assets/icons/check.svg';
import Close from '../../../assets/icons/x.svg';
import * as S from './ReportForm.styles';
import {sub} from 'date-fns';
import emailHeader from '../../../assets/images/emailHeader.png';

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
  // console.log('usernaem', userName);

  // useEffect(() => {
  //   setUser({users: []});
  // }, []);

  //다시 연락처 선택
  const reChooseContact = () => {
    // console.log('연락처가기');
    setComplite(!complite);
  };
  // const name = AsyncStorage.getItem('userName');

  const contentExample = `
  ※ 공장 이슈 발생 안내 \n
  안녕하세요 '${userName}'입니다.\n
  현재 공장에 이슈가 발생했습니다.\n
  이슈 상황에 대해 아래와 같이 알려드리니 확인하시고 조치 부탁드립니다.\n\n
  - 이슈 상황 :\n 
  - 요청 내용 :\n\n
  확인 부탁드립니다.\n
  감사합니다.\n
  `;

  const subjectExample = `공장에 이슈가 발생했습니다.`;

  const [emails, setemails] = useState<string[]>([]); //이메일 주소
  const [subject, setsubject] = useState(subjectExample); //이메일 제목
  const [content, setContent] = useState(contentExample); //이메일 내용

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
        <>
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
          <S.NameBox>
            <UserTag>
              <ReportContainer width="40px">
                <Text>{item.name}</Text>
              </ReportContainer>
              <S.IconBox
                onPress={() => {
                  // console.log(item.userId);
                  const array = checkContact.users.filter(user => {
                    // console.log(user.userId !== item.userId);
                    return user.userId !== item.userId;
                  });
                  setUser({users: array});
                }}>
                <Close />
              </S.IconBox>
              {/* <ReportTouchContainer
            width="20px"
            onPress={() => {
              // console.log(item.userId);
              const array = checkContact.users.filter(user => {
                // console.log(user.userId !== item.userId);
                return user.userId !== item.userId;
              });
              setUser({users: array});
            }}>
            <Text style={{color: 'white'}}>X</Text>
          </ReportTouchContainer> */}
            </UserTag>
          </S.NameBox>
          {/* </ScrollView> */}
        </>
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
            width="100%"
            direction="row"
            justifyContent="flex-end">
            <ReportContainer
              width="20%"
              height="75%"
              justifyContent="center"
              // justifyContent="flex-end"
              // alignItems="flex-start"
              // style={{backgroundColor: 'skyblue'}}
            >
              <S.SendBtn onPress={sendEmail}>
                <S.SendText> 전송 </S.SendText>
                {/* <OkayBtn content={'전송'} height="75%" onPress={sendEmail} /> */}
              </S.SendBtn>
            </ReportContainer>
            {/* <ReportContainer
              width="55%"
              height="100%"
              justifyContent="flex-start"
            /> */}
          </ReportContainer>

          {/* 보내는 사람 Container */}
          <ReportContainer height="90px">
            {/* 보내는 사람 subjectContainer */}
            <ReportContainer height="50%" style={{flexDirection: 'row'}}>
              <ReportContainer
                height="100%"
                width="80%"
                // style={{backgroundColor: 'gold'}}
              >
                <ReportText2>받는 사람</ReportText2>
              </ReportContainer>
              {/* 주소록 추가 Btn */}
              <ReportContainer
                height="100%"
                width="20%"
                justifyContent="center">
                <AddPersonBtn onPress={reChooseContact}>
                  <S.ContactBtn> + 주소록 </S.ContactBtn>
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
                defaultValue={subjectExample}
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
            <S.Header source={emailHeader} />
            <CustomTextArea
              defaultValue={contentExample}
              value={content}
              onChangeText={text => setContent(text)}
              multiline
            />
          </ReportContainer>
        </ReportFormContainer>
      ) : (
        <ReportFormContainer>
          <ContactListForm />
        </ReportFormContainer>
      )}
    </>
  );
};
