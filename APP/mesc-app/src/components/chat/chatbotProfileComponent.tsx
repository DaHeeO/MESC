import React from 'react';
import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
import {TextBox} from '../common/About/AboutText';
import chatBot from '../../assets/images/chatBot.png';
import {AboutContainer} from '../common/About/AboutContainer';

const ProfileImageBackground = styled(ImageBackground)`
  height: 100%;
  width: 100%;
  /* 배경 이미지 설정 */
  background-image: url(${chatBot}); // 이미지 리소스 경로 사용
  background-size: cover;
  background-repeat: no-repeat;
  //   background-color: blue;
`;

const NameContainer = styled.View`
  height: 100%;
  width: 55%;
  //   background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ChatbotProfile() {
  return (
    <AboutContainer
      height="7.5%"
      width="45%"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      //   margin 조절하기
      style={{marginTop: '5%', marginLeft: '3%'}}>
      <AboutContainer height="100%" width="40%">
        <ProfileImageBackground source={chatBot} />
      </AboutContainer>
      <NameContainer>
        <TextBox fontSize="15px" fontWeight="bold">
          MESC
        </TextBox>
      </NameContainer>
    </AboutContainer>
  );
}

export default ChatbotProfile;
