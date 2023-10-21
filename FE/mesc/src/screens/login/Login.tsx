import React from 'react';
import {View, Text} from 'react-native';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  return (
    <View>
      <Text>이제 시작이다!!</Text>
    </View>
  );
};

export default Login;
