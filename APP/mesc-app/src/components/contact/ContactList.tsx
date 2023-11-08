import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import axios from 'axios';
//Recoil
import {RecoilState, useRecoilState} from 'recoil';
import {checkContactState} from '../../states/CheckContact';
// style
import {AboutContainer} from '../common/about/AboutContainer';
import * as S from './ContactListStyle';
import {TouchableOpacity} from 'react-native';
import {colors} from '../common/Theme';
// icon
import Filter from '../../assets/icons/filter.svg';
import Search from '../../assets/icons/search.svg';
import CheckBoxIcon from '../../assets/icons/checkbox.svg';
// BottomSheet
import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';

export const ContactListForm = () => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvaEBuYXZlci5jb20iLCJBdXRoIjoiREVWRUxPUEVSIiwidXNlcklkIjo0LCJleHAiOjE2OTk1MDM1MDF9.RQ0Lz7DVr_acVTN2VW5UzHWq3HJGhP11kEkHtIO9U-g';
  //새로고침 할 때 마다 연락처 다 받아오기
  useEffect(() => {
    axios
      .get('https://www.mesc.kr/api/mesc/user/members', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then(res => {
        const contactList = res.data.data;
        // contactList를 Contacts에 추가
        setContacts(contactList.userList);
      })
      .catch(error => {
        console.error('Error fetching logs: ', error);
      });
  }, []);

  const [Contacts, setContacts] = useState([]);

  Contacts.map(contact => {
    console.log(contact);
  });

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [checkContact, setCheckContact] = useRecoilState(checkContactState);
  const handleCheckBoxClick = (
    userId: number,
    email: string,
    name: string,
    phoneNumber: string,
    role: string,
  ) => {
    console.log('체크박스 클릭됨' + userId);

    setCheckContact(prev => {
      // 이미 선택된 사용자인지 확인
      const isUserSelected = prev.users.some(user => user.userId === userId);

      if (!isUserSelected) {
        const updatedUsers = [
          ...prev.users,
          {email, name, phoneNumber, role, userId, checkContact: true},
        ];

        return {users: updatedUsers};
      } else {
        const updatedUsers = prev.users.filter(user => user.userId !== userId);

        return {users: updatedUsers};
      }
    });
  };

  console.log('checkContact: ', checkContact);
  const data = useMemo(() => {
    return Contacts;
  }, []);
  //   이 값을 props로 넘겨서  modal에게 전달
  const handleClosePress = () => {
    console.log('완료 버튼 눌림');
  };

  interface CheckContactProps {
    email: string;
    name: string;
    phoneNumber: string;
    role: string;
    userId: number;
    checkContact: boolean;
  }

  const renderItem = useCallback(
    (item: CheckContactProps) => {
      const isChecked = checkContact.users.some(
        user => user.userId === item.userId,
      );

      return (
        <S.ContactDiv
          key={item.userId}
          onPress={() =>
            handleCheckBoxClick(
              item.userId,
              item.email,
              item.name,
              item.phoneNumber,
              item.role,
            )
          }>
          <S.ContactBox>
            <S.InfoBox>
              <S.BoldText size={17} color={colors.primary}>
                {item.name}
              </S.BoldText>
            </S.InfoBox>
            <S.InfoBox>
              <S.BoldText size={15} color={colors.primary}>
                {item.email}
              </S.BoldText>
            </S.InfoBox>
          </S.ContactBox>
          <S.CheckBox
            style={{
              borderColor: isChecked ? 'transparent' : 'gray',
              backgroundColor: isChecked ? '#F5F8FC' : 'transparent',
            }}>
            {isChecked && <CheckBoxIcon />}
          </S.CheckBox>
        </S.ContactDiv>
      );
    },
    [checkContact, handleCheckBoxClick],
  );

  return (
    // 전체를 담는 Container
    <AboutContainer
      backgroundColor="skyblue"
      width="100%"
      height="100%"
      flexDirection="column">
      <S.Container>
        <S.Div>
          <S.Top>
            <S.Navigation style={{justifyContent: 'flex-end'}}>
              <S.TitleBox>
                <S.Title>연락 처</S.Title>
              </S.TitleBox>
              <S.Right onPress={() => handleClosePress()}>
                <S.Text size={16} color={colors.primary}>
                  완료
                </S.Text>
              </S.Right>
            </S.Navigation>
            <S.Search>
              <Search />
              <S.SearchText placeholder="검색" />
            </S.Search>
          </S.Top>
          <S.Body>
            <S.FilterDiv>
              <S.FilterText>멤버 총 {data.length}명</S.FilterText>
              <TouchableOpacity>
                <Filter />
              </TouchableOpacity>
            </S.FilterDiv>
            <BottomSheetScrollView style={{marginBottom: '10%'}}>
              {/* 연락처 정보 랜더링 되는 구간 */}
              {data.map(renderItem)}
            </BottomSheetScrollView>
          </S.Body>
        </S.Div>
      </S.Container>
    </AboutContainer>
  );
};
