import styled from 'styled-components/native';

// 어디에서나 사용할 수 있게 만든 Container

interface AboutContainerProps {
  height?: string;
  width?: string;
  flexDirection?: 'row' | 'column'; // 'row' 또는 'column' 중 하나
  justifyContent?: 'center' | 'flex-start' | 'flex-end'; // 다른 옵션도 추가할 수 있음
  alignItems?: 'center' | 'flex-start' | 'flex-end'; // 다른 옵션도 추가할 수 있음
  backgroundColor?: string;
}

export const AboutContainer = styled.View<AboutContainerProps>`
  height: ${props =>
    props.height || 'auto'}; // 높이 props를 받고, 없으면 기본값 'auto'
  width: ${props =>
    props.width || 'auto'}; // 너비 props를 받고, 없으면 기본값 'auto'
  display: flex;
  flex-direction: ${props =>
    props.flexDirection || 'column'}; // 기본값 'column'
  justify-content: ${props =>
    props.justifyContent || 'flex-start'}; // 기본값 'flex-start'
  align-items: ${props =>
    props.alignItems || 'flex-start'}; // 기본값 'flex-start'
  background-color: ${props =>
    props.backgroundColor || 'transparent'}; // 기본값 'transparent'
`;
