import React, {useState, useEffect} from 'react';
import {Pressable, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import * as S from './Group.styles';
import {colors} from '../../components/common/Theme';
import customAxios from '../../../Api';
import {groupInfo} from '../../states/GroupInfo';
import {useRecoilState} from 'recoil';

import Right from '../../assets/icons/right.svg';
import Contacts from '../../assets/icons/contacts.svg';
import ContactIris from '../../assets/icons/contactsIris.svg';
import GroupIcon from '../../assets/icons/groupIris.svg';
import Minus from '../../assets/icons/minus.svg';

interface ContactsProps {
  navigation: any;
}

interface GroupList {
  totalCnt?: number;
  groupResponseList?: Group[];
}

interface Group {
  groupId?: number;
  groupName: string;
  sequence?: number;
  memberCnt: number;
}

const Group = ({navigation}: ContactsProps) => {
  const [data, setData] = useState<GroupList>();

  useEffect(() => {
    // Fetch data from the API
    customAxios
      .get(`mesc/group`, {})
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [addTextChanged, setAddTextChanged] = useState(false);
  const [originalNames, setOriginalNames] = useState<string[]>([]);
  const [groupInfoValue, setGroupInfoValue] = useRecoilState(groupInfo);

  const toggleEditMode = () => {
    if (editMode) {
      // 변화가 감지된 그룹의 이름과 Id를 저장
      // form : {"groupList": [{"groupId": 1, "groupName": "그룹1"}, {"groupId": 2, "groupName": "그룹2"}]}
      const changedGroups = data?.groupResponseList
        ?.map(item => ({
          groupId: item.groupId,
          groupName: item.groupName,
        }))
        .filter(
          (item, index) =>
            item.groupName.length !== 0 &&
            item.groupName !== originalNames[index],
        );

      //axios patch 요청
      customAxios
        .patch(`mesc/group/name`, {
          groupList: changedGroups,
        })
        .then(response => {
          customAxios
            .get(`mesc/group`, {})
            .then(response => {
              setData(response.data.data); // 서버에서 새로운 목록을 받아온다면, state를 업데이트합니다.
            })
            .catch(error => {
              console.error('목록 다시 불러오기 실패:', error);
            });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      // 그룹의 이름을 저장
      const names = data?.groupResponseList?.map(item => item.groupName);
      setOriginalNames(names || []);
    }

    setEditMode(!editMode);
  };

  const handleNameChange = (index: number) => (text: string) => {
    const newData = [...(data?.groupResponseList || [])];
    newData[index].groupName = text;
    setData({...data, groupResponseList: [...newData]});

    if (index + 1 === data?.groupResponseList!.length) {
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
        groupName: '',
        memberCnt: 0,
      };

      // Data state를 업데이트하여 새로운 그룹을 추가합니다.
      setData({
        ...data,
        groupResponseList: [...(data?.groupResponseList || []), newGroup],
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
      if (addTextChanged) {
        // axios post 요청
        customAxios
          .post(`mesc/group`, {
            groupName:
              data?.groupResponseList![data?.groupResponseList!.length - 1]
                .groupName,
          })
          .then(response => {
            customAxios
              .get(`mesc/group`, {})
              .then(response => {
                setData(response.data.data); // 서버에서 새로운 목록을 받아온다면, state를 업데이트합니다.
              })
              .catch(error => {
                console.error('목록 다시 불러오기 실패:', error);
              });
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        // 추가된 빈 그룹을 제거합니다.
        const newData = [...(data?.groupResponseList || [])];
        newData.pop();
        setData({...data, groupResponseList: [...newData]});
      }

      setAddMode(false);
    }
  };

  const handleDeleteGroup = (groupIdToDelete: number) => {
    customAxios
      .delete(`mesc/group/${groupIdToDelete}`, {})
      .then(response => {
        customAxios
          .get(`mesc/group`, {})
          .then(response => {
            setData(response.data.data); // 서버에서 새로운 목록을 받아온다면, state를 업데이트합니다.
          })
          .catch(error => {
            console.error('목록 다시 불러오기 실패:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const renderRightActions = (dragX: any, groupIdToDelete: number) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, -10, -10, 1],
    });

    return (
      <Pressable onPress={() => console.log(groupIdToDelete)}>
        <S.DeleteContainer
          style={[
            {
              transform: [{translateX: trans}],
            },
          ]}>
          <S.DeleteBox onPress={() => handleDeleteGroup(groupIdToDelete)}>
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
                <S.GroupText>{data?.totalCnt}</S.GroupText>
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
                {data?.groupResponseList?.map((item, index) => (
                  <GestureHandlerRootView key={item.groupId}>
                    <Swipeable
                      renderRightActions={dragX =>
                        renderRightActions(dragX, item.groupId!)
                      }
                      friction={3}>
                      <S.GroupDiv
                        key={item.groupId}
                        onPress={() => {
                          handleAddMode();
                          if (item.groupId !== undefined) {
                            setGroupInfoValue({
                              ...groupInfoValue,
                              groupId: item.groupId,
                              groupName: item.groupName,
                            });
                            console.log(groupInfoValue);
                            !editMode && navigation.navigate('Detail');
                          }
                        }}>
                        <S.GroupBox>
                          {editMode ? (
                            <S.DeleteCircle
                              onPress={() => handleDeleteGroup(item.groupId!)}>
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
                                  index + 1 === data.groupResponseList!.length
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
                            index + 1 === data.groupResponseList!.length ? (
                              <S.ContactInput
                                value={item.groupName}
                                onChangeText={handleNameChange(index)}
                                placeholder={
                                  index + 1 === data.groupResponseList!.length
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
