//React
import { useEffect, useState } from "react";
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
import { SwitchCard } from "./SwitchCard";

export const Add = () => {
  // =====================================================================

  // 블록 이름 저장을 위한
  const [blockTitleTyping, setBlockTitleTyping] = useState<string>("");
  const [blockState, setBlockState] = useRecoilState(CreatBlockState);
  const [cards, setCards] = useRecoilState(CardState);
  const CardType = useRecoilValue(CardIdState);

  // useEffect(() => {
  //   const addCardInfo = () => {
  //     const currentCardState = SwitchCard({ cardId: CardType });
  //     setCards((prevCards) => [...prevCards, currentCardState]);
  //   };
  //   // addCardInfo();
  // }, [CardType]);

  // Block 이름 변경 및 API 호출
  const updateBlockName = (newName: string) => {
    setBlockState((prevBlockState) => ({
      ...prevBlockState,
      blockInfo: {
        ...prevBlockState.blockInfo,
        name: newName,
      },
    }));

    // 카드 정보를 cardReqList에 매핑
    const cardReqList = cards.map((card, index) => ({
      name: card.name,
      sequence: index + 1,
      cardType: card.cardType,
      content: card.content,
      componentList: card.componentList,
    }));

    // API 호출 부분
    try {
      api
        .post("block/admin", {
          blockInfo: { name: newName },
          cardReqList: cardReqList,
        })
        .then((res) => {
          console.log("Cards 저장됨", res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // =======================================================

  // plus 버튼 누를 때 새로운 카드 생성===================================

  // 화면에 보여지는 카드 useState
  // console.log("cards==================", cards);

  // 카드 추가 함수
  const addCard = () => {
    const newIndex = cards.length + 1;
    let content = "";

    if (cards.length > 0 && newIndex >= 0 && newIndex < cards.length) {
      content = cards[newIndex].content;
    }

    const newCard: Card = {
      name: "카드 이름을 작성해주세요.",
      sequence: newIndex,
      cardType: "TX",
      content: content,
      componentList: [
        {
          type: "BU",
          sequence: "1",
          object: {
            actionId: 0,
            name: "",
            linkType: "B",
            link: 1,
          },
        },
      ],
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const showCards = cards.map((card) => <AddCardComponent card={card} />);

  // Recoil을 사용하여 카드 상태 갱신

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
