import React, {useState} from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './Login.styles';

import BoxChecked from '../../components/loginComponent/BoxChecked';

import BackgroundImg from '../../assets/images/background.png';
import Man from '../../assets/images/sammy-finance.png';
import User from '../../assets/icons/user.svg';
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import Lock from '../../assets/icons/lock.svg';
import FindId from './FindId';
import FindPassword from './FindPassword';
import customAxios from '../../../Api';

import {userState} from '../../states/userState';
import {useRecoilState} from 'recoil';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const pressedLoginButton = async () => {
    AsyncStorage.clear();
    // 앱이 꺼졌을 때 토큰을 유지할지 말지 정해야함
    // 유지한다면, 한번 로그인하면 로그인 창이 다시 뜰 필요가 없음
    if (await doLogin()) {
      // console.log('aaa');
      // navigation.navigate('Intro');
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomTab', params: {screen: 'LoginPage'}}],
      });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isRemebered, setIsRemembered] = useState(false);

  const toggleCheckBox = () => {
    setIsRemembered(!isRemebered);
  };

  const doLogin = async () => {
    let loginPass = false;
    await customAxios
      .post(`mesc/user/login`, {
        email: loginId,
        password: password,
      })
      .then(res => {
        const accessToken = res.data.tokenInfo.accessToken;
        const userName = res.data.name;
        console.log('usrName : ', userName);
        const userRole = res.data.role;
        AsyncStorage.setItem('accessToken', accessToken);
        AsyncStorage.setItem('userName', userName);
        AsyncStorage.setItem('userRole', userRole);
        setUserInfo({userName: userName, userRole: userRole});
        console.log('userInfo', userInfo);

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
      <S.Img source={Man} />
      <S.Div>
        <S.Top>
          <S.Title>로그인</S.Title>
          <Text>로그인하세요 </Text>
        </S.Top>
        <S.Body>
          {/* 아이디 입력창 */}
          <S.InputBox>
            <S.InputDiv>
              <User />
              <S.Input
                placeholder="KNOX 아이디"
                value={loginId}
                onChangeText={id => setLoginId(id)}></S.Input>
            </S.InputDiv>
          </S.InputBox>
          {/* 비밀번호 입력창 */}
          <S.InputBox>
            <S.InputDiv>
              <Lock />
              <S.Input
                secureTextEntry={!showPassword}
                placeholder="비밀번호"
                value={password}
                onChangeText={password => setPassword(password)}></S.Input>
            </S.InputDiv>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {showPassword ? <Eye /> : <EyeOff />}
            </TouchableOpacity>
          </S.InputBox>
          {/*아이디 저장, 아이디, 패스워드 찾기 */}
          <S.SubContainer>
            <S.CheckDiv onPress={toggleCheckBox}>
              {isRemebered ? <BoxChecked /> : <S.Box />}
              <S.SubText>아이디 저장</S.SubText>
            </S.CheckDiv>
            <S.SubDiv>
              <S.Anchor onPress={() => navigation.navigate(FindId)}>
                <S.IrisText>아이디</S.IrisText>
              </S.Anchor>
              <S.IrisText> / </S.IrisText>
              <S.Anchor onPress={() => navigation.navigate(FindPassword)}>
                <S.IrisText>비밀번호 찾기</S.IrisText>
              </S.Anchor>
            </S.SubDiv>
          </S.SubContainer>
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
            <S.ButtonText> 로그인 </S.ButtonText>
          </S.Button>
        </S.Bottom>
      </S.Div>
    </S.Container>
  );
};

export default Login;
