import React, {useState, useEffect, useMemo} from 'react';
import {ScrollView, TextInput, FlatList} from 'react-native';
import * as S from './Group.styles';
import {colors} from '../../components/common/theme';
import axios from 'axios';

import Right from '../../assets/icons/right.svg';
import Contacts from '../../assets/icons/contacts.svg';
import ContactIris from '../../assets/icons/contactsIris.svg';
import GroupIcon from '../../assets/icons/groupIris.svg';
import Minus from '../../assets/icons/minus.svg';

interface ContactsProps {
  navigation: any;
}

interface groupInfo {
  contactNum: number;
  groupList: Group[];
}

interface Group {
  groupId: number;
  groupName: string;
  sequence: number;
  memberCnt: number;
}

const Group = ({navigation}: ContactsProps) => {
  const [Test, setTest] = useState({
    contactNum: 10,
    groupList: [
      {
        groupId: 1,
        groupName: '그룹1',
        sequence: 1,
        memberCnt: 5,
      },
      {
        groupId: 2,
        groupName: '그룹2',
        sequence: 2,
        memberCnt: 7,
      },
      {
        groupId: 3,
        groupName: '그룹3',
        sequence: 3,
        memberCnt: 3,
      },
      {
        groupId: 4,
        groupName: '그룹4',
        sequence: 4,
        memberCnt: 2,
      },
    ],
  });
  // const [groupData, setGroupData] = useState<groupInfo | null>(null);

  // useEffect(() => {
  //   // axios를 사용하여 GET 요청을 보냅니다.
  //   axios.get('YOUR_API_ENDPOINT') // YOUR_API_ENDPOINT는 실제 API 엔드포인트 URL로 대체해야 합니다.
  //     .then((response) => {
  //       // 응답 데이터를 파싱하고 state에 저장합니다.
  //       const data: groupInfo = response.data;
  //       setGroupData(data);
  //     })
  //     .catch((error) => {
  //       console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
  //     });
  // }, []);

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const memoizedGroupList = useMemo(() => {
    return Test.groupList;
  }, []);

  const handleNameChange = (index: number) => (text: string) => {
    const newData = [...Test.groupList];
    newData[index - 1].groupName = text;
    setTest({...Test, groupList: [...newData]});
  };

  function renderItem({item}: any) {
    return (
      <S.GroupDiv
        key={item.groupId}
        onPress={() => !editMode && navigation.navigate('Detail')}>
        <S.GroupBox>
          {editMode ? (
            <S.DeleteBox>
              <Minus />
            </S.DeleteBox>
          ) : null}
          <GroupIcon />
          {editMode ? (
            <S.ContactInput
              value={item.groupName}
              onChangeText={handleNameChange(item.groupId)}
              placeholder={item.groupName}
            />
          ) : (
            <S.ContactText>{item.groupName}</S.ContactText>
          )}
        </S.GroupBox>
        <S.NavigateToContact style={{opacity: editMode ? 0.5 : 1}}>
          <S.GroupText>{item.memberCnt}</S.GroupText>
          <Right />
        </S.NavigateToContact>
      </S.GroupDiv>
    );
  }

  return (
    <S.Container>
      <S.Div>
        <S.Top>
          <S.Navigation>
            <S.Func onPress={toggleEditMode}>
              <S.Text size={15} color={colors.primary}>
                {editMode ? '완료' : '편집'}
              </S.Text>
            </S.Func>
            <S.TitleBox>
              <S.Title>그룹</S.Title>
            </S.TitleBox>
            <S.Func>
              <S.Text size={15} color={colors.primary}>
                추가
              </S.Text>
            </S.Func>
          </S.Navigation>
        </S.Top>
        <S.Body>
          <S.ContactDiv
            style={{opacity: editMode ? 0.5 : 1}}
            onPress={() => !editMode && navigation.navigate('Contacts')}>
            <S.ContactBox>
              {editMode ? <Contacts /> : <ContactIris />}
              <S.ContactText>연락처</S.ContactText>
            </S.ContactBox>
            <S.NavigateToContact>
              <S.ContactText>{Test.contactNum}</S.ContactText>
              <Right />
            </S.NavigateToContact>
          </S.ContactDiv>
          <FlatList
            data={memoizedGroupList}
            renderItem={renderItem}
            contentContainerStyle={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}></FlatList>
        </S.Body>
      </S.Div>
    </S.Container>
  );
};

export default Group;
