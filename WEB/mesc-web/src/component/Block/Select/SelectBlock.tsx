// React
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// style
import { OutlinedBtn } from "../../common/About/AboutBtn";
import { CustomTable } from "./SelectBlockStyle";
// api
import { api } from "../../../apis/Api";
// recoil
import { useRecoilState } from "recoil";
import { CreatBlockState } from "../../../state/create/AddBlock";
import { BlockState } from "../../../state/create/CreateState";
// function

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
  const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
  const navigate = useNavigate();

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

  // 더미데이터 삭제
  // const deleteAllBlocks = async () => {
  //   try {
  //     for (let id = 9057; id <= 18741; id++) {
  //       await api
  //         .delete(`block/admin/all/${id}`)
  //         .then(() => {
  //           console.log(`ID ${id} 삭제 완료`);
  //         })
  //         .catch((err) => {
  //           setError("데이터를 삭제하는데 실패하였습니다.");
  //           setLoading(false);
  //           console.error(err);
  //         });
  //     }
  //     // 여기서 필요한 업데이트 작업을 수행할 수 있습니다.
  //     // setResData 등등...
  //   } catch (err) {
  //     setError("데이터를 삭제하는데 실패하였습니다.");
  //     setLoading(false);
  //     console.error(err);
  //   }
  // };

  // // 호출하여 실행
  // useEffect(() => {
  //   deleteAllBlocks();
  // }, []);
  //====================================================

  //  ====================================>
  // 단일 블록 조회하기 ============================>
  const GoBlock = (id: number) => {
    api
      .post(`/block/${id}`, {})
      .then((res) => {
        setBlockInfo((prevBlockState) => ({
          ...prevBlockState,
          blockInfo: {
            ...prevBlockState.blockInfo,
            name: res.data.data.blockName,
          },
        }));
        console.log("GoBlock", res);
        navigate(`/Modify`);
      })
      .catch((err) => {
        console.log("err==================");
        console.log(err);
      });
  };

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
        {resdata.map((item) => (
          <tr key={item.index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              {item.id <= 14 ? (
                <span></span>
              ) : (
                <OutlinedBtn
                  content={"자세히 보기"}
                  onClick={() => {
                    GoBlock(item.id);
                  }}
                />
              )}
            </td>
            <td>
              {item.id <= 14 ? (
                <span></span>
              ) : (
                <OutlinedBtn
                  content={"삭제하기"}
                  onClick={() => {
                    deleteBlock(item.id);
                  }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </CustomTable>
  );
};
