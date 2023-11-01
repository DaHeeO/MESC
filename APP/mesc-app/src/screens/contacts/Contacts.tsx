import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import * as S from './Conatcts.styles';
import {colors} from '../../components/common/theme';

import Back from '../../assets/icons/back.svg';
import Search from '../../assets/icons/search.svg';
import ContactList from '../../components/contactsComponent/ContactList';

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
    ImageUrl: '',
    userName: '오다희',
    userEmail: 'test@samsung.com',
  },
  {
    userId: 2,
    ImageUrl: '',
    userName: '오다희',
    userEmail: 'test@samsung.com',
  },
  {
    userId: 3,
    ImageUrl: '',
    userName: '오다희',
    userEmail: 'test@samsung.com',
  },
];

const Contacts = ({navigation}: ContactsProps) => {
  const windowHeight = Dimensions.get('window').height;

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
            <S.SearchText>검색</S.SearchText>
          </S.Search>
        </S.Top>
        {/* 연락처 리스트 */}
        <View
          style={{
            height: windowHeight * 0.72,
            backgroundColor: 'red',
          }}>
          <ContactList contactList={Test} />
        </View>
      </S.Div>
    </S.Container>
  );
};

export default Contacts;
