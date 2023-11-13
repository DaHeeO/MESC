import React, { useEffect, useState } from "react";
// recoil
import { useRecoilState } from "recoil";
import { CreatBlockState } from "../../state/add/AddBlock";
// styled Component
import { AboutContainer } from "../../component/common/About/AboutContainer";
import * as S from "./AddStyle";
// Mui
import Button from "@mui/material/Button";
import BasicSpeedDial from "../../component/common/About/PlusBtn";
import { AddCardComponent } from "../../component/page/AddCard";
import { AddMeun } from "./AddMeun";

export const Menu1 = () => {
  // Block 이름 지정 ============================>
  const [blockTitleTyping, setBlockTitleTyping] = useState<string>("");
  const [blockState, setBlockState] = useRecoilState(CreatBlockState);

  // blockInfo의 name 변경
  const updateBlockName = (newName: string) => {
    setBlockState((prevBlockState) => ({
      ...prevBlockState,
      blockInfo: {
        ...prevBlockState.blockInfo,
        name: newName,
      },
    }));
  };
  // console.log("blockState", blockState);

  // // blockInfo의 name 변경
  // useEffect(() => {
  //   // useEffect 내에서도 함수 호출이 가능하도록 수정
  //   if (blockTitleTyping) {
  //     updateBlockName(blockTitleTyping);
  //   }
  // }, [blockTitleTyping, setBlockState]);

  // 화면에 보여지는 카드
  const [cards, setCards] = useState<{ id: number; content: string }[]>([]);

  const addCard = () => {
    setCards((prevCards) => [
      ...prevCards,
      { id: cards.length, content: "카드 이름을 작성해주세요." },
    ]);
  };
  //  =========================>

  const deleteCard = (id: number) => {
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
            onChange={(e) => setBlockTitleTyping(e.target.value)}
          />
        </AboutContainer>
        <AboutContainer height="100%" width="10%">
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              updateBlockName(blockTitleTyping);
            }}
          >
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
        {/* 카드를 종류별로 추가하는 메뉴판 */}
        {/* <AddMeun /> */}
        {/* 저장된 카드들을 동적으로 렌더링 */}
        {cards.map((card) => (
          <AddCardComponent
            key={card.id}
            clickDelete={() => deleteCard(card.id)}
            content={card.content}
            id={card.id}
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
