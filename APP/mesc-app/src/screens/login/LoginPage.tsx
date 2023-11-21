import React, {useState} from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './LoginPage.styles';
import * as C from '../../components/common/Theme';

import BackgroundImg from '../../assets/images/background333.png';
import Logo from '../../assets/images/SDI_logo.png';
import KnoxText from '../../assets/images/knoxText.png';
import Knox from '../../assets/images/knox.png';

import Man from '../../assets/images/sammy-finance.png';
import User from '../../assets/icons/user.svg';
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import Lock from '../../assets/icons/lock.svg';
import FindId from './FindId';
import FindPassword from './FindPassword';
import customAxios from '../../../Api';

import {userState} from '../../states/UserState';
import {useRecoilState} from 'recoil';
interface LoginProps {
  navigation: any;
}

const RealLogin = ({navigation}: LoginProps) => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const pressedLoginButton = async () => {
    if (await doLogin()) {
      // console.log('aaa');
      // navigation.navigate('Intro');
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomTab', params: {screen: 'Main'}}],
      });
    }
  };

  const doLogin = async () => {
    let loginPass = false;
    await customAxios
      .post(`mesc/user/login`, {
        email: 'test1234@naverr.com',
        password: 'test1234!',
      })
      .then(res => {
        const accessToken = res.data.tokenInfo.accessToken;
        const userName = res.data.name;

        // console.log('usrName : ', userName);
        const userRole = res.data.role;
        AsyncStorage.setItem('accessToken', accessToken);
        AsyncStorage.setItem('userName', userName);
        AsyncStorage.setItem('userRole', userRole);
        setUserInfo({userName: userName, userRole: userRole});
        loginPass = true;
      })
      .catch(() => {
        Alert.alert('로그인 실패');
      });
    return loginPass;
  };

  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundImg} />
      <S.SubContainer>
        <S.Header>
          <S.BoldText size={20} color={C.colors.text}>
            SAMSUNG SDI MESC
          </S.BoldText>
        </S.Header>
        <S.Body>
          <S.NnoxContainer>
            <S.ImgBox>
              <S.Knox source={Knox} />
            </S.ImgBox>
            <S.TextBox>
              <S.KnoxText source={KnoxText} />
            </S.TextBox>
            <S.Text>Knox 계정을 연동해 로그인 해주세요.</S.Text>
            {/* <S.Text>로그인해주세요</S.Text> */}
          </S.NnoxContainer>
        </S.Body>
        <S.Bottom>
          {/* 로그인 버튼 */}
          <S.Button
            // onPress={() => {
            //   navigation.reset({
            //     index: 0,
            //     routes: [{name: 'Intro1'}],
            //   });
            // }}>
            // onPress={() => navigation.navigate('Intro')}
            onPress={pressedLoginButton}>
            <S.Icon>
              <User />
            </S.Icon>
            <S.ButtonText> Knox 계정으로 로그인 </S.ButtonText>
          </S.Button>
        </S.Bottom>
      </S.SubContainer>
    </S.Container>
  );
};

export default RealLogin;
