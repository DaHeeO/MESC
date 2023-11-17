// import React, {useState, useEffect, useCallback, useRef, useMemo} from 'react';
// import {TouchableOpacity, ScrollView, Pressable, Text} from 'react-native';
// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
//   BottomSheetScrollView,
// } from '@gorhom/bottom-sheet';
// import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
// import customAxios from '../../../Api';
// import {groupInfo} from '../../states/GroupInfo';
// import {useRecoilState} from 'recoil';
// import * as S from './Detail.styles';
// import {colors} from '../../components/common/Theme';

// import Left from '../../assets/icons/left.svg';
// import Plus from '../../assets/icons/navigationPlus.svg';
// import Search from '../../assets/icons/search.svg';
// import Filter from '../../assets/icons/filter.svg';
// import CheckBoxIcon from '../../assets/icons/checkbox.svg';

// import image1 from '../../assets/images/test/용명킴.jpg';
// import image2 from '../../assets/images/test/민겸킴.jpg';
// import image3 from '../../assets/images/test/왁ㅋ.png';
// import image4 from '../../assets/images/test/진영팍.jpg';
// import image5 from '../../assets/images/test/문상훈.jpg';
// import image6 from '../../assets/images/test/침착맨.png';
// import image7 from '../../assets/images/test/전현무.jpg';
// import image8 from '../../assets/images/test/나무니.jpg';
// import image9 from '../../assets/images/test/왕뚜껑.png';
// import image10 from '../../assets/images/test/행벅.jpg';

// interface ContactsProps {
//   navigation: any;
// }

// interface userInfoList {
//   userId: number;
//   name: string;
//   email: string;
//   phoneNumber: string;
//   role: string;
// }

// // API 연결 안됨아직

// const Detail = ({navigation}: ContactsProps) => {
//   const Images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image7,
//     image8,
//     image9,
//     image10,
//   ];

//   // Recoil에서 조건 꺼내오기
//   const [groupInfoValue, setGroupInfoValue] = useRecoilState(groupInfo);
//   const [data, setData] = useState<userInfoList[]>([]);
//   const [contacts, setContacts] = useState<userInfoList[]>([]);

//   // BottomSheet
//   // hooks
//   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

//   useEffect(() => {
//     // Fetch data from the API
//     customAxios
//       .get(`mesc/group/member/${groupInfoValue.groupId}`, {})
//       .then(response => {
//         setData(response.data.data.userList);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch data from the API
//     customAxios
//       .get(`mesc/user/members`, {})
//       .then(response => {
//         setContacts(response.data.data.userList);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   const snapPoints = useMemo(() => ['99%'], []);

