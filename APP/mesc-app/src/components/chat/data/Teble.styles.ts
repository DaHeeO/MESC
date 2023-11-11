import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

interface TableContainerProps {
  width?: string;
  height?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Container = styled.View<TableContainerProps>`
  // border: 1px solid green;
  flex: 1;
  width: ${props => props.width};
  height: ${props => props.height};
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
`;

export const Header = styled.View`
  // border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 50px;
`;

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

export const ColumnType = styled.Text`
  text-size: 8px;
`;

export const Cell = styled.Text``;
