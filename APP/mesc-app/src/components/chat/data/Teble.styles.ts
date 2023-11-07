import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  border: 1px solid green;
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

export const ColumnName = styled.Text`
  background-color: ${colors.quaternary};
  padding: 3px;
  border: 0.7px solid ${colors.secondary};
  height: 30px;
  text-align: center;
  justify-content: center;
`;

export const ColumnType = styled.Text`
  background-color: ${colors.quaternary};
  padding: 3px;
  border: 0.7px solid ${colors.secondary};
  height: 30px;
  text-align: center;
  justify-content: center;
`;

export const Cell = styled.Text`
  padding: 3px;
  border: 0.7px solid ${colors.secondary};
  height: auto;
  text-align: center;
  justify-content: center;
`;
