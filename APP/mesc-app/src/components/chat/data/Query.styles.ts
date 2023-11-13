import styled from 'styled-components/native';

export const Query = styled.Text`
  font-size: 15px;
`;

export const QueryContainer = styled.View`
  background-color: white;
  border: 1px solid green;
  height: 82%;
  margin-top: 58px;
  // flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;
  // background-color: aqua;
`;

export const HeaderContainer = styled.View`
  // background-color: pink;
  height: 30px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Header = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: row;
  // background-color: blue;
  // align-items: center;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-left: 5px;
  color: black;
`;

export const QueryBox = styled.TouchableOpacity`
  // width: 100%;
  flex: 1;
  padding: 20px;
  align-content: center;
  justify-content: center;
  // background-color: yellow;
`;
