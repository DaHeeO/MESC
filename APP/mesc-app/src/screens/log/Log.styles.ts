import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

// 채팅화면
export const Container = styled.View`
  background-color: #5a5a5a;
  disaply: flex;
  flex: 1;
`;

// 맨 위 mesc
// export const Header = styled.View`
//   position: 'fixed';
//   background: #242529;
//   top: 0;
//   height: 7%;
//   display: flex;
//   border: 1px solid red;
//   flex-direction: row;
// `;

export const Text = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
  // top: 25%;
  justify-content: center;
  align-items: center;
  // border: 1px solid white;
`;
