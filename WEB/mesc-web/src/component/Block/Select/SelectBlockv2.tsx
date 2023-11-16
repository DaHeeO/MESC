// React
import React, { useEffect, useState } from "react";
// style
import { CustomTable, HoverTd, TitleBox } from "./SelectBlockStyle";
// api
import { api } from "../../../apis/Api";
// recoil
import { useRecoilState } from "recoil";
import { CreatBlockState } from "../../../state/create/AddBlock";
import { BlockState } from "../../../state/create/CreateState";
import { CardListState } from "../../../state/read/GetCardList";
import { LinkIdState } from "../../../state/linkId";

import * as S from "./SelectBlockv2.styles";
import * as C from "../../common/theme";

interface TableProps {
  type: string;
}

export const SelectBlockv2: React.FC<TableProps> = ({ type }) => {
  const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
  const [resdata, setResData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // recoil에서 block값 가져오기
  const [cardList, setCardList] = useRecoilState(CardListState);
  const [linkId, setLinkId] = useRecoilState(LinkIdState);
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

  // 단일 블록 조회하기 ============================>
  const SelectTheBlock = (id: number) => {
    api
      .post(`/block/${id}`, {})
      .then((res) => {
        // console.log("id=======", res);
        // console.log("card(결과값)=======", res.request.response.data);
        console.log(res.data.data.cardList);
        setCardList(res.data.data.cardList);
        setBlockInfo({
          id: id,
          name: res.data.data.blockName,
        });
        // console.log("res==================", res.data.data.blockName);
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
        {resdata.map((item: any) => (
          <S.TableDiv
            key={item.id}
            onClick={() => {
              if (type == "linkModal") {
                setLinkId(item.id);
              } else if (type == "modify") {
                if (item.id <= 14) {
                  alert("이 블록은 수정할 수 없습니다.");
                } else if (item.id === 1035) {
                  alert("이 블록은 수정할 수 없습니다.");
                } else {
                  SelectTheBlock(item.id);
                }
              }
            }}
            className={item.id <= 16 || item.id === 1035 ? "disabled-row" : ""}
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
