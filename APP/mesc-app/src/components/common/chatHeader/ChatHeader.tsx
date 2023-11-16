import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Back from '../../../assets/icons/chatbotback2.svg';
import Dots from '../../../assets/icons/dots.svg';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

export const HeaderBody = styled.View`
  position: 'fixed';
  // background: #182655;
  // background : #3C56A0;
  // background: white;
  border-bottom-width: 1px;
  border-bottom-color: #d2d2d2;
  top: 0;
  height: 7%;
  display: flex;
  //border: 1px solid red;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  // font-size: 25px;
  font-size: 20px;
  // font-weight: bold;
  // color: white;
  // color: black;
  color: #182655;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function Header() {
  const navigation: any = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Main');
  };

  return (
    <HeaderBody>
      <View
        style={{
          width: '10%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handleBackPress}>
          <Back style={{marginLeft: 20, justifyContent: 'center'}} />
        </TouchableOpacity>
      </View>
      <View style={{width: '80%', display: 'flex', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>MESC</Text>
        <Text style={{fontSize: 12}}>secured By Knox</Text>
      </View>
      <View
        style={{
          width: '10%',
          justifyContent: 'center',
        }}>
        {/* <Dots fill="white" width={24} height={24} style={{marginRight: 30}} /> */}
      </View>
    </HeaderBody>
  );
}

export default Header;
