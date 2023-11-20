//React
import { useEffect, useState } from "react";
//style
import * as S from "../../../component/page/AddCard.styles";
//recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { CardIdState } from "../../../state/CardIdState";
//mui
// component
import { ComponentIdSwitch } from "../../../component/form/SwitchForm";
import { Card, CardState } from "../../../state/create/BlockState";
import { ModalCardListState } from "../../../state/create/BlockState";

interface AddCardProps {
  key: number;
  content: string;
  id?: number;
  clickDelete: () => any;
}

export const AddCardComponent = (props: { card: Card }) => {
  const [cardList, setCardList] = useRecoilState(ModalCardListState);
  const card = props.card;

  return (
    <S.CardContainer>
      <S.InnerContainer width="100%" height="90%" flexDirection="column">
        {/* 카드 내 contentForm */}
        <ComponentIdSwitch card={card} />
      </S.InnerContainer>
    </S.CardContainer>
  );
};
