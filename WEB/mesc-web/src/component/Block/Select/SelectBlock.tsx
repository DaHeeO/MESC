// React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import * as S from "./SelectBlockStyle";
import * as C from "../../common/theme";

// api
import { api } from "../../../apis/Api";
// recoil
import { useRecoilState } from "recoil";
import { CreatBlockState } from "../../../state/create/AddBlock";
import { BlockState } from "../../../state/create/CreateState";
import AboutModal from "../../common/About/AboutModal";
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
  // 모달
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        handleClose();
        console.log("삭제완료");
        alert("삭제완료");
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
    <S.Total>
      {/* Header */}
      <S.TitleBox>
        <S.TitleDiv width={"18%"}>
          <S.Text size={16} color={"#94918A"} weight={500}>
            Id
          </S.Text>
        </S.TitleDiv>
        <S.TitleDiv width={"40%"}>
          <S.Text size={16} color={"#94918A"} weight={500}>
            블록 이름
          </S.Text>
        </S.TitleDiv>
        <S.TitleDiv width={"21%"} justify="center">
          <S.Text size={16} color={"#94918A"} weight={500}>
            자세히 보기
          </S.Text>
        </S.TitleDiv>
        <S.TitleDiv width={"21%"} justify="center">
          <S.Text size={16} color={"#94918A"} weight={500}>
            삭제하기
          </S.Text>
        </S.TitleDiv>
      </S.TitleBox>
      {/* Body */}
      <S.TableContainer>
        {resdata.map((item) => (
          <S.TableDiv key={item.index}>
            <S.TitleDiv width={"18%"}>
              <S.Text size={16} color={C.colors.textBlack} weight={500}>
                {item.id}
              </S.Text>
            </S.TitleDiv>
            <S.TitleDiv width={"40%"}>
              <S.Text size={16} color={C.colors.textBlack} weight={500}>
                {item.name}
              </S.Text>
            </S.TitleDiv>

            {item.id <= 14 ? (
              <S.TitleDiv width={"21%"} justify="center">
                <S.Text
                  size={16}
                  color={"#94918A"}
                  weight={500}
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                  수정불가
                </S.Text>
              </S.TitleDiv>
            ) : (
              <S.TitleDiv width={"21%"} justify="center">
                <S.BlueButton
                  onClick={() => {
                    GoBlock(item.id);
                  }}
                >
                  <S.Text size={16} color={C.colors.buttonBlue} weight={500}>
                    수정하기
                  </S.Text>
                </S.BlueButton>
              </S.TitleDiv>
            )}

            {item.id <= 14 ? (
              <S.TitleDiv width={"21%"} justify="center">
                <S.Text
                  size={16}
                  color={"#94918A"}
                  weight={500}
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                  삭제불가
                </S.Text>
              </S.TitleDiv>
            ) : (
              <S.TitleDiv width={"21%"} justify="center">
                {/* <S.RedButton
                  onClick={() => {
                    const shouldDelete = window.confirm("삭제하시겠습니까?");
                    if (shouldDelete) {
                      deleteBlock(item.id);
                    }
                  }}
                >
                  <S.Text size={16} color={C.colors.buttonRed} weight={500}>
                    삭제하기
                  </S.Text>
                </S.RedButton> */}
                <AboutModal
                  deleteBlock={deleteBlock}
                  itemId={item.id}
                  chatbotTitle={item.id}
                />
              </S.TitleDiv>
            )}
          </S.TableDiv>
        ))}
      </S.TableContainer>
    </S.Total>
  );
};
