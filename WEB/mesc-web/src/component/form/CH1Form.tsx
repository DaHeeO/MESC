//style
import * as S from "./FormStyle";
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
    <S.ComponentContainer height="85%" width="100%" radius="30px">
      <AboutContainer
        width="95%"
        height="95%"
        flexDirection="column"
        style={{ borderRadius: "10px" }}
      >
        {/*로봇 머리 있는 공간 content 1개 있음 */}
        <C.InnerContainer
          width="100%"
          height="50%"
          flexDirection="row"
          alignItems="end"
          style={{
            backgroundColor: "#7879f1",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <S.FormInput
            height="20%"
            width="60%"
            placeholder="카드 이름"
            onChange={(e) => {
              setCh1State((ch1State) =>
                ch1State.sequence === props.card.sequence
                  ? { ...ch1State, name: e.target.value }
                  : ch1State
              );
            }}
          />
          <C.InnerContainer
            width="40%"
            height="100%"
            style={{
              backgroundImage: `url(${chatbot})`,
              backgroundSize: "80% 80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          />
        </C.InnerContainer>
        {/* 하단 공간  */}
        <C.InnerContainer width="100%" height="50%" flexDirection="column">
          {/* 버튼 위 text 공간 */}
          <C.InnerContainer width="100%" height="30%" alignItems="center">
            <S.FormInput
              width="60%"
              height="30%"
              placeholder="내용 1"
              onChange={(e) => {
                setCards((prevCards) =>
                  prevCards.map((nowCard) =>
                    nowCard.sequence === props.card.sequence
                      ? { ...nowCard, content: e.target.value }
                      : nowCard
                  )
                );
              }}
              value={props.card.content}
            />
          </C.InnerContainer>
          <C.InnerContainer
            width="100%"
            height="70%"
            justifyContent="center"
            alignItems="center"
          >
            <ComponentBtn card={card} index={0} />
          </C.InnerContainer>

          {/* 버튼 있는 공간  */}
        </C.InnerContainer>
      </AboutContainer>
    </S.ComponentContainer>
  );
};
