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
  // background-color: pink;
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
  // background-color: yellow;
`;

export const PlusBox = styled.TouchableOpacity`
  // background-color: gray;
  width: 24px;
  height: 24px;
  margin-left: 15px;
  // background-color: yellow;
`;

export const InputBox = styled.TextInput`
  background-color: #ececec;
  width: 80%;
  height: auto;
  max-height: 80px;
  padding-left: 15px;
  display: flex;
  flex: 1;
  color: grey;
  border-radius: 20px;
  line-height: 18px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const SendBox = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  // background-color: green;
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
  // border: 1px solid red;
  // background-color: pink;
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
  // border: 1px solid red;
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

export const MenuBox = styled.View<InputProps>`
  // border: 1px solid red;
  width: ${({width}) => (width ? width : '70px')};
  height: ${({height}) => (height ? height : '70px')};
  margin: ${({margin}) => (margin ? margin : '0px')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: skyblue;*/
`;

export const CommitBox = styled.TouchableOpacity<InputProps>`
  /* border: 1px solid red; */
  width: ${({width}) => (width ? width : '70px')};
  height: ${({height}) => (height ? height : '70px')};
  margin: ${({margin}) => (margin ? margin : '0px')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: skyblue; */
`;

export const RecentDataBox = styled.TouchableOpacity<InputProps>`
  // border: 1px solid red;
  width: ${({width}) => (width ? width : '70px')};
  height: ${({height}) => (height ? height : '70px')};
  margin: ${({margin}) => (margin ? margin : '0px')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: skyblue; */
`;

export const Img = styled.Image`
  width: 60%;
  height: 92%;
`;

export const HiddenContainer = styled.View<InputProps>`
  display: ${({display}) => (display ? display : 'none')};
  /* background-color: blue; */
  height: 50%;
  width: 100%;
  /* align-items: center; */
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: yellow;*/
`;

export const ButtonBox = styled.TouchableOpacity`
  width: 80px;
  height: 38px;
  margin-left: 7px;
  margin-right: 7px;
  background-color: ${colors.label};
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  padding: 3px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
