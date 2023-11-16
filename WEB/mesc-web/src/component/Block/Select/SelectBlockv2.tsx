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
import { CardListState } from "../../../state/read/GetCardList";

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
  const [cardList, setCardList] = useRecoilState(CardListState);
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
        console.log("id=======", res);
        console.log("card(결과값)=======", res.request.response.data);
        setCardList((prevCardList) => ({
          ...prevCardList,
          result: res.request.response,
        }));
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
                if (item.id > 16 && item.id !== 1035) {
                  SelectTheBlock(item.id);
                } else if (item.id <= 16) {
                  alert("이 블록은 수정할 수 없습니다.");
                } else if (item.id === 1035) {
                  alert("이 블록은 수정할 수 없습니다.");
                }
              }}
              className={
                item.id <= 16 || item.id === 1035 ? "disabled-row" : ""
              }
            >
              {item.name}
            </HoverTd>
          </tr>
        ))}
      </tbody>
    </CustomTable>
  );
};
