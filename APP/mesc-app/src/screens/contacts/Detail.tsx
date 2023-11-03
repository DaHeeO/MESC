import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import * as S from './Detail.styles';
import {colors} from '../../components/common/theme';

import Left from '../../assets/icons/left.svg';
import Plus from '../../assets/icons/plus.svg';
import Search from '../../assets/icons/search.svg';
import Filter from '../../assets/icons/filter.svg';

import image1 from '../../assets/images/test/진영팍.jpg';
import image2 from '../../assets/images/test/문상훈.jpg';

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
    userId: 1,
    imageUrl: image1,
    userName: '자기야 왜 칭얼대',
    userEmail: 'test@samsung.com',
    userRank: '대리',
  },
  {
    userId: 2,
    imageUrl: image2,
    userName: '당후니',
    userEmail: 'test@samsung.com',
    userRank: '사원',
  },
];

const Detail = ({navigation}: ContactsProps) => {
  const [data, setData] = useState<userInfoList[]>([]);

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
              <S.Title>연락처</S.Title>
            </S.TitleBox>
            <S.Right onPress={() => navigation.navigate('Group')}>
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
    </S.Container>
  );
};

export default Detail;
