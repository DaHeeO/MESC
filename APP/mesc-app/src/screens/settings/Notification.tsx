import React from 'react';
import {Text} from 'react-native';
import * as S from './Notification.styles';
import * as C from '../../components/common/Theme';

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
      </S.Div>
    </S.Container>
  );
}

export default Notification;
