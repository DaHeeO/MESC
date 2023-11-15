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
// component
import { AddCardComponent } from "../../component/page/AddCard";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import BasicSpeedDial, { SaveBtn } from "../../component/common/About/AboutBtn";

export const Add = () => {
  // =====================================================================

  // 블록 이름 저장을 위한
  const [blockTitleTyping, setBlockTitleTyping] = useState<string>("");
  const [blockState, setBlockState] = useRecoilState(CreatBlockState);
  const [cards, setCards] = useRecoilState(CardState);

  // Block 이름 변경 및 API 호출
  const updateBlockName = (newName: string) => {
    setBlockState((prevBlockState) => ({
      ...prevBlockState,
      blockInfo: {
        ...prevBlockState.blockInfo,
        name: newName,
        // isEditable: true,
      },
    }));

    // Block 생성 API 호출===================================
    api
      .post("block/admin", {
        blockInfo: { name: newName },
        cards,
      })
      .then((res) => {
        console.log("card==================", cards);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // =======================================================

  // plus 버튼 누를 때 새로운 카드 생성===================================

  // 화면에 보여지는 카드 useState
  console.log("cards==================", cards);

  // 카드 타입을 저장하고 있는 recoil
  const [createCard, setCreateCard] = useRecoilState(CardState);
  const CardType = useRecoilValue(CardIdState);

  // 카드 추가 함수
  const addCard = () => {
    const newCard: Card = {
      id: cards.length + 1, // id를 적절히 부여합니다.
      name: "카드 이름을 작성해주세요.",
      sequence: cards.length,
      // cardType: CardType, // 이 부분도 수정이 필요합니다.
      cardType: "TX", // 이 부분도 수정이 필요합니다.
      content: "카드 내용을 작성해주세요.",
    };

    // Recoil을 사용하여 카드 상태 갱신
    // setCreateCard((prevCardState) => [...prevCardState, newCard]);
    setCards((prevCards) => [...prevCards, newCard]);
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
        <AboutContainer height="100%" width="10%"></AboutContainer>
      </AboutContainer>
      <AboutContainer
        height="85%"
        width="100%"
        flexDirection="row"
        style={{ flexWrap: "wrap", overflow: "auto" }}
      >
        {showCards}
      </AboutContainer>
      <AboutContainer height="5%" width="100%">
        <SaveBtn onClick={() => updateBlockName(blockTitleTyping)} />
        <BasicSpeedDial onClick={addCard} />
      </AboutContainer>
    </AboutContainer>
  );
};
