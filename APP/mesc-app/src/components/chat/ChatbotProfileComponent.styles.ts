import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  // margin-bottom: 10px;
  // background-color: yellow;
  height: 40px;
`;

export const ImgBox = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${colors.lightiris};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const NameBox = styled.View`
  margin-left: 5px;
  align-items: center;
  justify-content: center;
`;

export const Img = styled(Image)`
  width: 29px;
  height: 15px;
`;
