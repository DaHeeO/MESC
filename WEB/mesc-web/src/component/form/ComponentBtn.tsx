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
export const ComponentBtn = (props: { card: Card }) => {
  const [cards, setCards] = useRecoilState(CardState);
  const [btnValue, setBtnValue] = useRecoilState(ComponentState);
  const [inputValue, setInputValue] = useState<string>("");
  const { card } = props;

  return (
    <S.FormBtn height="50%">
      <S.FormInput
        width="80%"
        height="30%"
        placeholder="버튼 1"
        onChange={(e) => {
          setBtnValue((prevComponentState) => ({
            ...prevComponentState,
            componentList: [
              {
                type: "BU",
                sequence: "1",
                object: {
                  ...prevComponentState.componentList[0]?.object,
                  name: e.target.value,
                  linkType: "B",
                  link: 1,
                  actionId: 0,
                },
              },
              ...prevComponentState.componentList.slice(1),
            ],
          }));
          console.log(btnValue);
          console.log(cards);
          setCards((prevCards) => [
            prevCards.map((nowCard) =>
              nowCard.Index === props.card.Index
                ? { ...nowCard, componentList: btnValue.componentList }
                : nowCard
            ),
            // ...prevCards,

            // {
            //   Index: prevCards.length + 1,
            //   name: "카드 이름을 작성해주세요.",
            //   sequence: prevCards.length,
            //   cardType: "TX",
            //   content: "",
            //   componentList: btnValue.componentList,
            // },
          ]);
          console.log("--fd-fd-fd-fd-fd-fd-");
          console.log(cards);
        }}
      />
    </S.FormBtn>
  );
};
