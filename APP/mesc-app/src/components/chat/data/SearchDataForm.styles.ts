import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  //   border: 3px solid blue;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
`;

export const SearchInput = styled.View`
  //   border: 3px solid red;
  width: 350px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 20px;
  margin: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ImageBox = styled.View`
  justify-content: center;
  align-items: center;
  //   border: 3px solid aqua;
  height: 50px;
  width: 50px;
  margin-left: 10px;
`;

export const SearchText = styled.TextInput`
  //   border: 3px solid black;
  height: 50px;
  margin-left: 5px;
  font-size: 15px;
`;

export const ButtonContainer = styled.View`
  //   border: 3px solid green;
  height: 85%;
`;

export const ButtonRow = styled.View`
  //   border-bottom-width: 0.7px;
  //   border: 1px solid red;
  //   width: 200px;
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonName = styled.Text`
  //   border: 3px solid blue;
  height: 50px;
  width: 250px;
  font-size: 15px;
  font-weight: bold;
  color: black;
  line-height: 50px;
  margin-left: 10px;
`;
