import React from 'react';
import {TextBox} from '../common/about/AboutText';
// import RobotIcon from '../../assets/images/RobotIcon.png';
import Profile from '../../assets/icons/profile.svg';
import * as S from './ChatbotProfileComponent.styles';

function ChatbotProfile() {
  return (
    <S.Container>
      <S.ImgBox>
        <Profile />
      </S.ImgBox>
      <S.NameBox style={{pointerEvents: 'none'}}>
        <TextBox
          fontSize="15px"
          fontWeight="bold"
          textAlign="center"
          // color="white"
          color="black"
          // color="#3C56A0"
          >
          MESC
        </TextBox>
      </S.NameBox>
    </S.Container>
  );
}

export default ChatbotProfile;
