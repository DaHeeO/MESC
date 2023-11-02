import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import * as S from './Conatcts.styles';
import {colors} from '../../components/common/theme';

import Back from '../../assets/icons/back.svg';
import Search from '../../assets/icons/search.svg';
import Filter from '../../assets/icons/filter.svg';
import ContactList from '../../components/contactsComponent/ContactList';

import Image1 from '../../assets/images/test/용명킴.jpg';
import Image2 from '../../assets/images/test/민겸킴.jpg';
import Image3 from '../../assets/images/test/왁ㅋ.png';
import Image4 from '../../assets/images/test/진영팍.jpg';
import Image5 from '../../assets/images/test/문상훈.jpg';
import Image6 from '../../assets/images/test/침착맨.png';
import Image7 from '../../assets/images/test/전현무.jpg';
import Image8 from '../../assets/images/test/나무니.jpg';
import Image9 from '../../assets/images/test/왕뚜껑.png';
import Image10 from '../../assets/images/test/행벅.jpg';

interface ContactsProps {
  navigation: any;
}

interface Contact {
  userId: number;
  ImageUrl: string;
  userName: string;
  userEmail: string;
}

// API 연결 안됨아직
const Test = [
  {
    userId: 1,
    ImageUrl: Image1,
    userName: '오다희',
    userEmail: 'test@samsung.com',
    userRank: '사원',
  },
  {
    userId: 2,
    ImageUrl: Image2,
    userName: '내남친',
    userEmail: 'test@samsung.com',
    userRank: '대리',
  },
  {
    userId: 3,
    ImageUrl: Image3,
    userName: '왁',
    userEmail: 'test@samsung.com',
    userRank: '과장',
  },
  {
    userId: 4,
    ImageUrl: Image4,
    userName: '자기야 왜 칭얼대',
    userEmail: 'test@samsung.com',
    userRank: '대리',
  },
  {
    userId: 5,
    ImageUrl: Image5,
    userName: '당후니',
    userEmail: 'test@samsung.com',
    userRank: '사원',
  },
  {
    userId: 6,
    ImageUrl: Image6,
    userName: '말년이 무섭다',
    userEmail: 'test@samsung.com',
    userRank: '사장',
  },
  {
    userId: 7,
    ImageUrl: Image7,
    userName: '무무렐라',
    userEmail: 'test@samsung.com',
    userRank: '사장',
  },
  {
    userId: 8,
    ImageUrl: Image8,
    userName: '무니는 포도가 먹고시푼데',
    userEmail: 'test@samsung.com',
    userRank: '사장',
  },
  {
    userId: 9,
    ImageUrl: Image9,
    userName: '타당타당',
    userEmail: 'test@samsung.com',
    userRank: '왕뚜껑',
  },
  {
    userId: 10,
    ImageUrl: Image10,
    userName: '행버억',
    userEmail: 'test@samsung.com',
    userRank: '광렬',
  },
];

const Contacts = ({navigation}: ContactsProps) => {
  const [data, setData] = useState<Contact[]>([]);

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
            <S.Back>
              <Back />
              <S.Text size={15} color={colors.primary}>
                그룹
              </S.Text>
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
          <ContactList contactList={Test} />
        </S.Body>
      </S.Div>
    </S.Container>
  );
};

export default Contacts;
