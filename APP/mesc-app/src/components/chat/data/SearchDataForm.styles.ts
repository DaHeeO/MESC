import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  border: 3px solid blue;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
`;

export const SearchInput = styled.View`
  border: 3px solid red;
  width: 350px;
  height: 60px
  background-color: ${colors.quaternary};
  border-radius: 20px;
  margin: 20px;
  justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.View`
  border: 3px solid green;
  height: 85%;
`;

export const ButtonRow = styled.View`
  border: 3px solid yellow;
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonName = styled.Text`
  border: 3px solid blue;
  height: 50px;
  width: 250px;
`;

export const SearchBtn = styled.View``;

export const Button = styled.View`
  border: 3px solid black;
  width: 50px;
  height: 50px;
`;
