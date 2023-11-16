import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

export const ChatbotBox = styled.View`
  width: 260px;
  height: 190px;
  display: flex;
  border-radius: 10px;
  margin-top: 10px;
  background-color: ${colors.icy};
  margin-bottom: 12px;
`;

export const TopBox = styled.View`
  flex: 3;
  flex-direction: row;
  display: flex;
  background-color: ${colors.iris};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const NameBox = styled.View`
  width: 45%;
  // background-color: green;
  heigth: 100%;
`;

export const ImgBox = styled.View`
  width: 55%;
  display: flex;
  // background-color: yellow;
  heigth: 100%;
  align-items: center;
`;

export const Img = styled(Image)`
  width: 120px;
  height: 60px;
  margin-top: auto;
  margin-right: 10px;
`;

export const MidBox = styled.View`
  flex: 1;
  background-color: ${colors.icy};
  justify-content: center;
  margin-left: 10px;
`;

export const BottomBox = styled.View`
  flex: 1.5;
  display: flex;
  background-color: ${colors.icy};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  // background-color: pink;
`;
