import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  Card,
  CardListState,
  ComponentListState,
  ComponentState,
} from "../../state/create/BlockState";
import * as S from "./CH1Form.styles";

export const ComponentBtn = (
  props: { card: Card; index: number } // BtnProps를 기존 props와 합침
) => {
  const [cards, setCards] = useRecoilState(CardListState);
  const [componentList, setComponentList] = useRecoilState(ComponentListState);
  const [componentItem, setComponentItem] = useRecoilState(ComponentState);

  const { card, index } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Update ComponentItem state
    setComponentItem((prevItem) => ({
      ...prevItem,
      // You can add more properties if needed
      text: inputValue,
    }));

    setComponentList((prevList) => [...prevList, componentItem]);

    // Reset ComponentItem state after adding to the list
    setComponentItem({
      type: "BU",
      sequence: componentList.length,
      object: {
        name: "",
        linkType: "B",
        link: 0,
        response: "",
      },
      // Initial values for the ComponentItem
    });
  };

  return (
    <S.Button>
      <S.ButtonText
        placeholder="버튼을 입력하세요"
        value={componentItem.object.name}
        onChange={handleInputChange}
      />
    </S.Button>
  );
};
