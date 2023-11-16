//style
import * as S from "./CH1Form.styles";
import * as C from "../../pages/AddBlock/AddStyle";
//Component
import { AboutContainer } from "../common/About/AboutContainer";
//Recoil
import { useRecoilState } from "recoil";
//Recoil State
import { Ch1State, Ch1StateProps } from "../../state/create/CreateState";
import { Card, CardState } from "../../state/create/CreateState";
// imgae
import chatbot from "../../assest/image/chatbot.png";
import Robot from "../../assest/image/robot.png";
import { ComponentBtn } from "./ComponentBtn";

export interface Value {
  value?: string;
}

export const CH1Form = (props: { card: Card }) => {
  //카드 recoil
  const [ch1State, setCh1State] = useRecoilState(Ch1State);
  const [cards, setCards] = useRecoilState(CardState);
  const { card } = props;

  // ch1State를 업데이트하는 함수
  const updateCh1State = (newValue: Ch1StateProps) => {
    setCh1State(newValue);
  };

  //=====================================================================

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
            setCh1State((ch1State) =>
              ch1State.sequence === props.card.sequence
                ? { ...ch1State, name: e.target.value }
                : ch1State
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
      </S.BottomContainer>
    </S.FormContainer>
  );
};
