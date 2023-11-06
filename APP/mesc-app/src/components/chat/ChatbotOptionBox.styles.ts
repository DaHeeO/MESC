import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

export const OptionBox = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataBox = styled.TouchableOpacity`
  width: 95%;
  height: 80%;
  background-color: ${colors.backgroundGray};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
