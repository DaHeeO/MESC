// React
import React, { useEffect, useState } from "react";
// style
import { CustomTable, HoverTd } from "./SelectBlockStyle";
// api
import { api } from "../../../apis/Api";
// recoil
import { useRecoilState } from "recoil";
import { CreatBlockState } from "../../../state/create/AddBlock";
import { BlockState } from "../../../state/create/CreateState";

interface TableProps {
  data: {
    index: number;
    BlockName: string;
    BlockContent: string;
  }[];
}

export const SelectBlockv2: React.FC<TableProps> = ({ data }) => {
  const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
  const [resdata, setResData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // recoil에서 block값 가져오기
  const [blockImpo, setBlockImpo] = useRecoilState(CreatBlockState);

  // 데이터 조회하기 ============================>

  useEffect(() => {
    api
      .get("/block/admin")
      .then((res) => {
        setResData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("데이터를 조회하는데 실패하였습니다.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  //  ====================================>

  //  ====================================>
  // 단일 블록 조회하기 ============================>
  const SelectTheBlock = (id: number) => {
    api
      .post(`/block/${id}`, {})
      .then((res) => {
        console.log(id);
        setBlockInfo((prevBlockState) => ({
          ...prevBlockState,
          blockInfo: {
            id: id,
            name: res.data.data.blockName,
          },
        }));
        // console.log("res==================", res.data.data.blockName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //===================================================>

  return (
    <CustomTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
        </tr>
      </thead>
      <tbody>
        {resdata.map((item: any) => (
          <tr key={item.index}>
            <td>{item.id}</td>
            <HoverTd
              onClick={() => {
                SelectTheBlock(item.id);
              }}
            >
              {item.name}
            </HoverTd>
          </tr>
        ))}
      </tbody>
    </CustomTable>
  );
};
