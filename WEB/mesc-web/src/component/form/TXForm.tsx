// Recoil
import { useRecoilState } from "recoil";
import { TxTaState } from "../../state/create/CreateState";
//style
import * as S from "./TXForm.styles";
//Component
import { Card, CardListState } from "../../state/create/BlockState";

export const TXForm = (props: { card: Card }) => {
  const [cardList, setCardList] = useRecoilState(CardListState); // 카드를 저장하는 state

  return (
    <S.FormContainer>
      <S.Input
        rows={4}
        cols={50}
        placeholder="말풍선에 들어갈 문구를 적어주세요."
        value={props.card.content}
        onChange={(e) => {
          setCardList((prevCardList) =>
            prevCardList.map((nowCard: Card) =>
              nowCard.sequence === props.card.sequence
                ? { ...nowCard, content: e.target.value }
                : nowCard
            )
          );
        }}
      />
    </S.FormContainer>
  );
};
