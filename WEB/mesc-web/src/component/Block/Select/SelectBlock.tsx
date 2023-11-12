// React
import React from "react";
// style
import { OutlinedBtn } from "../../common/About/AboutBtn";
import { CustomTable } from "./SelectBlockStyle";

interface TableProps {
  data: {
    index: number;
    BlockName: string;
    BlockContent: string;
    // BlockDetail: () => {};
  }[];
}

export const SelectBlock: React.FC<TableProps> = ({ data }) => {
  return (
    <CustomTable>
      <thead>
        <tr>
          <th>Index</th>
          <th>이름</th>
          <th>내용</th>
          <th>자세히 보기</th>
          <th> 삭제하기</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.index}>
            <td>{item.index}</td>
            <td>{item.BlockName}</td>
            <td>{item.BlockContent}</td>
            <td>
              <OutlinedBtn content={"자세히 보기"} />
            </td>
            <td>
              <OutlinedBtn content={"삭제하기"} />
            </td>
          </tr>
        ))}
      </tbody>
    </CustomTable>
  );
};
