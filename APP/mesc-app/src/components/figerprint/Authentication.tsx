import ReactNativeBiometrics, {BiometryType} from 'react-native-biometrics';
import * as keyStore from '../../components/figerprint/Secure-key-store';

const rnBiometrics = new ReactNativeBiometrics();

// 생체 인식 가능 여부 확인
export const booleanBiometricsCheck = async () => {
  try {
    const resultObject = await rnBiometrics.isSensorAvailable();
    const {available, biometryType, error} = resultObject;

    if (!available) {
      console.log('isSensorAvailable error', error);
      return {result: false, type: null};
    } else {
      return {result: true, type: biometryType as BiometryType};
    }
  } catch (error) {
    console.log('booleanBiometricsCheck error', error);
    return {result: false, type: null};
  }
};

// 키 생성
export const createKey = async () => {
  try {
    const resultObject = await rnBiometrics.createKeys();
    const {publicKey} = resultObject;
    return {result: true, key: publicKey};
  } catch (error) {
    console.log('createKey error', error);
    return {result: false, key: null};
  }
};

// 키 존재 여부 확인
export const checkKey = async () => {
  try {
    const resultObject = await rnBiometrics.biometricKeysExist();
    const {keysExist} = resultObject;
    return keysExist;
  } catch (error) {
    console.log('checkKey error', error);
    return false;
  }
};

// 키 삭제
export const deleteKey = async () => {
  try {
    const resultObject = await rnBiometrics.deleteKeys();
    const {keysDeleted} = resultObject;
    return keysDeleted;
  } catch (error) {
    console.log('deleteKey error', error);
    return false;
  }
};

// 생체 인식을 사용한 로그인
export const biometricsLogin = async (
  userID: string | undefined = undefined, // 기본값을 undefined로 설정
  msg: string = '로그인',
) => {
  try {
    const resultObject = await rnBiometrics.createSignature({
      promptMessage: msg,
      payload: userID || '', // userID가 undefined일 경우 빈 문자열로 설정
    });
    const {success, signature = ''} = resultObject;

    if (success) {
      await keyStore.setItem('biometricsKey', signature);
      return {result: true, key: signature};
    } else {
      return {result: false, key: null};
    }
  } catch (error) {
    console.log('biometricsLogin error', error);
    return {result: false, key: null, msg: error};
  }
};
