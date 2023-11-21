import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import * as S from './Main.styles';
import * as C from '../../components/common/Theme';

import Intro1 from '../../assets/images/main1.png';
import Intro2 from '../../assets/images/main2.png';
import Intro3 from '../../assets/images/main3.png';
import carousel1 from '../../assets/images/Carousel1.png';

import OnBoarding from '../../components/introComponent/OnBoarding';
import BackgroundImg from '../../assets/images/background-intro.png';

import Chat from '../../screens/chat/Chat';

function Main({navigation}: any) {
  // const DATA = [
  //   {
  //     img: Group1,
  //     color: '#E7F4FF',
  //     name: '그룹1',
  //     count: 5,
  //   },
  //   {
  //     img: Group2,
  //     color: '#EEE7FF',
  //     name: '그룹2',
  //     count: 5,
  //   },
  //   {
  //     img: Group3,
  //     color: '#E2FFF7',
  //     name: '그룹3',
  //     count: 5,
  //   },
  //   {
  //     img: Group4,
  //     color: '#FFF8E4',
  //     name: '그룹4',
  //     count: 5,
  //   },
  // ];

  const PAGES = [
    {
      num: 1,
      maintext: '공장 데이터 조회',
      subtext: '복잡한 데이터를 실시간으로 파악할 수 있습니다.',
      image: carousel1,
    },
    {
      num: 2,
      maintext: 'DML 조작',
      subtext: '데이터 CRUD가 가능합니다.',
      image: Intro2,
    },
    {
      num: 3,
      maintext: '보고 간편화',
      subtext: '위급상황 발생 시 간편하게 보고할 수 있습니다.',
      image: Intro3,
    },
  ];

  const handleChatButtonPress = () => {
    // 여기에 Chat 버튼을 눌렀을 때 수행할 동작을 정의
    // 예: 채팅 화면으로 이동
    navigation.navigate('Chat'); // 'Chat'은 실제로 이동하고자 하는 채팅 화면의 이름
  };

  // function renderItem({item}: any) {
  //   return (
  //     <S.ItemContainer>
  //       <S.ItemTop>
  //         <S.ItemBackground bgColor={item.color}>
  //           <S.Image source={item.img} />
  //         </S.ItemBackground>
  //         <TouchableOpacity>
  //           <Dots />
  //         </TouchableOpacity>
  //       </S.ItemTop>
  //       <S.ItemBody>
  //         <S.BoldText
  //           size={17}
  //           color={C.colors.primary}
  //           style={{marginBottom: 6}}>
  //           {item.name}
  //         </S.BoldText>
  //         <S.Text size={13} color={C.colors.tertiary}>
  //           {item.count} 명
  //         </S.Text>
  //       </S.ItemBody>
  //       <S.Bottom onPress={() => navigation.navigate('Contact')}>
  //         <S.BoldText size={15} color={C.colors.primary}>
  //           그룹 편집
  //         </S.BoldText>
  //       </S.Bottom>
  //     </S.ItemContainer>
  //   );
  // }

  return (
    <S.Container>
      <S.Div>
        <S.Top>
          <S.BoldText size={16} color={C.colors.text}>
            SAMSUNG SDI MESC
          </S.BoldText>
          {/*<S.InfoDiv>
            <S.Avatar source={Avatar} />
            <S.WelcomeBox>
              <S.BoldText size={16} color={C.colors.primary}>
                안녕하세요 HIHI 님
              </S.BoldText>
              <S.Text size={12} color={C.colors.primary}>
                Mesc에 오신걸 환영합니다.
              </S.Text>
            </S.WelcomeBox>
          </S.InfoDiv>
          <TouchableOpacity>
            <Menu />
          </TouchableOpacity> */}
        </S.Top>
        <S.Body>
          <S.ToChat source={require('../../assets/images/goToChat.png')}>
            <S.ChatDiv>
              <S.BoldText size={16} color={C.colors.white}>
                {/* 채팅을 시작해 보아요 */}
                챗봇 이용
              </S.BoldText>
              <S.Text size={12} color={C.colors.white}>
                채팅을 통해 더욱 빠르게{'\n'} 데이터베이스를 조작할 수 있어요.
              </S.Text>
            </S.ChatDiv>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Chat')}> */}
            <S.ChatButton onPress={handleChatButtonPress}>
              <S.BoldText size={12} color={C.colors.white}>
                채팅 바로가기
              </S.BoldText>
            </S.ChatButton>
            {/* </TouchableOpacity> */}
          </S.ToChat>
          <S.GroupContainer>
            <S.GroupNav>
              <S.BoldText size={17} color={C.colors.primary}>
                MESC 소개
              </S.BoldText>
              <S.SeeMore onPress={() => navigation.navigate('Contact')}>
                {/* <Plus width={20} height={20} />
                <S.Text size={16} color={C.colors.primary}>
                  더보기
                </S.Text> */}
              </S.SeeMore>
            </S.GroupNav>
            <OnBoarding pages={PAGES} />

            {/* <S.GroupList data={DATA} renderItem={renderItem} numColumns={2} /> */}
          </S.GroupContainer>
        </S.Body>
      </S.Div>
    </S.Container>
  );
}

export default Main;
