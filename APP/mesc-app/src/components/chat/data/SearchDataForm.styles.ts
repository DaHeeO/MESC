import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  // border: 3px solid blue;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
`;

export const InputContainer = styled.View`
  // border: 3px solid aqua;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.View`
  // border: 3px solid red;
  width: 350px;
  height: 50px;
  background-color: ${colors.quaternary};
  border-radius: 20px;
  margin: 20px;
  flex-direction: row;
  align-items: center;
`;

export const SearchText = styled.TextInput`
  flex: 1;
  height: 50px;
  // margin-left: 10px;
  font-size: 15px;
  // background-color: pink;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  // border: 3px solid green;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonRow = styled.TouchableOpacity`
  border-bottom-width: 0.7px;
  // border: 1px solid red;
  width: 95%;
  height: 55px;
  flex-direction: row;
  justify-content: space-around;
  // background-color: pink;
  align-items: center;
  margin-left: 10px;
`;

export const ButtonName = styled.Text`
  height: 50px;
  width: 70%;
  font-size: 16px;
  font-weight: bold;
  color: black;
  line-height: 50px;
  margin-left: 20px;
  /* border: 3px solid yellow;*/
`;

export const ImageBox = styled.View`
  justify-content: center;
  align-items: center;
  /* border: 3px solid aqua; */
  height: 50px;
  width: 50px;
  margin-left: 10px;
  /* margin-right: 20px; */
  /* background-color: aqua; */
`;
