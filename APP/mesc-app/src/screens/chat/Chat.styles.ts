import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/theme';

// 채팅화면
export const Container = styled.View`
  background-color: #5a5a5a;
  display: flex;
  flex: 1;
`;

// 채팅화면 레이아웃
// 왼쪽 오르쪽 양옆 10만큼 띄어놓아서
// 여기서 챗봇 다 보여주면 됨
export const ChatLayout = styled.View`
  display: flex;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: aqua;
  border-radius: 10px;
`;

export const // mesc 말하는 텍스트 창
  MescContainer = styled.View`
    background-color: ${colors.icy};
  `;
