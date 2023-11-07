import * as Keychain from 'react-native-keychain';

// 데이터 저장
export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    await Keychain.setInternetCredentials(
      key,
      key, // 이 부분은 서비스 이름과 사용자 이름으로 사용하려는 키 값을 설정하는 부분입니다. 필요에 따라 수정하세요.
      value,
    );
  } catch (error) {
    console.log('keychain set error:', error);
  }
};

// 데이터 조회
export const getItem = async (key: string): Promise<string | null> => {
  try {
    const credentials = await Keychain.getInternetCredentials(key);
    if (credentials && credentials.password) {
      const savedPinNumber = credentials.password;
      return savedPinNumber;
    } else {
      return null;
    }
  } catch (error) {
    console.log('keychain get error:', error);
    return null;
  }
};
