import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../common/Theme';

export const ReportFormContainer = styled.View`
  // background-color: yellow;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

interface ReportContainerProps {
  height?: string;
  width?: string;
  justifyContent?: string;
  alignItems?: string;
  direction?: string;
}
export const Text = styled.Text`
  font-size: 15px;
  // line-height: 15px;
  // margin-left: 3px;
`;

export const ReportContainer = styled.View<ReportContainerProps>`
  margin-left: 10px;
  margin-right: 5px;
  // border: 1px solid blue;
  box-sizing: border-box;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.direction || 'rows'};
  // flex-shrink: 0;
  // padding-left: 5px;
  // padding-right: 5px;
  // background-color: aqua;
`;
////////////////////////////////////////////////////////////
export const SendBtn = styled.TouchableOpacity`
  margin-right: 30px;
  width: 70px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #3c56a0;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-size: 15px;
  gap: 10px;
  background: #3c56a0;
`;

export const AddPersonBtn = styled.TouchableOpacity`
  width: 70px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #000;
  display: inline-flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #fff;
  // margin-right: 10px;
  // flex-shrink: 0;
`;

export const ReportText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding-left: 15px;
  height: 100%;
  width: 100%;
  // flex-shrink: 0;
  line-height: 40px;
`;

export const ReportText2 = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
  padding-left: 15px;
  height: 100%;
  width: 100%;
  // flex-shrink: 0;
  line-height: 40px;
`;

export const SendText = styled.Text`
  // font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const ContactBtn = styled.Text`
  // font-weight: bold;
  font-size: 14px;
  color: ${colors.primary};
`;

export const ReportTextInput = styled.TextInput`
  font-size: 15px;
  width: 95%;
  border-radius: 7px;
  border-width: 1px;
  border-color: #000;
  padding: 7px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 200px;
  background-color: #ffffff;
  // background-color: green;
`;

export const CustomTextArea = styled.TextInput`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  border-width: 1px;
  border-color: #000;
  width: 370px;
  height: 60%;
  flex-shrink: 1;
  border-radius: 12px;
  background-color: #fff;
  margin-top: 10px;
  // background-color: pink;
`;

export const UserTag = styled.TouchableOpacity`
  background-color: ${colors.backgroundLight};
  flex-direction: row;
  border-radius: 14px;
  padding: 2px 5px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 17px;
  margin-left: 4px;
  // background-color: pink;
`;

export const ReportTouchContainer = styled.TouchableOpacity<ReportContainerProps>`
  // border: 1px solid blue;
  box-sizing: border-box;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.direction || 'rows'};
  flex-shrink: 0;
  // background-color: #3c56a0;
  border-radius: 10px;
  // background-color: skyblue;
`;

export const IconBox = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameBox = styled.View`
  with: 150px;
  // background-color: red;
  justify-content: flex-start;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  // justify-content: center;
`;

export const Header = styled(Image)`
  width: 370px;
  height: 120px;
  margin-top: 10px;
`;
