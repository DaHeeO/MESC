import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Card, CardListState } from "../../state/create/BlockState";
import * as S from "./CH1Form.styles";

interface ComponentBtnProps {
  card: Card;
  index: number;
}

export const ComponentBtn: React.FC<ComponentBtnProps> = ({ card, index }) => {
  const [cards, setCards] = useRecoilState(CardListState);
  const [buttonName, setButtonName] = useState(
    card.componentList[index].object.name
      ? card.componentList[index].object.name
      : ""
  );

  useEffect(() => {
    setButtonName(
      card.componentList[index].object.name
        ? card.componentList[index].object.name
        : ""
    );
  }, [card.componentList[index].object]);

  // Function to handle changes in the input value
  const handleInputChange = (name: string) => {
    setCards((prevCards) =>
      prevCards.map((nowCard) =>
        nowCard.sequence === card.sequence
          ? {
              ...nowCard,
              componentList: nowCard.componentList.map((component) =>
                component.sequence === card.componentList[index].sequence
                  ? {
                      ...component,
                      object: {
                        ...component.object,
                        name: name,
                      },
                    }
                  : component
              ),
            }
          : nowCard
      )
    );
  };

  return (
    <S.Button>
      <S.ButtonText
        placeholder="버튼을 입력하세요"
        value={buttonName}
        onChange={(event) => {
          setButtonName(event.target.value);
          handleInputChange(event.target.value);
        }}
      />
    </S.Button>
  );
};
