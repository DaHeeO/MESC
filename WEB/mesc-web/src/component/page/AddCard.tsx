//React
import { useState } from "react";
//style
import * as S from "./AddCard.styles";
//recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { CardIdState } from "../../state/CardIdState";
//mui
// component
import { ComponentIdSwitch } from "../form/SwitchForm";
import { Card, CardState } from "../../state/create/BlockState";
import { CardListState } from "../../state/create/BlockState";
import LinkModal from "../common/modal/LinkModal";
import Trash from "../../assets/icon/trash.svg";

interface AddCardProps {
  key: number;
  content: string;
  id?: number;
  clickDelete: () => any;
}

export const AddCardComponent = (props: { card: Card }) => {
  const [cardList, setCardList] = useRecoilState(CardListState);
  const card = props.card;

  const componentId: string = useRecoilValue(CardIdState);
  // reactNode를 반환함
  // const component = ComponentIdSwitch({ ComponentId: card.cardType });

  const deleteCard = (id?: number, sequence?: number) => {
    if (id !== undefined) {
      const updatedCardList = cardList.filter((card) => card.id !== id);
      setCardList(updatedCardList);
    } else {
      const updatedCardList = cardList.filter(
        (card) => card.sequence !== sequence
      );
      setCardList(updatedCardList);
    }
  };

  const typeChange = (cardType: any) => {
    // console.log(cardType);
    // const updatedCard = { ...card, /* 수정된 속성 추가 */ };
    setCardList((prevCards) =>
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
        {/* <LinkModal card={card} btnIndex={0} /> */}
        <img
          width={18}
          height={18}
          src={Trash}
          onClick={() => deleteCard(card.id, card.sequence)}
        />
      </S.CardHeader>

      <S.InnerContainer width="100%" height="90%" flexDirection="column">
        {/* 카드 내 contentForm */}
        <ComponentIdSwitch card={card} />
      </S.InnerContainer>
    </S.CardContainer>
  );
};
