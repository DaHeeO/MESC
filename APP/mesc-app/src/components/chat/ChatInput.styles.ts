import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/theme';

// input 구역
export const ChatInput = styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: ${colors.icy};
  //border: 1px solid yellow;
  flex-direction: row;
  align-items: center;
`;

export const PlusBox = styled.View`
  width: 24px;
  height: 24px;
  //background-color: gray;
  margin-left: 10px;
`;

export const InputBox = styled.TextInput`
  width: 80%;
  height: 40ㄹㄹpx;
  margin-left: 8px;
  display: flex;
  background-color: #ebecef;
  align-items: center;
  border-radius: 20px;
`;

// export const Sentence = styled.View`
//   width: 80%;
//   height: 36px;
//   background-color: #ebecef;
//   border-radius: 20px;
// `;

export const SendBox = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  margin-left: 8px;
  //background-color: gray;
`;
