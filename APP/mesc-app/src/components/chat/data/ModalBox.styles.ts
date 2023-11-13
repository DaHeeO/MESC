import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const MadalContainer = styled.View`
  padding: 20px;
  border-radius: 6px;
  width: 100%;
  height: 80%;
  margin-top: 78px;
  background-color: ${colors.icy};
  flex-direction: column;
  justify-content: center;
  // align-items: center;
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
