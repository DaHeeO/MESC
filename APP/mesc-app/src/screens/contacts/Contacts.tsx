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

import image1 from '../../assets/images/profile/강현.png';
import image2 from '../../assets/images/profile/김라현.png';
import image3 from '../../assets/images/profile/김소연.png';
import image4 from '../../assets/images/profile/김은지.png';
import image5 from '../../assets/images/profile/김재이.png';
import image6 from '../../assets/images/profile/김지희.png';
import image7 from '../../assets/images/profile/문준호.png';
import image8 from '../../assets/images/profile/박기현.png';
import image9 from '../../assets/images/profile/손수형.png';
import image10 from '../../assets/images/profile/손승연.png';
import image11 from '../../assets/images/profile/송소연.png';
import image12 from '../../assets/images/profile/연제경.png';
import image13 from '../../assets/images/profile/오다희.png';
import image14 from '../../assets/images/profile/유민국.png';
import image15 from '../../assets/images/profile/이덕용.png';
import image16 from '../../assets/images/profile/이세훈.png';
import image17 from '../../assets/images/profile/이은성.png';
import image18 from '../../assets/images/profile/이은성2.png';
import image19 from '../../assets/images/profile/이정섭.png';
import image20 from '../../assets/images/profile/이채림.png';
import image21 from '../../assets/images/profile/조환희.png';
import image22 from '../../assets/images/profile/차지은.png';
import image23 from '../../assets/images/profile/최규호.png';
import image24 from '../../assets/images/profile/한성현.png';
import image25 from '../../assets/images/profile/황준혁.png';

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
