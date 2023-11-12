import React, { useState } from "react";
// recoil
import { useRecoilState } from "recoil";
import { BlockNameState } from "../../state/add/AddBlock";
// styled Component
import { AboutContainer } from "../../component/common/About/AboutContainer";
import * as S from "./AddStyle";
// Mui
import Button from "@mui/material/Button";
import BasicSpeedDial from "../../component/common/About/PlusBtn";
import { AddCardComponent } from "../../component/page/AddCard";

export const Menu1 = () => {
  // Block 이름 지정
  const [enterBlockName, setEnterBlockName] = useState("");
  const [blockName, setBlockName] = useRecoilState(BlockNameState);
  const saveBlockName = () => {
    setBlockName(enterBlockName);
    console.log(blockName);
  };

  const [cards, setCards] = useState<{ id: string; content: string }[]>([]);

  const addCard = () => {
    setCards((prevCards) => [
      ...prevCards,
      { id: Math.random().toString(), content: cards.length + "번째 카드" },
    ]);
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <AboutContainer height="100%" width="100%" flexDirection="column">
      {/* Block 이름 지정 _header */}
      <AboutContainer height="10%" width="100%">
        <AboutContainer height="100%" width="90%">
          <S.BlockNameInput
            type="text"
            placeholder="Block 이름 입력하세요."
            onChange={(e) => setEnterBlockName(e.target.value)}
          />
        </AboutContainer>
        <AboutContainer height="100%" width="10%">
          <Button variant="contained" size="large" onClick={saveBlockName}>
            저장
          </Button>
        </AboutContainer>
      </AboutContainer>
      {/* Block 생성 필드_body */}
      <AboutContainer
        height="85%"
        width="100%"
        flexDirection="row"
        style={{ flexWrap: "wrap", overflow: "auto" }}
      >
        {/* 저장된 카드들을 동적으로 렌더링 */}
        {cards.map((card) => (
          <AddCardComponent
            key={card.id}
            clickDelete={() => deleteCard(card.id)}
            content={card.content}
          />
        ))}
      </AboutContainer>
      {/* 추가 버튼 공간 */}
      <AboutContainer height="5%" width="100%">
        <BasicSpeedDial onClick={addCard} />
      </AboutContainer>
    </AboutContainer>
  );
};
