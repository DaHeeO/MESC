import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

interface InputProps {
  width?: string;
  height?: string;
  align?: string;
  margin?: string;
  display?: string;
  justifyContent?: string;
  source?: string;
  marginTop?: string;
}

export const OtherContainer = styled.View<InputProps>`
  // background-color: red;
  // border: 1px solid red;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-top: ${({marginTop}) => (marginTop ? marginTop : '0px')};
`;

export const HiddenContainer = styled.View<InputProps>`
  display: ${({display}) => (display ? display : 'none')};
  // background-color: blue;
  // height: 90%;
  width: 100%;
  flex-direction: row;
`;

// input 구역
export const ChatInput = styled.View<InputProps>`
  // border: 1px solid yellow;
  width: 100%;
  min-height: 70px;
  height: ${({height}) => (height ? height : 'auto')};
  display: flex;
  background-color: ${colors.icy};
  flex-direction: column;
  align-items: ${({align}) => (align ? align : 'center')};
  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'center'};
  // justify-content: center;
`;

export const PlusBox = styled.TouchableOpacity`
  // background-color: gray;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

export const InputBox = styled.TextInput`
  width: 90%;
  height: auto;
  max-height: 100px;
  padding-left: 15px;
  display: flex;
  flex: 1;
  color: grey;
  border-radius: 20px;
  line-height: 18px;
`;

export const SendBox = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 10px;
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
  color: black;
`;

export const MenuBox = styled.TouchableOpacity<InputProps>`
  // border: 1px solid red;
  width: ${({width}) => (width ? width : '80px')};
  height: ${({height}) => (height ? height : '80px')};
  margin: ${({margin}) => (margin ? margin : '0px')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.Image`
  // background-color: red;
  width: 60%;
  height: 92%;
`;
