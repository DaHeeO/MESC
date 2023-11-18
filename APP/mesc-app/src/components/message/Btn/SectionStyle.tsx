import styled from 'styled-components/native';

//Section Body
export const SectionBody = styled.View`
  //   background-color: yellow;
  box-size: border-box;
  width: 65%;
  height: 100px;
  margin-top: 10px;
`;

interface SectionContainerProps {
  width?: string;
  height?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

//Section container
export const SectionContainer = styled.View<SectionContainerProps>`
  //   border: 1px solid black;
  box-size: border-box;
  width: ${(props: SectionContainerProps) => props.width || '100%'};
  height: ${(props: SectionContainerProps) => props.height || '100%'};
  flex-direction: ${(props: SectionContainerProps) => props.direction || 'row'};
  // align-items: ${(props: SectionContainerProps) => props.align || 'center'};
  justify-content: ${(props: SectionContainerProps) =>
    props.justify || 'flex-start'};
  margin-bottom: 10px;
`;
