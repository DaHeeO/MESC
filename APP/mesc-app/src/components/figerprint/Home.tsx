import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import * as authentication from '../../components/figerprint/Authentication';

interface HomeProps {
  // Define the props interface if needed
  someProp: string;
  anotherProp: number;
  onBiometricsSuccess: () => void;
  onBiometricsFailure: () => void;
}

function Home(props: HomeProps) {
  const registerBiometrics = async () => {
    const token = await messaging().getToken();

    const keyCreate = await authentication.createKey();
    if (keyCreate?.result) {
      const biometricsCheck = await authentication.booleanBiometricsCheck();

      if (biometricsCheck?.result) {
        const bioKey = await authentication.biometricsLogin(
          '유저아이디' + token,
          '등록',
        );

        // Success logic
        if (bioKey?.key) {
          Alert.alert('알림', '성공');
          console.log('bioKey Success');
        } else {
          Alert.alert('알림', '생체인식에 실패했습니다.');
        }
      }
    } else {
      Alert.alert('알림', '생체인식을 사용할 수 없습니다.');
    }
  };
}

export default Home;
