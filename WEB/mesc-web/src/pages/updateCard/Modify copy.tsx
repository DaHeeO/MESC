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
import * as S from "./Modify.styles";
import * as C from "../../component/common/theme";
// component
import BasicSpeedDial from "../../component/common/About/AboutBtn";
import { AddCardComponent } from "../../component/page/AddCard";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { AboutBody } from "../../component/common/About/AboutBody";
import { Header } from "../../component/common/Header/Header";
import { SaveBtn } from "../../component/common/About/AboutBtn";
import { SelectBlockv2 } from "../../component/Block/Select/SelectBlockv2";
import { CardListState } from "../../state/read/GetCardList";
import { AddSpeedDial } from "../../component/common/About/AboutBtn";
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
  const [cards, setCards] = useRecoilState(CardState); //카드
  const [blockName, setBlockName] = useState("");
  const [cardList, setCardList] = useRecoilState(CardListState);
  const [selectedValue, setSelectedValue] = useState("TX");

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

    fetchData(); // 함수 호출
  }, [blockInfo]);
  // // =======================================================

  console.log("cards==================", cards);

  const deleteBlock = (id?: number) => {
    api
      .delete(`block/admin/all/${id}`)
      .then((res) => {
        // Update Recoil state after successful deletion

        console.log("삭제완료");
        alert("삭제완료");

        // Reset the Recoil state
        setBlockInfo({ id: 0, name: "" });
        setCards([]);
        setCardList([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Block 이름 변경 및 API 호출 (버튼 클릭시)
  const UpdateBlockName = (newName: string) => {
    console.log(cards);
    console.log(blockInfo);
    const body = {
      blockInfo: {
        id: blockInfo.id,
        name: blockInfo.name,
      },
      cardReqList: cards.map((card) => ({
        ...card,
        blockId: blockInfo.id,
        state: "ACTIVE",
        // componentList : card.componentList.map((component) => ({
        // })
      })),
    };
    // setBlockState((prevBlockState) => ({
    //   ...prevBlockState,
    //   blockInfo: {
    //     ...prevBlockState.blockInfo,
    //     name: newName,
    //   },
    // }));
    // if (cards.length > 0) {
    //   const cardRequest = {
    //     name: cards[cards.length - 1].name,
    //     sequence: cards[cards.length - 1].sequence,
    //     cardType: cards[cards.length - 1].cardType,
    //     content: cards[cards.length - 1].content,
    //     actionId: 0,
    //   };

    //   if (cardRequest.cardType === "TA") {
    //     cardRequest.actionId = 1;
    //   }

    //   api
    //     .patch(`block/admin/${blockInfo.id}`, {
    //       blockInfo: { name: newName, id: blockInfo.id },
    //       cardRequestList: cardRequest,
    //     })
    //     .then((res) => {
    //       console.log("card==================", cards);
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };
  // =======================================================

  // plus 버튼 누를 때 새로운 카드 생성===================================

  // 카드 타입을 저장하고 있는 recoil

  const handleClick = (value: string) => {
    setSelectedValue(value);
  };

  // 카드 추가 함수
  const addCard = (cardType: string) => {
    const newCard: Card = {
      // Index: cards.length + 1, // id를 적절히 부여합니다.
      name: "카드 이름을 작성해주세요.",
      sequence: cards.length,
      // cardType: CardType, // 이 부분도 수정이 필요합니다.
      cardType: cardType, // 이 부분도 수정이 필요합니다.
      content: "",
      componentList: [],
    };

    // Recoil을 사용하여 카드 상태 갱신
    // setCreateCard((prevCardState) => [...prevCardState, newCard]);
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const resetRecoilState = () => {
    setCards([]); // Reset cards to an empty array or initial state
  };

  const showCards = cards.map((card) => {
    return <AddCardComponent card={card} />;
  });

  // =======================================================

  return (
    <AboutBody>
      {/* 헤더 height: 13%  width 89% */}
      <Header />
      {/* 제목 height: 6% width 89% */}
      <AboutContainer
        height="87%"
        width="89%"
        justifyContent="space-between"
        align="flex-start"
      >
        {/* 좌측 데이터 보기 */}
        <S.LeftDiv>
          <S.LeftHeader>
            <S.HeaderDiv>
              <S.CategoryDiv>
                <S.Text size={18} color={C.colors.textBlack} weight={800}>
                  블록 수정하기
                </S.Text>
              </S.CategoryDiv>
            </S.HeaderDiv>
          </S.LeftHeader>
          <S.LeftBody>
            <SelectBlockv2 type={"modify"} />
          </S.LeftBody>
        </S.LeftDiv>
        {/* 우측 블록 컨트롤 */}
        <S.RightDiv>
          <S.RightBody>
            <S.BlockHeader>
              <S.InputBox color={C.colors.buttonBlueBackground}>
                <S.Input
                  type="text"
                  defaultValue={blockName}
                  onChange={(e) => setBlockTitleTyping(e.target.value)}
                />
              </S.InputBox>
              <S.ButtonDiv>
                <S.DeleteButton
                  onClick={() => {
                    deleteBlock(blockInfo.id);
                  }}
                >
                  <S.Text size={16} color="white" weight={500}>
                    삭제
                  </S.Text>
                </S.DeleteButton>
                <S.AddButton
                  onClick={() => {
                    UpdateBlockName(blockTitleTyping);
                  }}
                >
                  <S.Text size={16} color="white" weight={500}>
                    저장
                  </S.Text>
                </S.AddButton>
              </S.ButtonDiv>
            </S.BlockHeader>
            {/* 중간 - 카드리스트 고르기 */}
            <S.BlockMiddle>
              <S.SelectBox>
                <S.Text
                  size={18}
                  color={C.colors.textBlack}
                  weight={800}
                  style={{ paddingRight: "30px" }}
                >
                  카드 추가
                </S.Text>
                <S.ButtonHug
                  isFocused={selectedValue === "TX"}
                  onClick={() => handleClick("TX")}
                >
                  <S.ButtonText isFocused={selectedValue === "TX"}>
                    텍스트형
                  </S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug
                  isFocused={selectedValue === "CH1"}
                  onClick={() => handleClick("CH1")}
                >
                  <S.ButtonText isFocused={selectedValue === "CH1"}>
                    버튼 1개 카드형
                  </S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug
                  isFocused={selectedValue === "CH2"}
                  onClick={() => handleClick("CH2")}
                >
                  <S.ButtonText isFocused={selectedValue === "CH2"}>
                    버튼 2개 카드형
                  </S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug
                  isFocused={selectedValue === "TA"}
                  onClick={() => handleClick("TA")}
                >
                  <S.ButtonText isFocused={selectedValue === "TA"}>
                    스크롤형
                  </S.ButtonText>
                </S.ButtonHug>
              </S.SelectBox>
              <S.AddButton
                color={C.colors.buttonRedBackground}
                onClick={resetRecoilState}
              >
                <S.Text size={16} color={C.colors.buttonRed} weight={700}>
                  초기화
                </S.Text>
              </S.AddButton>
            </S.BlockMiddle>

            {/* 하단 - 카드리스트 */}
            <AboutContainer
              height="85%"
              width="100%"
              flexDirection="row"
              style={{
                overflowX: "auto",
                overflowY: "auto",
                // overflowY: "hidden",
              }}
            >
              {showCards}
              <AddSpeedDial onClick={() => addCard(selectedValue)} />
            </AboutContainer>
          </S.RightBody>
        </S.RightDiv>
      </AboutContainer>
    </AboutBody>
  );
};
