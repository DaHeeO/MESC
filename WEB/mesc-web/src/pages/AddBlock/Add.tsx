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
import * as C from "../../component/common/theme";
// component
import { AddCardComponent } from "../../component/page/AddCard";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { AboutBody } from "../../component/common/About/AboutBody";
import { Header } from "../../component/common/Header/Header";
import BasicSpeedDial, {
  AddSpeedDial,
  SaveBtn,
} from "../../component/common/About/AboutBtn";
import { SwitchCard } from "./SwitchCard";

export const Add = () => {
  // =====================================================================

  // 블록 이름 저장을 위한
  const [blockTitleTyping, setBlockTitleTyping] = useState<string>("");
  const [blockState, setBlockState] = useRecoilState(CreatBlockState);
  const [cards, setCards] = useRecoilState(CardState);
  const CardType = useRecoilValue(CardIdState);
  //초기 카드 타입 설정
  const [selectedValue, setSelectedValue] = useState("TX");

  const handleClick = (value: string) => {
    // Check if there's existing data
    if (cards.length === 0) {
      setSelectedValue(value);
    } else {
      // Handle the case when there's existing data
      // You might want to show a message or handle it differently
      console.log("Cannot change card type when there's existing data");
    }
  };

  const resetRecoilState = () => {
    setCards([]); // Reset cards to an empty array or initial state
  };

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
        // isEditable: true,
      },
    }));

    // Block 생성 API 호출===================================
    api
      .post("block/admin", {
        blockInfo: { name: newName },
        cardReqList: [
          {
            name: cards[0].name,
            sequence: cards.length,
            cardType: cards[0].cardType,
            content: cards[0].content,
            componentList: cards[0].componentList,
          },
        ],
      })
      .then((res) => {
        // console.log("card==================", cards);
        alert(`블록이 생성되었습니다.`);
        setCards([]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // =======================================================

  // plus 버튼 누를 때 새로운 카드 생성===================================

  // 화면에 보여지는 카드 useState
  // console.log("cards==================", cards);

  // 카드 추가 함수
  const addCard = (cardType: string) => {
    const newIndex = cards.length + 1;
    let content = "";

    if (cards.length > 0 && newIndex >= 0 && newIndex < cards.length) {
      content = cards[newIndex].content;
    }

    const newCard: Card = {
      name: "카드 이름을 작성해주세요.",
      sequence: newIndex,
      cardType: cardType,
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
    // 전체
    <AboutBody>
      {/* 헤더 height: 13%  width 89% */}
      <Header />
      {/* 제목 height: 6% width 89% */}
      <AboutContainer
        height="6%"
        width="89%"
        justifyContent="flex-start"
        align="flex-start"
      >
        <S.Text size={18} color={C.colors.textBlack} weight={800}>
          블록 추가하기
        </S.Text>
      </AboutContainer>
      {/* 메인 height: 6% width 89% */}
      <AboutContainer
        height="81%"
        width="89%"
        justifyContent="space-between"
        align="flex-start"
      >
        <S.BlockContainer>
          {/* 이름 입력 및 저장 */}
          <S.BlockHeader>
            <S.InputBox color={C.colors.buttonBlueBackground}>
              <S.Input
                type="text"
                onChange={(e) => setBlockTitleTyping(e.target.value)}
                placeholder="블록 이름을 입력하세요."
              />
            </S.InputBox>
            <S.AddButton onClick={() => updateBlockName(blockTitleTyping)}>
              <S.Text size={16} color="white" weight={500}>
                저장
              </S.Text>
            </S.AddButton>
          </S.BlockHeader>
          {/* 카드 종류 */}
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
          {/* 카드 추가 */}
          <AboutContainer
            height="72%"
            width="95%"
            flexDirection="row"
            justifyContent="flex-start"
            style={{
              overflowX: "auto",
              overflowY: "auto",
              // overflowY: "hidden",
            }}
          >
            {showCards}
            <AddSpeedDial onClick={() => addCard(selectedValue)} />
          </AboutContainer>
        </S.BlockContainer>
      </AboutContainer>
    </AboutBody>
  );
};
