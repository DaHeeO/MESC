import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Card } from "../../../state/create/BlockState";
import * as S from "./ModalCH1Form.styles";

interface ComponentBtnProps {
  card: Card;
  index: number;
}

export const ComponentBtn: React.FC<ComponentBtnProps> = ({ card, index }) => {
  return (
    <S.Button>
      <S.ButtonText
        placeholder="버튼을 입력하세요"
        value={card.componentList[index].object.name}
      />
    </S.Button>
  );
};
