import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const MadalContainer = styled.View`
  padding: 20px;
  border-radius: 6px;
  width: 100%;
  height: 82%;
  margin-top: 58px;
  background-color: ${colors.icy};
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.View`
  height: 30px;
  // background-color: pink;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
`;

export const DataContainer = styled.View`
  // background-color: skyblue;
  border: 1px solid gray;
  height: 90%;
`;
