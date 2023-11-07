import React from 'react';
import {TextBox} from '../common/about/AboutText';
import RobotIcon from '../../assets/images/RobotIcon.png';
import * as S from './ChatbotProfileComponent.styles';

function ChatbotProfile() {
  return (
    <S.Container>
      <S.ImgBox>
        <S.Img source={RobotIcon}></S.Img>
      </S.ImgBox>
      <S.NameBox style={{pointerEvents: 'none'}}>
        <TextBox
          fontSize="13px"
          fontWeight="bold"
          textAlign="center"
          color="white">
          MESC
        </TextBox>
      </S.NameBox>
    </S.Container>
  );
}

export default ChatbotProfile;
