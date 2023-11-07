import styled from 'styled-components/native';
interface FormContainerProps {
  width?: string;
  height?: string;
  justify?: string;
  align?: string;
  direction?: string;
}

export const FormContainer = styled.View`
  width: ${(props: FormContainerProps) => props.width || '100%'};
  height: ${(props: FormContainerProps) => props.height || '100%'};
  flex-direction: ${(props: FormContainerProps) => props.direction || 'row'};
  justify-content: ${(props: FormContainerProps) => props.justify || 'center'};
  align-items: ${(props: FormContainerProps) => props.align || 'center'};
`;

export const TextBtn = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;

export const ConditionBtnContainer = styled.TouchableOpacity`
  width: 51;
  height: 30;
  padding: 8px 12px;
  justifycontent: center;
  alignitems: center;
  flexdirection: row;
  borderradius: 8;
  backgroundcolor: #5d5fef;
`;
