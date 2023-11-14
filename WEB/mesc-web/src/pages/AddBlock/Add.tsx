//React
import { useState } from "react";
// Recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { CreatBlockState } from "../../state/create/AddBlock";
import { Card, CardState } from "../../state/create/CreateState"; // Card interface
import { CardIdState } from "../../state/CardIdState";
// API
import { api } from "../../apis/Api";
// style
import * as S from "./AddStyle";
import Button from "@mui/material/Button";

// component
import BasicSpeedDial from "../../component/common/About/AboutBtn";
import { AddCardComponent } from "../../component/page/AddCard";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { SaveBtn } from "../../component/common/About/AboutBtn";

export const Menu1 = () => {
  // =====================================================================

  // 블록 이름 저장을 위한
  const [blockTitleTyping, setBlockTitleTyping] = useState<string>("");
  const [blockState, setBlockState] = useRecoilState(CreatBlockState);

  // Block 이름 변경 및 API 호출
  const updateBlockName = (newName: string) => {
    setBlockState((prevBlockState) => ({
      ...prevBlockState,
      blockInfo: {
        ...prevBlockState.blockInfo,
        name: newName,
        isEditable: true,
      },
    }));

    // Block 생성 API 호출===================================
    api
      .post("block/admin", { blockInfo: { name: newName } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // =======================================================

  // plus 버튼 누를 때 새로운 카드 생성===================================

  // 화면에 보여지는 카드 useState
  const [cards, setCards] = useRecoilState(CardState);
  console.log("cards==================", cards);

  // 카드 타입을 저장하고 있는 recoil
  const [createCard, setCreateCard] = useRecoilState(CardState);
  const CardType = useRecoilValue(CardIdState);

  // 카드 저장 함수
  const saveCard = () => {
    console.log("saveCard================", "id");
  };

  // 카드 추가 함수
  const addCard = () => {
    const newCard: Card = {
      id: cards.length + 1, // id를 적절히 부여합니다.
      name: "카드 이름을 작성해주세요.",
      sequence: cards.length + 1,
      cardType: CardType, // 이 부분도 수정이 필요합니다.
      content: "카드 내용을 작성해주세요.",
    };

    // Recoil을 사용하여 카드 상태 갱신
    // setCreateCard((prevCardState) => [...prevCardState, newCard]);
    setCards((prevCards) => [...prevCards, newCard]);
    // console.log("CardState================", createCard);
    console.log(cards);
  };

  const showCards = cards.map((card) => <AddCardComponent card={card} />);

  // =======================================================

  return (
    <AboutContainer height="100%" width="100%" flexDirection="column">
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
      <AboutContainer
        height="85%"
        width="100%"
        flexDirection="row"
        style={{ flexWrap: "wrap", overflow: "auto" }}
      >
        {showCards}
        {/* <AddCardComponent
            key={card.sequence}
            clickDelete={() => deleteCard(card.sequence)}
            content="카드 내용을 작성해주세요."
          /> */}
      </AboutContainer>
      <AboutContainer
        height="5%"
        width="100%"
        // style={{ border: "1px solid black" }}
      >
        <SaveBtn onClick={saveCard} />
        <BasicSpeedDial onClick={addCard} />
      </AboutContainer>
    </AboutContainer>
  );
};
