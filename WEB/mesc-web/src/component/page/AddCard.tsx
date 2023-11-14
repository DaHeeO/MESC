//style
import * as S from "../../pages/AddBlock/AddStyle";
//recoil
import { useRecoilState } from "recoil";
//mui
import Button from "@mui/material/Button";
import { AboutContainer } from "../common/About/AboutContainer";
import { SelectLabels } from "../../pages/AddBlock/CardSelect";
// component
import { ComponentIdSwitch } from "../form/SwitchForm";
import { BlockState, Card, CardState } from "../../state/create/CreateState";
import { CardBtn } from "../common/About/AboutBtn";
import { api } from "../../apis/Api";

export const AddCardComponent = (props: { card: Card }) => {
  const [blocks, setBlock] = useRecoilState(BlockState);
  const [cards, setCards] = useRecoilState(CardState);
  const card = props.card;
  // console.log("============(addCard)", blocks.blockInfo.id);

  // const componentId: string = useRecoilValue(CardIdState);
  // reactNode를 반환함
  const deleteCard = () => {
    setCards(cards.filter((nowCard) => nowCard.name !== card.name));
  };

  const typeChange = (cardType: any) => {
    console.log(cardType);
    // const updatedCard = { ...card, /* 수정된 속성 추가 */ };
    setCards((prevCards) =>
      prevCards.map((nowCard) =>
        nowCard.name === props.card.name
          ? { ...nowCard, cardType: cardType }
          : nowCard
      )
    );
  };

  // 단일카드 저장 ===========================================>
  const SaveCard = () => {
    api
      .post("block/admin", {
        blockInfo: {
          id: blocks.blockInfo.id,
        },
        cardReqList: cards,
      })
      .then((res) => {
        console.log(res);
        // console.log(blocks.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //==========================================================>

  return (
    <S.CardContainer>
      <S.InnerContainer width="100%" height="85%" flexDirection="column">
        {/* 카드 헤더 */}
        <AboutContainer
          width="100%"
          height="15%"
          justifyContent="center"
          align="center"
          style={{ borderBottom: "1px solid #e0e0e0" }}
        >
          {/* 카드 인덱스 자리_squence */}
          <S.InnerContainer
            width="10%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#e0e0e0" }}
          >
            {card.sequence}
          </S.InnerContainer>
          {/* 카드 이름 자리_name*/}
          <S.InnerContainer
            width="60%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <input
              type="text"
              placeholder={card.name}
              onChange={(e) => {
                setCards((prevCards) =>
                  prevCards.map((nowCard) =>
                    nowCard.name === props.card.name
                      ? { ...nowCard, name: e.target.value }
                      : nowCard
                  )
                );
              }}
              style={{ width: "90%", height: "90%" }}
            />
          </S.InnerContainer>
          {/* 카드 종류자리_cardType*/}
          <S.InnerContainer
            width="30%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            {/* 카드 type 선택 */}
            <SelectLabels onType={typeChange} />
          </S.InnerContainer>
        </AboutContainer>
        {/* {BlockList.id} */}
        {/* 카드 내 contentForm */}
        {/* ==================================== */}
        <ComponentIdSwitch card={card} />
        {/* ==================================== */}
      </S.InnerContainer>
      <S.InnerContainer
        width="100%"
        height="15%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ borderTop: "1px solid #e0e0e0" }}
      >
        {/* 버튼 자리 */}
        <S.InnerContainer width="50%" height="70%" justifyContent="center">
          <CardBtn
            onClick={SaveCard}
            tooltip="카드 단일저장"
            content="저장"
            color="primary"
          />
        </S.InnerContainer>
        <S.InnerContainer width="50%" height="70%" justifyContent="center">
          <Button variant="contained" size="small" onClick={deleteCard}>
            삭제
          </Button>
        </S.InnerContainer>
      </S.InnerContainer>
    </S.CardContainer>
  );
};
