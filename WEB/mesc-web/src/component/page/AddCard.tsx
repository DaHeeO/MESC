//React
import { useState } from "react";
//style
import * as S from "./AddCard.styles";
//recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { CardIdState } from "../../state/CardIdState";
//mui
import Button from "@mui/material/Button";
import { AboutContainer } from "../common/About/AboutContainer";
import { SelectLabels } from "../../pages/AddBlock/CardSelect";
// component
import { ComponentIdSwitch } from "../form/SwitchForm";
import { Card, CardState } from "../../state/create/CreateState";
import LinkModal from "../common/modal/LinkModal";
import Trash from "../../assest/icon/trash.svg";

interface AddCardProps {
  key: number;
  content: string;
  id?: number;
  clickDelete: () => any;
}

export const AddCardComponent = (props: { card: Card }) => {
  const [cards, setCards] = useRecoilState(CardState);
  const card = props.card;

  const componentId: string = useRecoilValue(CardIdState);
  // reactNode를 반환함
  // const component = ComponentIdSwitch({ ComponentId: card.cardType });

  const deleteCard = () => {
    setCards(cards.filter((nowCard) => nowCard.sequence !== card.sequence));
  };

  const typeChange = (cardType: any) => {
    // console.log(cardType);
    // const updatedCard = { ...card, /* 수정된 속성 추가 */ };
    setCards((prevCards) =>
      prevCards.map((nowCard) => {
        // console.log(nowCard.sequence, "   ", props.card.sequence);
        return nowCard.sequence === props.card.sequence
          ? { ...nowCard, cardType: cardType }
          : nowCard;
      })
    );
  };

  return (
    <S.CardContainer>
      <S.CardHeader>
        <LinkModal card={card} btnIndex={0} />
        <img width={18} height={18} src={Trash} onClick={deleteCard} />
      </S.CardHeader>

      <S.InnerContainer width="100%" height="90%" flexDirection="column">
        {/* 카드 내 contentForm */}
        <ComponentIdSwitch card={card} />
      </S.InnerContainer>
    </S.CardContainer>
  );
};
