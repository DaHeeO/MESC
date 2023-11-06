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
  // background-color: red;
  font-weight: bold;
  font-size: 20;
  color: ${(props: TextBoxProps) => props.color || 'black'};
`;

// 버튼 Style
export const ButtonContainer = styled.TouchableOpacity`
  background-color: #5d5fef;
  width: 50%;
  height: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
