import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import * as S from './Group.styles';
import {colors} from '../../components/common/Theme';

import Right from '../../assets/icons/right.svg';
import Contact from '../../assets/icons/contacts.svg';
import GroupIcon from '../../assets/icons/group.svg';

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

const Test = {
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
};

const Group = ({navigation}: ContactsProps) => {
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

  return (
    <S.Container>
      <S.Div>
        <S.Top>
          <S.Navigation>
            <S.Func>
              <S.Text size={15} color={colors.primary}>
                편집
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
          <S.ContactDiv onPress={() => navigation.navigate('Contacts')}>
            <S.ContactBox>
              <Contact />
              <S.ContactText>연락처</S.ContactText>
            </S.ContactBox>
            <S.NavigateToContact>
              <S.ContactText>{Test.contactNum}</S.ContactText>
              <Right />
            </S.NavigateToContact>
          </S.ContactDiv>
          <ScrollView
            contentContainerStyle={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
            {Test?.groupList.map(group => (
              <S.GroupDiv key={group.groupId}>
                <S.GroupBox>
                  <GroupIcon />
                  <S.ContactText>{group.groupName}</S.ContactText>
                </S.GroupBox>
                <S.NavigateToContact>
                  <S.GroupText>{group.memberCnt}</S.GroupText>
                  <Right />
                </S.NavigateToContact>
              </S.GroupDiv>
            ))}
          </ScrollView>
        </S.Body>
      </S.Div>
    </S.Container>
  );
};

export default Group;