//   // callbacks
//   const handlePresentModalPress = useCallback(() => {
//     bottomSheetModalRef.current?.present();
//   }, []);
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   const handleClosePress = useCallback(() => {
//     bottomSheetModalRef.current?.close();
//   }, []);

//   const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>(
//     {},
//   );

//   const handleResetCheckedItems = () => {
//     const checkedItemIds = Object.keys(checkedItems)
//       .filter(userId => checkedItems[parseInt(userId, 10)])
//       .map(userId => parseInt(userId, 10));

//     customAxios
//       .patch(`mesc/group/add/${groupInfoValue.groupId}`, {
//         userList: checkedItemIds,
//       })
//       .then(response => {
//         customAxios
//           .get(`mesc/group/member/${groupInfoValue.groupId}`, {})
//           .then(response => {
//             setData(response.data.data.userList); // 서버에서 새로운 목록을 받아온다면, state를 업데이트합니다.
//           })
//           .catch(error => {
//             console.error('목록 다시 불러오기 실패:', error);
//           });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

//     // axios로 checkedItemIds를 서버에 보내기

//     setCheckedItems({}); // 모두 초기 상태로 변경
//   };

//   const handleCheckBoxClick = useCallback((userId: number) => {
//     setCheckedItems(prevCheckedItems => ({
//       ...prevCheckedItems,
//       [userId]: !prevCheckedItems[userId],
//     }));
//   }, []);

//   const handleDeleteGroup = (userIdToDelete: number) => {
//     customAxios
//       .delete(
//         `mesc/group/member/${groupInfoValue.groupId}/${userIdToDelete}`,
//         {},
//       )
//       .then(response => {
//         customAxios
//           .get(`mesc/group/member/${groupInfoValue.groupId}`, {})
//           .then(response => {
//             setData(response.data.data.userList); // 서버에서 새로운 목록을 받아온다면, state를 업데이트합니다.
//           })
//           .catch(error => {
//             console.error('목록 다시 불러오기 실패:', error);
//           });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   // renders
//   const renderItem = useCallback(
//     (item: any, index: number) => {
//       const isChecked = checkedItems[item.userId];
//       const disabledUserIds = data.map(user => user.userId); // 현재 그룹에 속한 멤버들의 userId 목록
//       const isDisabled = disabledUserIds.includes(item.userId); // 현재 그룹에 속한 멤버라면, disabled 처리
//       return (
//         <S.ContactDiv
//           key={item.userId}
//           onPress={
//             isDisabled ? undefined : () => handleCheckBoxClick(item.userId)
//           } // onPress 이벤트 설정
//           style={{opacity: isDisabled ? 0.5 : 1}} // Opacity 설정
//         >
//           <S.ContactBox>
//             <S.ImageBox>
//               <S.Img source={Images[index % 10]} />
//             </S.ImageBox>
//             <S.InfoBox>
//               <S.BoldText size={17} color={colors.primary}>
//                 {item.name}
//               </S.BoldText>
//             </S.InfoBox>
//           </S.ContactBox>
//           <S.CheckBox
//             style={{
//               borderColor: checkedItems[item.userId] ? 'transparent' : 'gray',
//               backgroundColor: checkedItems[item.userId]
//                 ? '#F5F8FC'
//                 : 'transparent',
//             }}>
//             {checkedItems[item.userId] && <CheckBoxIcon />}
//           </S.CheckBox>
//         </S.ContactDiv>
//       );
//     },
//     [checkedItems, handleCheckBoxClick],
//   );

//   const renderRightActions = (dragX: any, userIdToDelete: number) => {
//     const trans = dragX.interpolate({
//       inputRange: [0, 50, 100, 101],
//       outputRange: [0, -10, -10, 1],
//     });

//     return (
//       <Pressable onPress={() => console.log(userIdToDelete)}>
//         <S.DeleteContainer
//           style={[
//             {
//               transform: [{translateX: trans}],
//             },
//           ]}>
//           <S.DeleteBox onPress={() => handleDeleteGroup(userIdToDelete)}>
//             <S.BoldText size={12} color="#ffffff">
//               삭제
//             </S.BoldText>
//           </S.DeleteBox>
//         </S.DeleteContainer>
//       </Pressable>
//     );
//   };

//   return (
//     <S.Container>
//       <S.Div>
//         <S.Top>
//           <S.Navigation>
//             <S.Left onPress={() => navigation.navigate('Group')}>
//               <Left />
//               <S.Text size={15} color={colors.primary}>
//                 그룹
//               </S.Text>
//             </S.Left>
//             <S.TitleBox>
//               <S.Title>{groupInfoValue.groupName}</S.Title>
//             </S.TitleBox>
//             <S.Right
//               onPress={() => {
//                 handleResetCheckedItems(); // 모두 초기 상태로 변경
//                 handlePresentModalPress();
//               }}>
//               <Plus />
//             </S.Right>
//           </S.Navigation>
//           <S.Search>
//             <Search />
//             <S.SearchText placeholder="검색" />
//           </S.Search>
//         </S.Top>
//         {/* 연락처 리스트 */}
//         <S.Body>
//           <S.FilterDiv>
//             <S.FilterText>멤버 총 {data.length}명</S.FilterText>
//             <TouchableOpacity>
//               <Filter />
//             </TouchableOpacity>
//           </S.FilterDiv>
//           <ScrollView
//             contentContainerStyle={{
//               display: 'flex',
//               alignItems: 'center',
//               width: '100%',
//             }}>
//             {data?.map((item, index) => (
//               <GestureHandlerRootView key={item.userId}>
//                 <Swipeable
//                   renderRightActions={dragX =>
//                     renderRightActions(dragX, item.userId)
//                   }
//                   friction={3} // 마찰력을 1보다 작은 값으로 조정
//                 >
//                   <S.ContactDiv key={item.userId}>
//                     <S.ContactBox>
//                       <S.ImageBox>
//                         <S.Img source={Images[index % 10]} />
//                       </S.ImageBox>
//                       <S.InfoBox>
//                         <S.BoldText size={17} color={colors.primary}>
//                           {item.name}
//                         </S.BoldText>
//                         <S.BoldText size={14} color={colors.tertiary}>
//                           {item.email}
//                         </S.BoldText>
//                       </S.InfoBox>
//                     </S.ContactBox>
//                     <S.RankBox isNull={item.role === null}>
//                       <S.BoldText size={14} color={colors.tertiary}>
//                         {item.role}
//                       </S.BoldText>
//                     </S.RankBox>
//                   </S.ContactDiv>
//                 </Swipeable>
//               </GestureHandlerRootView>
//             ))}
//           </ScrollView>
//         </S.Body>
//       </S.Div>
//       <BottomSheetModalProvider>
//         <BottomSheetModal
//           ref={bottomSheetModalRef}
//           index={0}
//           snapPoints={snapPoints}
//           onChange={handleSheetChanges}>
//           <S.Container>
//             <S.Div>
//               <S.Top>
//                 <S.Navigation style={{justifyContent: 'flex-end'}}>
//                   <S.TitleBox>
//                     <S.Title>연락처</S.Title>
//                   </S.TitleBox>
//                   <S.Right
//                     onPress={() => {
//                       handleResetCheckedItems(); // 모두 초기 상태로 변경
//                       handleClosePress();
//                     }}>
//                     <S.Text size={16} color={colors.primary}>
//                       완료
//                     </S.Text>
//                   </S.Right>
//                 </S.Navigation>
//                 <S.Search>
//                   <Search />
//                   <S.SearchText placeholder="검색" />
//                 </S.Search>
//               </S.Top>
//               <S.Body>
//                 <S.FilterDiv>
//                   <S.FilterText>멤버 총 {contacts.length}명</S.FilterText>
//                   <TouchableOpacity>
//                     <Filter />
//                   </TouchableOpacity>
//                 </S.FilterDiv>
//                 <BottomSheetScrollView style={{marginBottom: '10%'}}>
//                   {contacts.map(renderItem)}
//                 </BottomSheetScrollView>
//               </S.Body>
//             </S.Div>
//           </S.Container>
//         </BottomSheetModal>
//       </BottomSheetModalProvider>
//     </S.Container>
//   );
// };

// export default Detail;
