//style
import * as S from "./CH2Form.styles";
import * as C from "../../pages/AddBlock/AddStyle";
//imgae
import chatbot from "../../assest/image/chatbot.png";
import Robot from "../../assest/image/robot.png";
//Recoil
import { useRecoilState } from "recoil";
import { Card, Ch2State, Ch2StateProps } from "../../state/create/CreateState";
import { CardState } from "../../state/create/CreateState";
//Component
import { AboutContainer } from "../common/About/AboutContainer";
import { ComponentBtn } from "./ComponentBtn";
import { ComponentBtn2 } from "./ComponentBtn2";

export const CH2Form = (props: { card: Card }) => {
  //카드 recoil
  const [ch2State, setCh2State] = useRecoilState(Ch2State);
  const [cards, setCards] = useRecoilState(CardState);
  const { card } = props;

  return (
    <S.FormContainer>
      {/*로봇 머리 있는 공간 content 1개 있음 */}
      <S.TopContainer
        style={{
          backgroundImage: `url(${Robot})`,
          backgroundSize: "164px 92px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px bottom ",
        }}
      >
        <S.TopInput
          placeholder="제목을 입력하세요"
          onChange={(e) => {
            setCh2State((ch2State) =>
              ch2State.sequence === props.card.sequence
                ? { ...ch2State, name: e.target.value }
                : ch2State
            );
          }}
        />
      </S.TopContainer>
      {/* 하단 공간  */}
      <S.BottomContainer>
        {/* 버튼 위 text 공간 */}

        <S.Context
          placeholder="내용을 입력하세요"
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
        <ComponentBtn card={card} index={0} />
        <ComponentBtn card={card} index={1} />
      </S.BottomContainer>
    </S.FormContainer>
  );
};
