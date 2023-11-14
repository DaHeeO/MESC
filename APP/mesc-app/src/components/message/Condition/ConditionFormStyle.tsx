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
  border: 1px solid green;
`;

export const Header = styled.View`
  width: 95%
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
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
  font-size: 16;
  color: ${(props: TextBoxProps) => props.color || 'black'};
`;

interface SelectBoxProps {
  backgroundColor?: string;
  height?: string;
}

// 버튼 Style
export const ButtonContainer = styled.TouchableOpacity<SelectBoxProps>`
  background-color: ${(props: SelectBoxProps) =>
    props.backgroundColor || '#3C56A0'};
  width: 70%;
  height: ${(props: SelectBoxProps) => props.height || '100%'};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
