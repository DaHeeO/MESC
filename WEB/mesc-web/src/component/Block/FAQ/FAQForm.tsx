// React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import * as S from "./FAQForm.styles";
import * as C from "../../common/theme";

// api
import { api } from "../../../apis/Api";
import { useRecoilState } from "recoil";
import { FAQState } from "../../../state/FAQState";

// function

interface TableProps {
  data: any;
  onCancel: () => void;
}

export const FAQForm: React.FC<TableProps> = ({ data, onCancel }) => {
  const [selectedItem, setSelectedItem] = useRecoilState(FAQState);

  const handleCancelButtonClick = () => {
    setSelectedItem(null);
    onCancel();
  };

  return (
    <S.RightBody>
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
          <S.BlueButton onClick={handleCancelButtonClick}>
            <S.Text size={16} color={"#ffffff"} weight={500}>
              취소하기
            </S.Text>
          </S.BlueButton>
        </S.TableContainer>
      </S.Total>
    </S.RightBody>
  );
};
