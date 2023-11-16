// Recoil
import { useRecoilState } from "recoil";
import { CardState, TxTaState } from "../../state/create/CreateState";
//style
import * as S from "./TXForm.styles";
//Component
import { Card } from "../../state/create/CreateState";

export const TXForm = (props: { card: Card }) => {
  const [txCard, setTxCard] = useRecoilState(TxTaState); // 카드를 임시로 저장하는 state
  const [cards, setCards] = useRecoilState(CardState); // 카드를 저장하는 state

  return (
    <S.FormContainer>
      <S.Input
        rows={4}
        cols={50}
        placeholder="말풍선에 들어갈 문구를 적어주세요."
        onChange={(e) => {
          setCards((prevCards) =>
            prevCards.map((nowCard) =>
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
