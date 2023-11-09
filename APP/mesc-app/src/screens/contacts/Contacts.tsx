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
                    <S.Img source={Images[index % 10]} />
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
