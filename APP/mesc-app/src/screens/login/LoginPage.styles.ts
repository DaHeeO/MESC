import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const BackgroundImg = styled(Image)`
  position: absolute;
  width: 100%;
  object-fit: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const NnoxContainer = styled.View`
  // width: 40%;
  // height: 60%;
  flex-direction: column;
`;

export const SubContainer = styled.View`
  width: 90%;
  height: 100%;
  // background-color: yellow;
`;

export const Knox = styled(Image)``;

export const KnoxText = styled(Image)``;

export const Header = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  height: 10%;
  // background-color: red;
  padding-top: 30px;
`;

export const Logo = styled.View`
  // background-color: yellow;
  flex-direction: row;
  align-items: center;
`;
export const SDI = styled(Image)`
  // width: 100px;
  // width: 10%;
`;

export const MESC = styled.Text`
  color: #064f9e;
  font-size: 25px;
  font-weight: bold;
`;

export const Body = styled.View`
  height: 65%;
  padding-top: 15%;
  // background-color: blue;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.View`
  width: 300px;
  height: 150px;
  // background-color: green;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.View`
  width: 300px;
  height: 100px;
  // background-color: pink;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  width: 300px;
  height: 30px;
  // background-color: gray;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Bottom = styled.View`
  height: 10%;
  align-items: center;
  height: 15%;
  // background-color: green;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70px;
  background-color: #eeeeff;
  // background-color: yellow;
  border-radius: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.header};
`;

export const Icon = styled.View`
  margin-right: 10px;
  color: ${colors.header};
`;
