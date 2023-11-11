import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  // border: 1px solid green;
  // overflow: hidden;
`;

export const Header = styled.View`
  width: 100%;
  height: 30px;
  // border: 1px solid red;
`;

export const Title = styled.Text``;

export const Button = styled.View``;

export const Body = styled.View`
  // overflow: hidden;
  width: 100%;
  flex: 1;
  border: 1px solid ${colors.secondary};
`;

export const ColumnInfoBox = styled.View`
  background-color: ${colors.quaternary};
  padding: 2px;
  border: 0.8px solid ${colors.secondary};
  width: 90px;
  min-height: 25px;
  align-items: center;
  justify-content: center;
`;

export const CellBox = styled.View`
  padding: 1px;
  border: 0.8px solid ${colors.secondary};
  width: 90px;
  min-height: 25px;
  align-items: center;
  justify-content: center;
`;

export const ColumnName = styled.Text``;

export const ColumnType = styled.Text``;

export const Cell = styled.Text``;
