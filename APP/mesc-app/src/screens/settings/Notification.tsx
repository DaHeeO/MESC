import React from 'react';
import {Text} from 'react-native';
import * as S from './Notification.styles';
import * as C from '../../components/common/Theme';

import ToggleSwitch from '../../components/settingComponent/ToggleSwitch';
import Left from '../../assets/icons/left.svg';

interface SettingsProps {
  navigation: any;
}

function Notification({navigation}: SettingsProps) {
  return (
    <S.Container>
      <S.Div>
        <S.Top>
          <S.Navigation>
            <S.Back onPress={() => navigation.navigate('Settings')}>
              <Left />
            </S.Back>
            <S.TitleBox>
              <S.Title>Notification</S.Title>
            </S.TitleBox>
          </S.Navigation>
        </S.Top>
        <S.Body>
          <S.NotificationBox>
            <S.BoldText size={15} color={C.colors.primary}>
              전체 알림 받기
            </S.BoldText>
            <ToggleSwitch />
          </S.NotificationBox>
          <S.NotificationBox>
            <S.BoldText size={15} color={C.colors.primary}>
              이메일 수신
            </S.BoldText>
            <ToggleSwitch />
          </S.NotificationBox>
          <S.NotificationBox>
            <S.BoldText size={15} color={C.colors.primary}>
              문자 수신
            </S.BoldText>
            <ToggleSwitch />
          </S.NotificationBox>
        </S.Body>
      </S.Div>
    </S.Container>
  );
}

export default Notification;
