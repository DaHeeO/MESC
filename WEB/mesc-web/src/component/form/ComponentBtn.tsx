import react, { useState } from "react";
// Recoil
import { useRecoilState } from "recoil";
import {
  Card,
  CardState,
  ComponentState,
} from "../../state/create/CreateState";
// style
import * as S from "./FormStyle";

// export interface Value {
//   value?: string;
// }

// export const ComponentBtn = (props: any) => {
export const ComponentBtn = (props: { card: Card; index: number }) => {
  const [cards, setCards] = useRecoilState(CardState);
  const [btnValue, setBtnValue] = useRecoilState(ComponentState);
  const [inputValue, setInputValue] = useState<string>("");
  const { card, index } = props;
  // 이하 코드는 이전과 동일

  const handleInputChange = (
    e: any,
    index: number,
    prevComponentState: any,
    setBtnValue: any,
    props: any,
    cards: any,
    setCards: any
  ) => {
    const updatedComponentList = [
      ...prevComponentState.componentList.slice(0, index),
      {
        type: "BU",
        sequence: "1",
        object: {
          ...prevComponentState.componentList[index]?.object,
          name: e.target.value,
          linkType: "B",
          link: 1,
          actionId: 0,
        },
      },
      ...prevComponentState.componentList.slice(index + 1),
    ];

    setBtnValue((prevComponentState: any) => ({
      ...prevComponentState,
      componentList: updatedComponentList,
    }));

    setCards((prevCards: any) =>
      prevCards.map((nowCard: any) =>
        nowCard.sequence === props.card.sequence
          ? { ...nowCard, componentList: updatedComponentList }
          : nowCard
      )
    );
  };

  return (
    <S.FormBtn height="50%">
      <S.FormInput
        width="80%"
        height="30%"
        placeholder="버튼 1"
        onChange={(e) =>
          handleInputChange(
            e,
            props.index,
            btnValue,
            setBtnValue,
            props,
            cards,
            setCards
          )
        }
      />
    </S.FormBtn>
  );
};
