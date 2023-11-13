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
  justify-content: center;
  align-items: center;
`;

interface TextBoxProps {
  color?: string;
}
export const TextBox = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: ${(props: TextBoxProps) => props.color || 'black'};
`;

interface SelectBoxProps {
  backgroundColor?: string;
  height?: string;
}

// 버튼 Style
export const ButtonContainer = styled.TouchableOpacity<SelectBoxProps>`
  background-color: ${(props: SelectBoxProps) =>
    props.backgroundColor || '#7879f1'};
  width: 50%;
  height: ${(props: SelectBoxProps) => props.height || '80%'};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
