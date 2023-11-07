import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import TouchID from 'react-native-touch-id';
import Toast from 'react-native-toast-message';
import Success from 'src/screens/login/Success';

function FingerPrint(): JSX.Element {
  async function handleFingerPrint() {
    const optionalConfigObject = {
      title: '지문인식을 시작합니다.',
      imageColor: 'black',
      imageErrorColor: '#ff0000',
      sensorDescription: 'Touch sensor',
      sensorErrorDescription: '지문인식에 실패했습니다.',
      cancelText: 'Cancel',
      backgroundColor: 'yellow',

      fallbackLabel: 'Show Passcode',
      unifiedErrors: true,
      passcodeFallback: true,
    };

    try {
      const isSupported = await TouchID.isSupported(optionalConfigObject);
      console.log(`타입: ${isSupported}`); // faceid, touchid
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: '지문인식을 지원하지 않습니다.',
      });
      return;
    }

    try {
      const res = await TouchID.authenticate(
        '지문을 인식해주세요.',
        optionalConfigObject,
      );
      console.log('인식성공', res);
      Toast.show({
        type: 'success',
        text1: '지문인식 성공',
      });
    } catch (err) {
      console.log('인식실패', err);
      Toast.show({
        type: 'error',
        text1: '열굴인식 실패',
      });
    }
  }
  return (
    <View>
      <Text>지문인식</Text>
      <Button title="지문인식" onPress={handleFingerPrint} />
    </View>
  );
}

function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <FingerPrint />
    </SafeAreaView>
  );
}

export default FingerPrint;
