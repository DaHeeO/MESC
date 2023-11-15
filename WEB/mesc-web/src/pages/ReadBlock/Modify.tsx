//React
import { useEffect, useState } from "react";
// Recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { CreatBlockState } from "../../state/create/AddBlock";
import { BlockState, Card, CardState } from "../../state/create/CreateState"; // Card interface
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

export const Modify = () => {
  // =====================================================================

  // 블록 이름 저장을 위한
  const [blockTitleTyping, setBlockTitleTyping] = useState<string>("");
  const [blockState, setBlockState] = useRecoilState(CreatBlockState);
  const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
  const [cards, setCards] = useRecoilState(CardState);
  const [blockName, setBlockName] = useState("");

  console.log("blockTitleTyping==================", blockTitleTyping);
  console.log("cards==================", cards);
  // input default 값 설정====================================
  //  name을 못찾는다는 오류 발생 (후순위)

  useEffect(() => {
    async function fetchData() {
      try {
        // 결과를 처리하고 상태를 업데이트
        if (blockInfo.blockInfo && blockInfo.blockInfo.name) {
          setBlockName(blockInfo.blockInfo.name);
        } else {
          setBlockName("블럭이름을 작성해주세요.");
        }
      } catch (error) {
        // 오류 처리
        console.error("Error fetching data: ", error);
      }
    }
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
        .patch(`block/admin/${blockInfo.blockInfo.id}`, {
          blockInfo: { name: newName, id: blockInfo.blockInfo.id },
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
          {/* {blockState.blockInfo.name} */}
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
