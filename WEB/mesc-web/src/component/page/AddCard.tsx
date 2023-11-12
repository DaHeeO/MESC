import React, { useState } from "react";
//style
import * as S from "../../pages/AddBlock/AddStyle";
//mui
import Button from "@mui/material/Button";

interface AddCardProps {
  key: string;
  content: string;
  clickDelete: () => any;
}

export const AddCardComponent = (props: AddCardProps) => {
  return (
    <S.CardContainer key={props.key}>
      <S.InnerContainer width="100%" height="85%">
        {props.content}
      </S.InnerContainer>
      <S.InnerContainer
        width="100%"
        height="15%"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* 버튼 자리 */}
        <S.InnerContainer width="50%" height="70%" justifyContent="center">
          <Button variant="contained" size="small">
            저장
          </Button>
        </S.InnerContainer>
        <S.InnerContainer width="50%" height="70%" justifyContent="center">
          <Button variant="contained" size="small" onClick={props.clickDelete}>
            삭제
          </Button>
        </S.InnerContainer>
      </S.InnerContainer>
    </S.CardContainer>
  );
};
