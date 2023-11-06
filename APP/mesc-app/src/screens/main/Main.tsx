import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import * as S from './Main.styles';
import * as C from '../../components/common/Theme';

import Avatar from '../../assets/images/avatar.png';
import Menu from '../../assets/icons/menu.svg';
import Plus from '../../assets/icons/navigationPlus.svg';
import Dots from '../../assets/icons/dotsVertical.svg';

import Group1 from '../../assets/images/group/group1.png';
import Group2 from '../../assets/images/group/group2.png';
import Group3 from '../../assets/images/group/group3.png';
import Group4 from '../../assets/images/group/group4.png';

function Main({navigation}: any) {
  const DATA = [
    {
      img: Group1,
      color: '#E7F4FF',
      name: '그룹1',
      count: 5,
    },
    {
      img: Group2,
      color: '#EEE7FF',
      name: '그룹2',
      count: 5,
    },
    {
      img: Group3,
      color: '#E2FFF7',
      name: '그룹3',
      count: 5,
    },
    {
      img: Group4,
      color: '#FFF8E4',
      name: '그룹4',
      count: 5,
    },
  ];

  function renderItem({item}: any) {
    return (
      <S.ItemContainer>
        <S.ItemTop>
          <S.ItemBackground bgColor={item.color}>
            <S.Image source={item.img} />
          </S.ItemBackground>
          <TouchableOpacity>
            <Dots />
          </TouchableOpacity>
        </S.ItemTop>
        <S.ItemBody>
          <S.BoldText
            size={17}
            color={C.colors.primary}
            style={{marginBottom: 6}}>
            {item.name}
          </S.BoldText>
          <S.Text size={13} color={C.colors.tertiary}>
            {item.count} 명
          </S.Text>
        </S.ItemBody>
        <S.Bottom>
          <S.BoldText size={15} color={C.colors.primary}>
            그룹 편집
          </S.BoldText>
        </S.Bottom>
      </S.ItemContainer>
    );
  }

  return (
    <S.Container>
      <S.Div>
        <S.Top>
          <S.InfoDiv>
            <S.Avatar source={Avatar} />
            <S.WelcomeBox>
              <S.BoldText size={16} color={C.colors.primary}>
                안녕하세요. 오다희님
              </S.BoldText>
              <S.Text size={12} color={C.colors.primary}>
                Mesc에 오신걸 환영합니다.
              </S.Text>
            </S.WelcomeBox>
          </S.InfoDiv>
          <TouchableOpacity>
            <Menu />
          </TouchableOpacity>
        </S.Top>
        <S.Body>
          <S.ToChat source={require('../../assets/images/goToChat.png')}>
            <S.ChatDiv>
              <S.BoldText size={16} color={C.colors.white}>
                채팅을 시작해 보아요
              </S.BoldText>
              <S.Text size={12} color={C.colors.white}>
                채팅을 통해 더욱 빠르게{'\n'} 데이터베이스를 조작할 수 있어요.
              </S.Text>
            </S.ChatDiv>
            <S.ChatButton>
              <S.BoldText size={12} color={C.colors.white}>
                채팅 바로가기
              </S.BoldText>
            </S.ChatButton>
          </S.ToChat>
          <S.GroupContainer>
            <S.GroupNav>
              <S.BoldText size={17} color={C.colors.primary}>
                그룹 관리
              </S.BoldText>
              <S.SeeMore>
                <Plus width={20} height={20} />
                <S.Text size={16} color={C.colors.primary}>
                  더보기
                </S.Text>
              </S.SeeMore>
            </S.GroupNav>
            <S.GroupList data={DATA} renderItem={renderItem} numColumns={2} />
          </S.GroupContainer>
        </S.Body>
      </S.Div>
    </S.Container>
  );
}

export default Main;
