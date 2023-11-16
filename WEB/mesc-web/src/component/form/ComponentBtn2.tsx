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
export const ComponentBtn2 = (props: { card: Card }) => {
  const [cards, setCards] = useRecoilState(CardState);
  const [btnValue, setBtnValue] = useRecoilState(ComponentState);
  const [inputValue, setInputValue] = useState<string>("");
  const { card } = props;

  const handleInputChange = (
    e: any,
    prevComponentState: any,
    setBtnValue: any,
    props: any,
    cards: any,
    setCards: any
  ) => {
    const updatedComponentList = [
      {
        type: "BU",
        sequence: "1",
        object: {
          ...prevComponentState.componentList[1]?.object,
          name: e.target.value,
          linkType: "B",
          link: 1,
          actionId: 0,
        },
      },
      ...prevComponentState.componentList.slice(1),
    ];

    setBtnValue((prevComponentState: any) => ({
      ...prevComponentState,
      componentList: updatedComponentList,
    }));

    setCards((prevCards: any) =>
      prevCards.map((nowCard: any) =>
        nowCard.Index === props.card.Index
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
          handleInputChange(e, btnValue, setBtnValue, props, cards, setCards)
        }
      />
    </S.FormBtn>
  );
};
