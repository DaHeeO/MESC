// React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import * as S from "./FAQBlock.styles";
import * as C from "../../common/theme";

// api
import { api } from "../../../apis/Api";
import { useRecoilState } from "recoil";
import { FAQState } from "../../../state/FAQState";

// function

interface TableProps {
  data: any[];
  focusedIndex: number;
}

export const FAQBlock: React.FC<TableProps> = ({ data, focusedIndex }) => {
  const [resdata, setResData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useRecoilState(FAQState);

  // 걸러진 데이터
  // recoil에서 block값 가져오기

  // 데이터 조회하기 ============================>

  useEffect(() => {
    const apiUrl = focusedIndex === 0 ? "/faq/all" : `/faq/all/${focusedIndex}`;

    api
      .get(apiUrl)
      .then((res) => {
        setResData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("데이터를 조회하는데 실패하였습니다.");
        setLoading(false);
      });
  }, [focusedIndex]);

  const handleTableDivClick = (item: any) => {
    setSelectedItem(item);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  //  ====================================>

  return (
    <S.Total>
      {/* Header */}
      <S.TitleBox>
        <S.TitleDiv width={"18%"}>
          <S.Text size={16} color={"#94918A"} weight={500}>
            Id
          </S.Text>
        </S.TitleDiv>
        <S.TitleDiv width={"25%"}>
          <S.Text size={16} color={"#94918A"} weight={500}>
            카테고리
          </S.Text>
        </S.TitleDiv>
        <S.TitleDiv width={"58%"}>
          <S.Text size={16} color={"#94918A"} weight={500}>
            질문
          </S.Text>
        </S.TitleDiv>
      </S.TitleBox>
      {/* Body */}
      <S.TableContainer>
        {resdata.map((item) => (
          <S.TableDiv
            key={item.id}
            onDoubleClick={() => handleTableDivClick(item)}
          >
            <S.TitleDiv width={"18%"}>
              <S.Text size={16} color={C.colors.textBlack} weight={500}>
                {item.id}
              </S.Text>
            </S.TitleDiv>
            <S.TitleDiv width={"25%"}>
              <S.Text size={16} color={C.colors.textBlack} weight={500}>
                {item.section.name}
              </S.Text>
            </S.TitleDiv>

            <S.TitleDiv width={"58%"}>
              <S.Text size={16} color={C.colors.textBlack} weight={500}>
                {item.question.length > 25
                  ? item.question.slice(0, 22) + "..."
                  : item.question}
              </S.Text>
            </S.TitleDiv>
          </S.TableDiv>
        ))}
      </S.TableContainer>
    </S.Total>
  );
};
