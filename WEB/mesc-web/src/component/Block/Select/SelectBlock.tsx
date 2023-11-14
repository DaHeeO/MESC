// React
import React, { useEffect, useState } from "react";
// style
import { OutlinedBtn } from "../../common/About/AboutBtn";
import { CustomTable } from "./SelectBlockStyle";
// api
import { api } from "../../../apis/Api";
// recoil
import { useRecoilState } from "recoil";
import { CreatBlockState } from "../../../state/create/AddBlock";

interface TableProps {
  data: {
    index: number;
    BlockName: string;
    BlockContent: string;
  }[];
}

export const SelectBlock: React.FC<TableProps> = ({ data }) => {
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
  // 삭제하기 ============================>
  const deleteBlock = (id: number) => {
    setBlockImpo((prevBlockState) => ({
      ...prevBlockState,
      blockInfo: {
        ...prevBlockState.blockInfo,
        isEditable: true,
      },
    }));
    // console.log("id==============", blockImpo.blockInfo.isEditable);
    api
      .delete(`block/admin/all/${id}`)
      .then((res) => {
        // Fetch data again after successful deletion
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

        console.log("삭제완료");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //  ====================================>

  return (
    <CustomTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>자세히 보기</th>
          <th>삭제하기</th>
        </tr>
      </thead>
      <tbody>
        {resdata.map((item: any) => (
          <tr key={item.index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <OutlinedBtn content={"자세히 보기"} />
            </td>
            <td>
              <OutlinedBtn
                content={"삭제하기"}
                onClick={() => deleteBlock(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </CustomTable>
  );
};
