//React
import { useEffect, useState } from "react";
// Recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { CreatBlockState } from "../../state/create/AddBlock";
import {
  BlockState,
  Card,
  CardState,
  Btn,
  ComponentItem,
} from "../../state/create/CreateState"; // Card interface
import { CardIdState } from "../../state/CardIdState";
// API
import { api } from "../../apis/Api";
// style
import * as S from "../AddBlock/AddStyle";
// component
import BasicSpeedDial from "../../component/common/About/AboutBtn";
import { AddCardComponent } from "../../component/page/AddCard";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { SaveBtn } from "../../component/common/About/AboutBtn";
import { SelectBlockv2 } from "../../component/Block/Select/SelectBlockv2";
import { CardListState } from "../../state/read/GetCardList";
import { TxTaState } from "../../state/create/CreateState";
import { CH1Form } from "../../component/form/CH1Form";
import { TAForm } from "../../component/form/TAForm";
import { CH2Form } from "../../component/form/CH2Form";
import { TXForm } from "../../component/form/TXForm";

export const Modify = () => {
  // =====================================================================

  // 블록 이름 저장을 위한
  const [blockTitleTyping, setBlockTitleTyping] = useState<string>("");
  const [blockState, setBlockState] = useRecoilState(CreatBlockState);
  const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
  const [cards, setCards] = useRecoilState(CardState);
  const [blockName, setBlockName] = useState("");
  const [cardList, setCardList] = useRecoilState(CardListState);

  useEffect(() => {
    async function fetchData() {
      try {
        // 결과를 처리하고 상태를 업데이트
        if (blockInfo && blockInfo.name) {
          setBlockName(blockInfo.name);
        } else {
          setBlockName("블럭이름을 작성해주세요.");
        }
      } catch (error) {
        // 오류 처리
        console.error("Error fetching data: ", error);
      }
    }
    let sequence = 1;
    const nowCards = cardList.map((card) => {
      const cardType = card.cardType;
      let btnSequence = 1;
      const componentList = card.button?.map(
        (btn: Btn) =>
          ({
            type: btn.type,
            sequence: btnSequence,
            object: btn,
          } as ComponentItem)
      );
      if (cardType === "TX") {
        return {
          name: card.cardName,
          sequence: sequence++,
          cardType: card.cardType,
          content: card.content,
          componentList: componentList,
        };
      } else if (cardType === "TA") {
        console.log("TA는 처리필요. Modify.tsx 62 line");
        return {
          // 이건 막함
          name: card.cardName,
          sequence: sequence++,
          cardType: card.cardType,
          content: card.content,
          componentList: componentList,
        };
      } else if (cardType === "CH1") {
        return {
          // 이건 막함
          name: card.cardName,
          sequence: sequence++,
          cardType: card.cardType,
          content: card.content,
          componentList: componentList,
        };
      } else if (cardType === "CH2") {
        return {
          // 이건 막함
          name: card.cardName,
          sequence: sequence++,
          cardType: card.cardType,
          content: card.content,
          componentList: componentList,
        };
      }
      return {};
    });

    // const cards = cardList.map((card) => {
    //   const cardType = card.cardType;
    //   if (cardType === "TX") {
    //     return TXForm({ card: card });
    //   } else if (cardType === "TA") {
    //     return <></>;
    //   } else if (cardType === "CH1") {
    //     return CH1Form({ card: card });
    //   } else if (cardType === "CH2") {
    //     return CH2Form({ card: card });
    //   }
    // });
    setCards(nowCards);
    console.log("확인해보자");
    console.log(nowCards);

    fetchData(); // 함수 호출
  }, [blockInfo]);
  // // =======================================================

  // Block 이름 변경 및 API 호출 (버튼 클릭시)
  const UpdateBlockName = (newName: string) => {
    setBlockState((prevBlockState) => ({
      ...prevBlockState,
      blockInfo: {
        ...prevBlockState.blockInfo,
        name: newName,
      },
    }));
    // Block 생성 API 호출===================================
    console.log("newName==================", newName);
    if (cards.length > 0) {
      const cardRequest = {
        name: cards[cards.length - 1].name,
        sequence: cards[cards.length - 1].sequence,
        cardType: cards[cards.length - 1].cardType,
        content: cards[cards.length - 1].content,
        actionId: 0,
      };

      if (cardRequest.cardType === "TA") {
        cardRequest.actionId = 1;
      }

      api
        .patch(`block/admin/${blockInfo.id}`, {
          blockInfo: { name: newName, id: blockInfo.id },
          cardRequestList: cardRequest,
        })
        .then((res) => {
          console.log("card==================", cards);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // =======================================================

  // plus 버튼 누를 때 새로운 카드 생성===================================

  // 카드 타입을 저장하고 있는 recoil

  // 카드 추가 함수
  const addCard = () => {
    const newCard: Card = {
      // Index: cards.length + 1, // id를 적절히 부여합니다.
      name: "카드 이름을 작성해주세요.",
      sequence: cards.length,
      // cardType: CardType, // 이 부분도 수정이 필요합니다.
      cardType: "TX", // 이 부분도 수정이 필요합니다.
      content: "",
      componentList: [],
    };

    // Recoil을 사용하여 카드 상태 갱신
    // setCreateCard((prevCardState) => [...prevCardState, newCard]);
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const showCards = cards.map((card) => {
    return <AddCardComponent card={card} />;
  });
  // =======================================================

  return (
    <AboutContainer height="100%" width="100%">
      {/* 좌측 데이터 보기 */}
      <AboutContainer height="100%" width="20%">
        <AboutContainer
          width="100%"
          height="100%"
          style={{
            overflowY: "auto",
          }}
        >
          <SelectBlockv2 data={[]} />
        </AboutContainer>
      </AboutContainer>
      {/* 우측 블록 컨트롤 */}
      <AboutContainer height="100%" width="80%" flexDirection="column">
        <AboutContainer height="10%" width="100%">
          <AboutContainer height="100%" width="90%">
            <S.BlockNameInput
              type="text"
              defaultValue={blockName}
              onChange={(e) => setBlockTitleTyping(e.target.value)}
            />
          </AboutContainer>
        </AboutContainer>
        <AboutContainer
          height="85%"
          width="100%"
          flexDirection="row"
          style={{ flexWrap: "wrap", overflow: "auto" }}
        >
          {/* 여기에 기존에 있는 카드들 보여줘야해 */}
          <div style={{ border: "1px solid red", width: "80%", height: "40%" }}>
            {/* {result} */}
          </div>
          {showCards}
        </AboutContainer>
        <AboutContainer
          height="5%"
          width="100%"
          // style={{ border: "1px solid black" }}
        >
          <SaveBtn
            onClick={() => {
              UpdateBlockName(blockTitleTyping);
            }}
          />
          <BasicSpeedDial onClick={addCard} />
        </AboutContainer>
      </AboutContainer>
    </AboutContainer>
  );
};
