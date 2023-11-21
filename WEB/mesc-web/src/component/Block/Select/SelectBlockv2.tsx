// React
import React, { useEffect, useState } from "react";
// api
import { api } from "../../../apis/Api";
// recoil
import { useRecoilState } from "recoil";
import { CreatBlockState } from "../../../state/create/AddBlock";
import {
  BlockListState,
  BlockState,
  CardListState,
} from "../../../state/create/BlockState";
import { LinkIdState } from "../../../state/linkId";

import * as S from "./SelectBlockv2.styles";
import * as C from "../../common/theme";

interface TableProps {
  type: string;
}

export const SelectBlockv2: React.FC<TableProps> = ({ type }) => {
  // block List 저장
  const [blockList, setBlockList] = useRecoilState(BlockListState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // recoil에서 block값 가져오기
  const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
  const [cardList, setCardList] = useRecoilState(CardListState);
  const [linkId, setLinkId] = useRecoilState(LinkIdState);
  // 데이터 조회하기 ============================>

  useEffect(() => {
    api
      .get("/block/admin")
      .then((res) => {
        setBlockList(res.data.data);
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

  // 단일 블록 조회하기 ============================>
  const SelectTheBlock = (id: number) => {
    api
      .get(`/block/admin/${id}`, {})
      .then((res) => {
        setBlockInfo(res.data.data.blockInfo);
        setCardList(res.data.data.cardResList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //===================================================>
  return (
    <S.Total>
      {/* header */}
      <S.TitleBox>
        <S.TitleDiv width={"30%"}>
          <S.Text size={16} color={"#94918A"} weight={500}>
            Id
          </S.Text>
        </S.TitleDiv>
        <S.TitleDiv width={"70%"}>
          <S.Text size={16} color={"#94918A"} weight={500}>
            블록 이름
          </S.Text>
        </S.TitleDiv>
      </S.TitleBox>
      {/* body */}
      <S.TableContainer>
        {blockList.map((item: any) => (
          <S.TableDiv
            key={item.id}
            onClick={() => {
              if (type == "linkModal") {
                setLinkId(item.id);
              } else if (type == "modify") {
                // if (item.id <= 14) {
                //   alert("이 블록은 수정할 수 없습니다.");
                // } else if (item.id === 1035) {
                //   alert("이 블록은 수정할 수 없습니다.");
                // } else {
                SelectTheBlock(item.id);
                // }
              }
            }}
            // className={item.id <= 16 || item.id === 1035 ? "disabled-row" : ""}
          >
            <S.TableDiv key={item.Index}>
              <S.TitleDiv width={"30%"}>
                <S.Text size={16} color={C.colors.textBlack} weight={500}>
                  {item.id}
                </S.Text>
              </S.TitleDiv>

              <S.TitleDiv width={"70%"}>
                <S.Text size={16} color={C.colors.textBlack} weight={500}>
                  {item.name}
                </S.Text>
              </S.TitleDiv>
            </S.TableDiv>
          </S.TableDiv>
        ))}
      </S.TableContainer>
    </S.Total>
  );
};
