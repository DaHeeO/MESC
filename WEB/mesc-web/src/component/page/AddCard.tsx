import React, { useState } from "react";
//style
import * as S from "../../pages/AddBlock/AddStyle";
//mui
import Button from "@mui/material/Button";
import { AboutContainer } from "../common/About/AboutContainer";
import SelectLabels from "../../pages/AddBlock/CardSelect";

interface AddCardProps {
  key: number;
  content: string;
  id: number;
  clickDelete: () => any;
}

export const AddCardComponent = (props: AddCardProps) => {
  return (
    <S.CardContainer key={props.key}>
      <S.InnerContainer width="100%" height="85%">
        {/* 카드 헤더 */}
        <AboutContainer
          width="100%"
          height="15%"
          justifyContent="center"
          align="center"
        >
          {/* 카드 인덱스 자리_squence */}
          <S.InnerContainer
            width="10%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            {props.id}
          </S.InnerContainer>
          {/* 카드 이름 자리_name*/}
          <S.InnerContainer
            width="60%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <input
              type="text"
              placeholder={props.content}
              style={{ width: "90%", height: "90%" }}
            />
          </S.InnerContainer>
          {/* 카드 종료 자리_cardType*/}
          <S.InnerContainer
            width="30%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <SelectLabels />
          </S.InnerContainer>
        </AboutContainer>
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
