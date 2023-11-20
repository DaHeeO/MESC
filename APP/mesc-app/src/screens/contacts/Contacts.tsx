import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import * as S from './Conatcts.styles';
import {colors} from '../../components/common/Theme';
import axios from 'axios';
import {err} from 'react-native-svg/lib/typescript/xml';
import {customAxios} from '../../../Api';

import Left from '../../assets/icons/left.svg';
import Search from '../../assets/icons/search.svg';
import Filter from '../../assets/icons/filter.svg';

import image1 from '../../assets/images/profile/image1.png';
import image2 from '../../assets/images/profile/image2.png';
import image3 from '../../assets/images/profile/image3.png';
import image4 from '../../assets/images/profile/image4.png';
import image5 from '../../assets/images/profile/image5.png';
import image6 from '../../assets/images/profile/image6.png';
import image7 from '../../assets/images/profile/image7.png';
import image8 from '../../assets/images/profile/image8.png';
import image9 from '../../assets/images/profile/image9.png';
import image10 from '../../assets/images/profile/image10.png';
import image11 from '../../assets/images/profile/image11.png';
import image12 from '../../assets/images/profile/image12.png';
import image13 from '../../assets/images/profile/image13.png';
import image14 from '../../assets/images/profile/image14.png';
import image15 from '../../assets/images/profile/image15.png';
import image16 from '../../assets/images/profile/image16.png';
import image17 from '../../assets/images/profile/image17.png';
import image18 from '../../assets/images/profile/image18.png';
import image19 from '../../assets/images/profile/image19.png';
import image20 from '../../assets/images/profile/image20.png';
import image21 from '../../assets/images/profile/image21.png';
import image22 from '../../assets/images/profile/image22.png';
import image23 from '../../assets/images/profile/image23.png';
import image24 from '../../assets/images/profile/image24.png';
import image25 from '../../assets/images/profile/image25.png';

interface ContactsProps {
  navigation: any;
}

interface user {
  userId: number;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
}

const Images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image10,
  image10,
  image10,
];

const Contacts = ({navigation}: ContactsProps) => {
  const [data, setData] = useState<user[]>([]);

  useEffect(() => {
    // Fetch data from the API
    customAxios
      .get(`mesc/user/members`, {})
      .then(response => {
        setData(response.data.data.userList);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

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
            <S.FilterText>멤버 총 {data.length}명</S.FilterText>
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
            {data?.map((item, index) => (
              <S.ContactDiv key={item.userId}>
                <S.ContactBox>
                  <S.ImageBox>
                    <S.Img source={Images[index]} />
                  </S.ImageBox>
                  <S.InfoBox>
                    <S.BoldText size={17} color={colors.primary}>
                      {item.name || '이름 없음'}
                    </S.BoldText>
                    <S.BoldText size={14} color={colors.tertiary}>
                      {item.email}
                    </S.BoldText>
                  </S.InfoBox>
                </S.ContactBox>
                <S.RankBox isNull={item.role === null}>
                  <S.BoldText size={14} color={colors.tertiary}>
                    {item.role}
                  </S.BoldText>
                </S.RankBox>
              </S.ContactDiv>
            ))}
          </ScrollView>
        </S.Body>
      </S.Div>
    </S.Container>
  );
};

export default Contacts;
