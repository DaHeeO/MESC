import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  flex-direction: column;
  width: auto;
  height: 190px;
  border: 1px solid green;
  align-items: center;
  // justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 30px;
  border: 1px solid red;
`;

export const Title = styled.Text``;

export const Button = styled.View``;

export const Body = styled.View`
  height: 160px;
  border: 1px solid black;
`;

export const ColumnName = styled.Text`
  background-color: #f0f0f0;
  padding: 5px;
  border: 1px solid #ddd;
  width: 80px;
  height: 30px;
  /* 추가적인 스타일링 */
`;

export const ColumnType = styled.Text`
  background-color: #e7e7e7;
  padding: 5px;
  border: 1px solid #d0d0d0;
  width: 80px;
  height: 30px;
  /* 추가적인 스타일링 */
`;

export const Cell = styled.Text`
  padding: 5px;
  border: 1px solid #ddd;
  width: 80px;
  height: 30px;
  /* 추가적인 스타일링 */
`;
