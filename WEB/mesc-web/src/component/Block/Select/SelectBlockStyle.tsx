import styled from "styled-components";

export const CustomTable = styled.table`
  width: 90%;
  height: 90%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;
export const HoverTd = styled.td`
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: initial;

  &:hover {
    background-color: lightblue;
  }
`;
