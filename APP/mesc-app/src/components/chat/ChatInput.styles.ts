import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

// input 구역
export const ChatInput = styled.View`
  width: 100%;
  min-height: 70px;
  height: auto;
  // max-height: 18%;
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
  // border: 1px solid red;
`;

export const InputBox = styled.TextInput`
  width: 80%;
  height: auto;
  max-height: 100px;
  padding-left: 15px;
  margin: 10px
  display: flex;
  flex: 1;
  background-color: #ebecef;
  border-radius: 20px;
  lineHeight: 18px;
`;

export const SendBox = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  // margin-left: 8px;
  // border: 1px solid red;
  //background-color: gray;
`;

// input 묶음
export const Input = styled.View`
  width: 100%;
  display: flex;
  // height: 120px;
  // background-color: ${colors.icy};
  // border: 1px solid yellow;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  // align-content: space-between;
`;

// 자동완성 구역
export const SuggestionsBox = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: ${colors.icy};
  // border: 1px solid red;
  border-bottom-width: 1px;
  border-bottom-color: #dcd9d9;
  flex-direction: row;
  align-items: center;
`;

export const WordBox = styled.View<{length?: number}>`
  width: auto;
  min-width: 80px; // 고정된 최소 너비
  max-width: ${({length}) =>
    length ? `${Math.max(length * 20, 40)}px` : '100%'};
  height: 50px; // 고정 높이를 가지거나, 필요에 따라 동적으로 조절할 수 있습니다.
  // padding-horizontal: 10px; // 텍스트 좌우에 패딩을 추가하여 여유 공간을 줍니다.
  flex: none
  align-items: center;
  justify-content: center;
  background-color: ${colors.icy};
  // border: 1px solid red;
  // margin: 5px;
  padding: 10px;
  // border-radius: 14px;
  // margin: 5px; // wordBox 간격을 주기 위해 마진을 추가합니다.
`;

export const WordText = styled.Text`
  // color: #ffffff; // 흰색 폰트
  // margin: 5px;
  // 추가적인 폰트 스타일링을 여기에 넣을 수 있습니다.
`;
