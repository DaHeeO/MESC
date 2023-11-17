import styled from "styled-components";

interface LinkModalProps {
  width?: string;
  height?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

export const InnerBoxContainer = styled.div<LinkModalProps>`
  border: 1px solid red;
  width: ${(props) => props.width};
  height: ${(props) => props.height || "100%"};
  overflow-y: auto;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;
