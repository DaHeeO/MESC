import React from "react";

import styled from "styled-components";
import { colors } from "../../component/common/theme";

interface AddProps {
  width?: string;
  height?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

export const CardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 30%;
  margin-right: 3%; // 카드 사이의 간격을 설정
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InnerContainer = styled.div<AddProps>`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
`;
