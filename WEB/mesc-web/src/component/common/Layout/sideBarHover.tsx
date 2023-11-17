import styled from "styled-components";

export const HoverContainer = styled.div`
  height: 10%;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(25, 35, 75, 0.25);
    border-bottom: 1px solid #19234b;
  }
`;
