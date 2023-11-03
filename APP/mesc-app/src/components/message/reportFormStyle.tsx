import styled from 'styled-components/native';

export const ReportFormContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
`;

interface ReportContainerProps {
  height?: string;
  width?: string;
}

export const ReportContainer = styled.View<ReportContainerProps>`
  //   background-color: red;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
`;
