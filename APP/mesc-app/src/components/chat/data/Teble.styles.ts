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
  height: ${props => props.height || '85%'};
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  background-color: ${colors.icy};
  flex-direction: column;
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
  align-items: center;
  padding-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-left: 5px;
  color: black;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  width: 100px;
  // background-color: green;
`;

export const Table = styled.View`
  flex: 1;
  // background-color: aqua;
  // border: 3px solid black;
`;

export const Body = styled.View`
  // width: 100%;
  flex: 1;
  // border: 1px solid ${colors.secondary};
  // align-items: center;
  align-content: center;
  justify-content: center;
  // background-color: yellow;
`;

export const ColumnNameBox = styled.View`
  // background-color: ${colors.backgroundGray};
  background-color: #dcdfe2;
  padding: 3px;
  border: 0.7px solid ${colors.secondary};
  min-height: 25px;
  align-items: center;
  justify-content: center;
  // border: 1px solid green;
`;

export const ColumnTypeBox = styled.View`
  // background-color: ${colors.backgroundGray};
  background-color: #dcdfe2;
  padding: 3px;
  border: 0.7px solid ${colors.secondary};
  height: 25px;
  align-items: center;
  justify-content: center;
  // border: 1px solid green;
`;

export const CellBox = styled.View`
  padding: 1px;
  border: 0.7px solid ${colors.secondary};
  min-height: 25px;
  align-items: center;
  justify-content: center;
  // border: 1px solid blue;
  // background-color: rgba(251, 224, 84, 0.3);
`;

export const ColumnName = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

export const ColumnType = styled.Text`
  color: black;
  font-size: 13px;
`;

export const Cell = styled.Text`
  color: ${colors.secondary};
  font-size: 14px;
`;

export const ModalButton = styled.TouchableOpacity``;

export const CountInfo = styled.View`
  // margin-top: 5px;
  // margin-right: 5px;
  // background-color: yellow;
`;

export const CountText = styled.Text`
  color: ${colors.secondary};
  font-size: 16px;
  font-weight: bold;
`;
