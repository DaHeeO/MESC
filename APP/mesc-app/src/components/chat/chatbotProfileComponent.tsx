import React from 'react';
import styled from 'styled-components/native';
import {TextBox} from '../common/About/AboutText';
import RobotIcon from '../../assets/images/RobotIcon.png';
import * as S from './ChatbotProfileComponent.styles';

function ChatbotProfile() {
  return (
    <S.Container>
      <S.ImgBox>
        <S.Img source={RobotIcon}></S.Img>
      </S.ImgBox>
      <S.NameBox>
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
