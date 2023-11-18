import styled from "styled-components";
import { colors } from "../../common/theme";

interface TextProps {
  size: number;
  color: string;
  weight?: number;
}

interface TableProps {
  width: string;
  justify?: string | undefined;
}

export const Text = styled.text<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export const CustomTable = styled.table`
  width: 90%;
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
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: initial;

  &:hover {
    background-color: lightblue;
  }
`;

export const Total = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleBox = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleDiv = styled.div<TableProps>`
  width: ${(props) => props.width};
  padding: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};

  // border: 1px solid #ddd;
  // background-color: green;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableDiv = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const RedButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 5px;
  background-color: ${colors.buttonRedBackground};
  &:hover {
    cursor: pointer;
  }
`;

export const BlueButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 5px;
  background-color: ${colors.buttonBlueBackground};
  &:hover {
    cursor: pointer;
  }
`;
