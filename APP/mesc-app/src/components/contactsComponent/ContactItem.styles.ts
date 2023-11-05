import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../common/Theme';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4px;
  margin-bottom: 16px;
  width: 91%;
`;

export const Box = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageBox = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  overflow: hidden;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const InfoBox = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const BoldText = styled.Text<{size: number; color: string}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  font-weight: bold;
`;

export const RankBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 6px;
  background-color: ${colors.icy};
  border-radius: 100px;
`;
