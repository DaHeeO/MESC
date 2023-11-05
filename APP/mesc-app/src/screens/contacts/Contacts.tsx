import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import * as S from './Conatcts.styles';
import {colors} from '../../components/common/Theme';

import Left from '../../assets/icons/left.svg';
import Search from '../../assets/icons/search.svg';
import Filter from '../../assets/icons/filter.svg';

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

const Contacts = ({navigation}: ContactsProps) => {
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
            <S.Back onPress={() => navigation.navigate('Group')}>
              <Left />
              <S.BoldText size={15} color={colors.primary}>
                그룹
              </S.BoldText>
            </S.Back>
            <S.TitleBox>
              <S.Title>연락처</S.Title>
            </S.TitleBox>
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

export default Contacts;
