import styled from 'styled-components/native';

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

export const ReportContainer = styled.View<ReportContainerProps>`
  // border: 1px solid blue;
  box-sizing: border-box;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.direction || 'rows'};
  flex-shrink: 0;
`;

export const AddPersonBtn = styled.TouchableOpacity`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #000;
  display: inline-flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #fff;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const ReportText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
`;

export const ReportTextInput = styled.TextInput`
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
`;

export const CustomTextArea = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  width: 390px;
  height: 85%;
  flex-shrink: 1;
  border-radius: 12px;
  background-color: #fff;
  margin-top: 25px;
`;

export const UserTag = styled.TouchableOpacity`
  background-color: #f5f8fc;
  flex-direction: row;
  border-radius: 14px;
  width: 70px;
  height: 70%;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
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
`;
