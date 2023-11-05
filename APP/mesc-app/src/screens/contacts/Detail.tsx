import React, {useState, useCallback, useRef, useMemo} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import * as S from './Detail.styles';
import {colors} from '../../components/common/theme';

import Left from '../../assets/icons/left.svg';
import Plus from '../../assets/icons/plus.svg';
import Search from '../../assets/icons/search.svg';
import Filter from '../../assets/icons/filter.svg';
import CheckBoxIcon from '../../assets/icons/checkbox.svg';

import image1 from '../../assets/images/test/용명킴.jpg';
import image2 from '../../assets/images/test/민겸킴.jpg';
import image3 from '../../assets/images/test/왁ㅋ.png';
import image4 from '../../assets/images/test/진영팍.jpg';
import image5 from '../../assets/images/test/문상훈.jpg';
import image6 from '../../assets/images/test/침착맨.png';
import image7 from '../../assets/images/test/전현무.jpg';
import image8 from '../../assets/images/test/나무니.jpg';
import image9 from '../../assets/images/test/왕뚜껑.png';
import image10 from '../../assets/images/test/행벅.jpg';

interface ContactsProps {
  navigation: any;
}

interface userInfoList {
  userId: number;
  imageUrl: string;
  userName: string;
  userEmail: string;
  userRank: string;
}

// API 연결 안됨아직
const Test = [
  {
    userId: 4,
    imageUrl: image4,
    userName: '자기야 왜 칭얼대',
    userEmail: 'test@samsung.com',
    userRank: '대리',
  },
  {
    userId: 5,
    imageUrl: image5,
    userName: '당후니',
    userEmail: 'test@samsung.com',
    userRank: '사원',
  },
];

const Detail = ({navigation}: ContactsProps) => {
  // const [data, setData] = useState<userInfoList[]>([]);

  // useEffect(() => {
  //   // Make a GET request here
  //   fetch('https://api.example.com/data')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((responseData: Contact[]) => {
  //       setData(responseData);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // BottomSheet
  // hooks
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const Contacts = [
    {
      userId: 1,
      imageUrl: image1,
      userName: '오다희',
      userEmail: 'test@samsung.com',
      userRank: '사원',
    },
    {
      userId: 2,
      imageUrl: image2,
      userName: '내남친',
      userEmail: 'test@samsung.com',
      userRank: '대리',
    },
    {
      userId: 3,
      imageUrl: image3,
      userName: '왁',
      userEmail: 'test@samsung.com',
      userRank: '과장',
    },
    {
      userId: 4,
      imageUrl: image4,
      userName: '자기야 왜 칭얼대',
      userEmail: 'test@samsung.com',
      userRank: '대리',
    },
    {
      userId: 5,
      imageUrl: image5,
      userName: '당후니',
      userEmail: 'test@samsung.com',
      userRank: '사원',
    },
    {
      userId: 6,
      imageUrl: image6,
      userName: '말년이 무섭다',
      userEmail: 'test@samsung.com',
      userRank: '사장',
    },
    {
      userId: 7,
      imageUrl: image7,
      userName: '무무렐라',
      userEmail: 'test@samsung.com',
      userRank: '사장',
    },
    {
      userId: 8,
      imageUrl: image8,
      userName: '무니는 포도가 먹고 시푼데',
      userEmail: 'test@samsung.com',
      userRank: '사장',
    },
    {
      userId: 9,
      imageUrl: image9,
      userName: '타당타당',
      userEmail: 'test@samsung.com',
      userRank: '왕뚜껑',
    },
    {
      userId: 10,
      imageUrl: image10,
      userName: '행버억',
      userEmail: 'test@samsung.com',
      userRank: '광렬',
    },
  ];

  const data = useMemo(() => {
    return Contacts;
  }, []);

  const snapPoints = useMemo(() => ['99%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>(
    {},
  );

  const handleCheckBoxClick = useCallback((userId: number) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [userId]: !prevCheckedItems[userId],
    }));
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
            <S.ImageBox>
              <S.Img source={item.imageUrl} />
            </S.ImageBox>
            <S.InfoBox>
              <S.BoldText size={17} color={colors.primary}>
                {item.userName}
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
    <S.Container>
      <S.Div>
        <S.Top>
          <S.Navigation>
            <S.Left onPress={() => navigation.navigate('Group')}>
              <Left />
              <S.Text size={15} color={colors.primary}>
                그룹
              </S.Text>
            </S.Left>
            <S.TitleBox>
              <S.Title>그룹이름</S.Title>
            </S.TitleBox>
            <S.Right onPress={handlePresentModalPress}>
              <Plus />
            </S.Right>
          </S.Navigation>
          <S.Search>
            <Search />
            <S.SearchText placeholder="검색" />
          </S.Search>
        </S.Top>
        {/* 연락처 리스트 */}
        <S.Body>
          <S.FilterDiv>
            <S.FilterText>멤버 총 {Test.length}명</S.FilterText>
            <TouchableOpacity>
              <Filter />
            </TouchableOpacity>
          </S.FilterDiv>
          <ScrollView
            contentContainerStyle={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
            {Test?.map(item => (
              <S.ContactDiv key={item.userId}>
                <S.ContactBox>
                  <S.ImageBox>
                    <S.Img source={item.imageUrl} />
                  </S.ImageBox>
                  <S.InfoBox>
                    <S.BoldText size={17} color={colors.primary}>
                      {item.userName}
                    </S.BoldText>
                    <S.BoldText size={14} color={colors.tertiary}>
                      {item.userEmail}
                    </S.BoldText>
                  </S.InfoBox>
                </S.ContactBox>
                <S.RankBox>
                  <S.BoldText size={14} color={colors.tertiary}>
                    {item.userRank}
                  </S.BoldText>
                </S.RankBox>
              </S.ContactDiv>
            ))}
          </ScrollView>
          {/* <ContactList contactList={Test} /> */}
        </S.Body>
      </S.Div>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
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
                  {data.map(renderItem)}
                </BottomSheetScrollView>
              </S.Body>
            </S.Div>
          </S.Container>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </S.Container>
  );
};

export default Detail;
