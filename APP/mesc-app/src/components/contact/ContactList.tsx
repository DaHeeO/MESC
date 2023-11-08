import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
import axios from 'axios';

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
        console.log(contactList.userList);

        // contactList를 Contacts에 추가
        setContacts(contactList.userList);
      })
      .catch(error => {
        console.error('Error fetching logs:', error);
      });
  }, []);

  const [Contacts, setContacts] = useState([]);

  // Contacts를 map 함수로 순회하면서 원하는 작업 수행
  Contacts.map(contact => {
    console.log(contact);
  });

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>(
    {},
  );

  const handleCheckBoxClick = useCallback((userId: number) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [userId]: !prevCheckedItems[userId],
    }));
  }, []);

  //   이 값을 props로 넘겨서  modal에게 전달
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const data = useMemo(() => {
    return Contacts;
  }, []);

  // renders
  const renderItem = useCallback(
    (item: any) => {
      const isChecked = checkedItems[item.userId];
      return (
        <S.ContactDiv
          key={item.userId}
          onPress={() => handleCheckBoxClick(item.userId)}>
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
              borderColor: checkedItems[item.userId] ? 'transparent' : 'gray',
              backgroundColor: checkedItems[item.userId]
                ? '#F5F8FC'
                : 'transparent',
            }}>
            {checkedItems[item.userId] && <CheckBoxIcon />}
          </S.CheckBox>
        </S.ContactDiv>
      );
    },
    [checkedItems, handleCheckBoxClick],
  );

  return (
    // 전체를 담는 Container
    <AboutContainer
      backgroundColor="pink"
      width="100%"
      height="100%"
      flexDirection="column">
      <S.Container>
        <S.Div>
          <S.Top>
            <S.Navigation style={{justifyContent: 'flex-end'}}>
              <S.TitleBox>
                <S.Title>연락처</S.Title>
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
