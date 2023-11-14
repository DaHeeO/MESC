import {Fingerprint} from '@mui/icons-material';
import TouchID from 'react-native-touch-id';

export async function handleFingerPrint() {
  let message: string = '';

  const optionalConfigObject = {
    title: '지문인식을 시작합니다.',
    imageColor: 'black',
    imageErrorColor: '#ff0000',
    sensorDescription: 'Touch sensor',
    sensorErrorDescription: '지문인식 실패',
    cancelText: 'Cancel',

    fallbackLabel: 'Show Passcode',
    unifiedErrors: true,
    passcodeFallback: true,
  };

  try {
    const isSupported = await TouchID.isSupported(optionalConfigObject);
  } catch (err) {
    message = '지문인식을 지원하지 않습니다.';
    return;
  }

  try {
    console.log('44');
    const res = await TouchID.authenticate(
      '지문을 인식해주세요.',
      optionalConfigObject,
    );

    // 성공 했을 때
    message = '지문인식 성공';
    return res;
  } catch (err) {
    message = '지문인식 실패';
  }

  return false;
}
