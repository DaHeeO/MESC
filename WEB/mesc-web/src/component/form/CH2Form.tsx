//style
import * as S from "./FormStyle";
import * as C from "../../pages/AddBlock/AddStyle";
//imgae
import chatbot from "../../assest/image/chatbot.png";
//Recoil
import { useRecoilState } from "recoil";
import { Card, Ch2State, Ch2StateProps } from "../../state/create/CreateState";
import { CardState } from "../../state/create/CreateState";
//Component
import { AboutContainer } from "../common/About/AboutContainer";

interface CH2FormProps {
  card: Card;
  content?: string;
}

export const CH2Form = (props: CH2FormProps) => {
  //카드 recoil
  const [ch2State, setCh2State] = useRecoilState(Ch2State);

  // ch2State를 업데이트하는 함수
  const updateCh2State = (newValue: Ch2StateProps) => {
    setCh2State(newValue);
  };

  // ch2State의 특정 속성 업데이트하는 함수
  const updateCh2Name = (newName: string) => {
    setCh2State((prevCh2State) => ({
      ...prevCh2State,
      name: newName,
    }));
  };

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
              setCh2State((ch2State) =>
                ch2State.sequence === props.card.sequence
                  ? { ...ch2State, name: e.target.value }
                  : ch2State
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
                props.content = e.target.value;
              }}
            />
          </C.InnerContainer>
          <C.InnerContainer width="100%" height="35%" justifyContent="center">
            <S.FormBtn>
              <S.FormInput
                width="80%"
                height="30%"
                placeholder="버튼 1"
                onChange={(e) => {
                  setCh2State((prevCh2State) => ({
                    ...prevCh2State,
                    componentList: [
                      ...(prevCh2State.componentList || []),
                      {
                        type: "bu",
                        sequence: "0",
                        object: {
                          actionId: 0,
                          name: e.target.value,
                          linkType: "",
                          link: "",
                        },
                      },
                    ],
                  }));
                }}
              />
            </S.FormBtn>
          </C.InnerContainer>
          <C.InnerContainer width="100%" height="35%" justifyContent="center">
            <S.FormBtn>
              <S.FormInput
                width="80%"
                height="30%"
                placeholder="버튼 1"
                onChange={(e) => {
                  setCh2State((prevCh2State) => ({
                    ...prevCh2State,
                    componentList: [
                      ...(prevCh2State.componentList || []),
                      {
                        type: "bu",
                        sequence: "1",
                        object: {
                          actionId: 0,
                          name: e.target.value,
                          linkType: "",
                          link: "",
                        },
                      },
                    ],
                  }));
                }}
              />
            </S.FormBtn>
          </C.InnerContainer>
          {/* 버튼 있는 공간  */}
        </C.InnerContainer>
      </AboutContainer>
    </S.ComponentContainer>
  );
};
