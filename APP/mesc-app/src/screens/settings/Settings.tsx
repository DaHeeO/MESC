import React from 'react';
import {View, Text} from 'react-native';
import * as S from './Setting.styles';
import BackgroundIntro from '../../assets/images/background-intro.png';
import * as C from '../../components/common/Theme';

import Avatar from '../../assets/images/avatar.png';
import Edit from '../../assets/icons/edit.svg';
import FAQ from '../../assets/icons/faq.svg';
import Right from '../../assets/icons/right.svg';
import Bell from '../../assets/icons/bell.svg';
import Alert from '../../assets/icons/alert.svg';

function Settings() {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundIntro} />
      <S.Div>
        <S.Top>
          <S.TitleBox>
            <S.Title>설정</S.Title>
          </S.TitleBox>
        </S.Top>
        <S.Body>
          {/* 상단 프로필 */}
          <S.ProfileContainer>
            <S.AvatarBox>
              <S.Avatar source={Avatar} />
              <S.AvatarEdit onPress={() => console.log('press')}>
                <Edit />
              </S.AvatarEdit>
            </S.AvatarBox>
            <S.ProfileBox>
              <S.BoldText size={18} color={C.colors.primary}>
                오다희
              </S.BoldText>
              <S.Text size={15} color={C.colors.primary} style={{marginTop: 5}}>
                test@samsung.com
              </S.Text>
            </S.ProfileBox>
          </S.ProfileContainer>
          {/* 설정 */}
          <S.SettingContainer>
            <S.TextBox>
              <S.BoldText size={18} color={C.colors.primary}>
                기본 설정
              </S.BoldText>
            </S.TextBox>
            <S.SettingBox>
              <S.SettingDiv>
                <FAQ />
                <S.Text
                  size={16}
                  color={C.colors.primary}
                  style={{marginLeft: 10}}>
                  FAQ
                </S.Text>
              </S.SettingDiv>
              <Right />
            </S.SettingBox>
            <S.SettingBox>
              <S.SettingDiv>
                <Bell />
                <S.Text
                  size={16}
                  color={C.colors.primary}
                  style={{marginLeft: 10}}>
                  알림
                </S.Text>
              </S.SettingDiv>
              <Right />
            </S.SettingBox>
            <S.SettingBox>
              <S.SettingDiv>
                <Alert />
                <S.Text
                  size={16}
                  color={C.colors.primary}
                  style={{marginLeft: 10}}>
                  앱 가이드
                </S.Text>
              </S.SettingDiv>
              <Right />
            </S.SettingBox>
          </S.SettingContainer>
          <S.CardContainer>
            <S.ToChat source={require('../../assets/images/rate.png')}>
              <S.ChatDiv>
                <S.BoldText size={16} color={C.colors.white}>
                  별점을 남겨주세요!
                </S.BoldText>
                <S.Text size={12} color={C.colors.white}>
                  플레이스토어에서 별점을 남겨주세요!
                  {'\n'} 궁금하신점도 리뷰에 남겨주시면
                  {'\n'}빠르게 답변드리겠습니다.
                </S.Text>
              </S.ChatDiv>
              <S.ChatButton>
                <S.BoldText size={12} color={C.colors.white}>
                  리뷰 남기기
                </S.BoldText>
              </S.ChatButton>
            </S.ToChat>
          </S.CardContainer>
        </S.Body>
      </S.Div>
    </S.Container>
  );
}

export default Settings;
