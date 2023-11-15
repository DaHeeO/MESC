//React
import { useState } from "react";
//style
import * as S from "../../pages/AddBlock/AddStyle";
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
    setCards(cards.filter((nowCard) => nowCard.id !== card.id));
  };

  const typeChange = (cardType: any) => {
    console.log(cardType);
    // const updatedCard = { ...card, /* 수정된 속성 추가 */ };
    setCards((prevCards) =>
      prevCards.map((nowCard) =>
        nowCard.id === props.card.id
          ? { ...nowCard, cardType: cardType }
          : nowCard
      )
    );
    // setCards(
    //   cards.map((nowCard) => {
    //     if (nowCard.id == card.id) {
    //       nowCard.cardType = cardType;
    //     }
    //     return nowCard;
    //   })
    // );
  };

  return (
    <S.CardContainer>
      <S.InnerContainer width="100%" height="85%" flexDirection="column">
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
            {card.id}
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
              placeholder={card.name}
              onChange={(e) => {
                setCards((prevCards) =>
                  prevCards.map((nowCard) =>
                    nowCard.id === props.card.id
                      ? { ...nowCard, name: e.target.value }
                      : nowCard
                  )
                );
              }}
              style={{ width: "90%", height: "90%" }}
            />
          </S.InnerContainer>
          {/* 카드 종류자리_cardType*/}
          <S.InnerContainer
            width="30%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            {/* 카드 type 선택 */}
            <SelectLabels onType={typeChange} />
          </S.InnerContainer>
        </AboutContainer>
        {/* 카드 내 contentForm */}
        {/* ==================================== */}
        <ComponentIdSwitch card={card} />
        {/* ==================================== */}
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
          <Button variant="contained" size="small" onClick={deleteCard}>
            삭제
          </Button>
        </S.InnerContainer>
      </S.InnerContainer>
    </S.CardContainer>
  );
};