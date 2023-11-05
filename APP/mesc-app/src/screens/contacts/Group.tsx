import React, {useState, useEffect, useMemo} from 'react';
import {
  Pressable,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
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
  const [addMode, setAddMode] = useState(false);
  const [addTextChanged, setAddTextChanged] = useState(false);
  const [originalNames, setOriginalNames] = useState<string[]>([]);
  const [dragState, setDragState] = useState({});

  const toggleEditMode = () => {
    if (editMode) {
      // Edit 모드 해제 시, 빈 칸인 그룹의 이름을 이전 값으로 복원
      Test.groupList.forEach((group, index) => {
        if (!group.groupName && originalNames[index]) {
          Test.groupList[index].groupName = originalNames[index];
        }
      });
    } else {
      // Edit 모드로 전환 시, 현재 그룹 이름을 저장
      const names = Test.groupList.map(group => group.groupName);
      setOriginalNames(names);
    }

    setEditMode(!editMode);
  };

  // const memoizedGroupList = useMemo(() => {
  //   return Test.groupList;
  // }, []);

  const handleNameChange = (index: number) => (text: string) => {
    const newData = [...Test.groupList];
    newData[index].groupName = text;
    setTest({...Test, groupList: [...newData]});

    if (index + 1 === Test.groupList.length) {
      if (text.length > 0) {
        setAddTextChanged(true);
      } else {
        setAddTextChanged(false);
      }
    }
  };

  const handleAddGroup = () => {
    if (!addMode) {
      const newGroup = {
        groupId: Test.groupList.length + 1, // ID를 유니크하게 생성
        groupName: '', // 빈 그룹명으로 초기화
        sequence: Test.groupList.length + 1, // 순서를 현재 그룹 개수 + 1로 설정
        memberCnt: 0, // 초기 멤버 수
      };

      // Test state를 업데이트하여 새로운 그룹을 추가합니다.
      setTest({
        ...Test,
        groupList: [...Test.groupList, newGroup],
      });

      // 그룹 추가 모드를 활성화합니다.
      setAddMode(true);
      setAddTextChanged(false);
    }
  };

  const handleAddMode = () => {
    // 사용자가 추가 모드에서 그룹명을 입력하고 확인 또는 바깥을 클릭하면
    // addMode를 비활성화하고, 추가된 빈 그룹을 제거합니다.
    if (addMode) {
      if (!addTextChanged) {
        // 사용자가 추가된 그룹의 그룹명을 입력하지 않았을 경우, 그룹을 제거
        const updatedGroupList = Test.groupList.slice(0, -1);
        setTest({...Test, groupList: updatedGroupList});
      }

      setAddMode(false);
    }
  };

  const handleDeleteGroup = (indexToDelete: number) => {
    const updatedGroupList = [...Test.groupList];
    updatedGroupList.splice(indexToDelete, 1);
    setTest({...Test, groupList: updatedGroupList});

    setDragState({...dragState, [indexToDelete]: false});
  };

  const renderRightActions = (dragX: any, index: number) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, -10, -10, 1],
    });

    return (
      <Pressable onPress={() => console.log(index)}>
        <S.DeleteContainer
          style={[
            {
              transform: [{translateX: trans}],
            },
          ]}>
          <S.DeleteBox onPress={() => handleDeleteGroup(index)}>
            <S.BoldText size={12} color="#ffffff">
              삭제
            </S.BoldText>
          </S.DeleteBox>
        </S.DeleteContainer>
      </Pressable>
    );
  };

  return (
    <S.Container>
      <S.Div>
        <S.Top>
          <S.Navigation>
            <S.Func onPress={toggleEditMode}>
              <S.BoldText size={15} color={colors.primary}>
                {editMode ? '완료' : '편집'}
              </S.BoldText>
            </S.Func>
            <S.TitleBox>
              <S.Title>그룹</S.Title>
            </S.TitleBox>
            <S.Func onPress={handleAddGroup}>
              <S.BoldText size={15} color={colors.primary}>
                추가
              </S.BoldText>
            </S.Func>
          </S.Navigation>
        </S.Top>
        <TouchableWithoutFeedback onPress={handleAddMode}>
          <S.Body>
            <S.ContactDiv
              style={{opacity: editMode ? 0.5 : 1}}
              onPress={() => {
                !editMode && navigation.navigate('Contacts');
              }}>
              <S.ContactBox>
                {editMode ? <Contacts /> : <ContactIris />}
                <S.ContactText>연락처</S.ContactText>
              </S.ContactBox>
              <S.NavigateToContact>
                <S.GroupText>{Test.contactNum}</S.GroupText>
                <Right />
              </S.NavigateToContact>
            </S.ContactDiv>
            <TouchableWithoutFeedback onPress={handleAddMode}>
              <ScrollView
                contentContainerStyle={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '90%',
                }}>
                {Test.groupList?.map((item, index) => (
                  <GestureHandlerRootView key={item.groupId}>
                    {Test.groupList[index] && (
                      <Swipeable
                        renderRightActions={dragX =>
                          renderRightActions(dragX, index)
                        }
                        friction={3}>
                        <S.GroupDiv
                          key={item.groupId}
                          onPress={() => {
                            handleAddMode();
                            !editMode && navigation.navigate('Detail');
                          }}>
                          <S.GroupBox>
                            {editMode ? (
                              <S.DeleteCircle
                                onPress={() => handleDeleteGroup(index)}>
                                <Minus />
                              </S.DeleteCircle>
                            ) : null}
                            <GroupIcon />
                            {editMode ? (
                              addMode ? (
                                <S.ContactInput
                                  value={item.groupName}
                                  onChangeText={handleNameChange(index)}
                                  placeholder={
                                    index + 1 === Test.groupList.length
                                      ? '그룹명'
                                      : item.groupName
                                  }
                                />
                              ) : (
                                <S.ContactInput
                                  value={item.groupName}
                                  onChangeText={handleNameChange(index)}
                                  placeholder={item.groupName}
                                />
                              )
                            ) : addMode ? (
                              index + 1 === Test.groupList.length ? (
                                <S.ContactInput
                                  value={item.groupName}
                                  onChangeText={handleNameChange(index)}
                                  placeholder={
                                    index + 1 === Test.groupList.length
                                      ? '그룹명'
                                      : item.groupName
                                  }
                                />
                              ) : (
                                <S.ContactText>{item.groupName}</S.ContactText>
                              )
                            ) : (
                              <S.ContactText>{item.groupName}</S.ContactText>
                            )}
                          </S.GroupBox>
                          <S.NavigateToContact
                            style={{opacity: editMode ? 0.5 : 1}}>
                            <S.GroupText>{item.memberCnt}</S.GroupText>
                            <Right />
                          </S.NavigateToContact>
                        </S.GroupDiv>
                      </Swipeable>
                    )}
                  </GestureHandlerRootView>
                ))}
              </ScrollView>
            </TouchableWithoutFeedback>
          </S.Body>
        </TouchableWithoutFeedback>
      </S.Div>
    </S.Container>
  );
};

export default Group;
