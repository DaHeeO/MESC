// Recoil
import { useRecoilState } from "recoil";
import { CardState } from "../../state/create/CreateState";
//style
import * as S from "./FormStyle";
//Component
import { AboutContainer } from "../common/About/AboutContainer";
import { Card } from "../../state/create/CreateState";

// interface TxFormProps {
//   content: string;
// }

export const TXForm = (props: { card: Card }) => {
  const [cards, setCards] = useRecoilState(CardState);

  return (
    <AboutContainer
      height="100%"
      width="100%"
      justifyContent="center"
      align="center"
    >
      <S.ComponentContainer
        width="85%"
        height="80%"
        backColor="#f5f8fc"
        justify="center"
        align="center"
        radius="10px"
      >
        <S.FormTextarea
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
      </S.ComponentContainer>
    </AboutContainer>
  );
};
