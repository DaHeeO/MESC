import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  background-color: ${colors.icy};
  flex-direction: column;
  flex: 1;
  // border: 1px solid green;
  // overflow: hidden;
  // background-color: blue;
  height: 85%;
`;

export const Table = styled.View`
  flex: 1;
  background-color: aqua;
  border: 3px solid black;
`;

export const Header = styled.View`
  width: 100%;
  height: 30px;
  border: 1px solid red;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
`;

export const Button = styled.View``;

export const Body = styled.View`
  // overflow: hidden;
  width: 100%;
  flex: 1;
  // flex-direction: column;
  border: 1px solid ${colors.secondary};
  border: 1px solid red;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: yellow;
`;

export const ColumnInfoBox = styled.View`
  background-color: ${colors.quaternary};
  padding: 2px;
  border: 0.8px solid ${colors.secondary};
  width: 90px;
  min-height: 25px;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`;

export const CellBox = styled.View`
  padding: 1px;
  border: 0.8px solid ${colors.secondary};
  width: 90px;
  min-height: 25px;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`;

export const ColumnName = styled.Text``;

export const ColumnType = styled.Text``;

export const Cell = styled.Text``;

export const ModalContainer = styled.View`
  background-color: ${colors.icy};
  border: 1px solid green;
  height: 82%;
  margin-top: 58px;
  // flex: 1;
  // margin-top: 58px;
  // align-items: center;
  align-content: center;
  justify-content: center;
  // background-color: aqua;
`;
