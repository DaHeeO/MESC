import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: 'center';
  justify-content: 'center';
  overflow: 'visible';
`;

export const PressableContainer = styled.Pressable`
  height: 60px;
  width: 60px;
  justify-content: 'center';
  align-items: 'center';
  z-index: 2;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: 'rgba(33, 34, 38, 1)';
  margin-top: 6px;
`;
