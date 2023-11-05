import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

// 채팅화면
export const Container = styled.View`
  background-color: ${colors.secondary};
  display: flex;
  flex: 1;
  // border: 1px solid red;
  // height: 91%;
`;

// 채팅화면 레이아웃
// 왼쪽 오르쪽 양옆 10만큼 띄어놓아서
// 여기서 챗봇 다 보여주면 됨
export const ChatLayout = styled.View`
  background-color: aqua;
  display: flex;
  flex: 1;
  margin-left: 12px;
  margin-right: 12px;
  //margin-bottom: 10px;
  border-radius: 10px;
`;

export const // mesc 말하는 텍스트 창
  MescContainer = styled.View`
    background-color: ${colors.icy};
    border-radius: 10px;
    width: 65%;
    height: auto;
    margin-top: -8px;
  `;

export const TextBox = styled.View`
  display: flex;
  margin-left: 77%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: auto;
  width: 88px;
  background-color: ${colors.iris};
`;
