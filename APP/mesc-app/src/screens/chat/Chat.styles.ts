import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

// 채팅화면
export const Container = styled.View`
  // background-color: #323639;
  // background-color: #f2f2f4;
  // background-color: #F5F9FF;
  // background-color: #e7f0ff85;
  background-color: ${colors.backgroundGray};
  display: flex;
  flex: 1;
  // height: 91%;
`;

// 채팅화면 레이아웃
// 왼쪽 오르쪽 양옆 10만큼 띄어놓아서
// 여기서 챗봇 다 보여주면 됨
export const ChatLayout = styled.View`
  // background-color: aqua;
  display: flex;
  flex: 1;
  margin-left: 12px;
  margin-right: 12px;
  //margin-bottom: 10px;
  border-radius: 10px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;
