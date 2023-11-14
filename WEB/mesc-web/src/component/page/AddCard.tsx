//React
import { useState } from "react";
//style
import * as S from "../../pages/AddBlock/AddStyle";

//mui
import Button from "@mui/material/Button";
import { AboutContainer } from "../common/About/AboutContainer";
import { SelectLabels } from "../../pages/AddBlock/CardSelect";
// component
import { ComponentIdSwitch } from "../form/SwitchForm";
import { Card } from "../../state/create/CreateState";
import { CardBtn } from "../common/About/AboutBtn";

export const AddCardComponent = (props: {
  card: Card;
  onCardUpdate: (cardId: any, cardType: any) => void;
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const card = props.card;

  // const componentId: string = useRecoilValue(CardIdState);
  // reactNode를 반환함
  const component = ComponentIdSwitch({ ComponentId: card.cardType });

  const deleteCard = () => {
    setCards((prevCards) =>
      prevCards.filter((nowCard) => nowCard.id !== card.id)
    );
    console.log("deleteCard");
  };

  const typeChange = (cardType: any) => {
    console.log(cardType);
    // const updatedCard = { ...card, /* 수정된 속성 추가 */ };

    // 부모 컴포넌트에 새로운 Card 객체를 전달
    props.onCardUpdate(card.id, cardType);
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
          style={{ borderBottom: "1px solid #e0e0e0" }}
        >
          {/* 카드 인덱스 자리_squence */}
          <S.InnerContainer
            width="10%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#e0e0e0" }}
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
              placeholder={card.content}
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
        {component}
        {/* ==================================== */}
      </S.InnerContainer>
      <S.InnerContainer
        width="100%"
        height="15%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ borderTop: "1px solid #e0e0e0" }}
      >
        {/* 버튼 자리 */}
        <S.InnerContainer width="50%" height="70%" justifyContent="center">
          <CardBtn
            onClick={() => {}}
            tooltip="카드 단일저장"
            content="저장"
            color="primary"
          />
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
