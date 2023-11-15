//style
import * as S from "./FormStyle";
import * as C from "../../pages/AddBlock/AddStyle";
//Component
import { AboutContainer } from "../common/About/AboutContainer";
//Recoil
import { useRecoilState } from "recoil";
//Recoil State
import { CHState, CardState } from "../../state/create/CreateState";
import { Card } from "../../state/create/CreateState";
// imgae
import chatbot from "../../assest/image/chatbot.png";
import { useEffect } from "react";

export const CH1Form = (props: { card: Card }) => {
  //카드 recoil
  const [getCH1, setGetCH1] = useRecoilState(CHState);
  const [cards, setCards] = useRecoilState(CardState);
  console.log(cards);

  useEffect(() => {
    // setCards(
    //   // cards.name: getCH1.name,
    // )
  }, [getCH1]);
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
              setGetCH1({
                ...getCH1,
                name: e.target.value,
              });
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
                setGetCH1({
                  ...getCH1,
                  content: e.target.value,
                });
              }}
            />
          </C.InnerContainer>
          <C.InnerContainer
            width="100%"
            height="70%"
            justifyContent="center"
            alignItems="center"
          >
            <S.FormBtn height="50%">
              <S.FormInput
                width="80%"
                height="30%"
                placeholder="버튼 1"
                onChange={(e) => {
                  setGetCH1({
                    ...getCH1,
                    componentList: [
                      ...getCH1.componentList,
                      {
                        object: {
                          valuesList: [
                            ...getCH1.componentList[0].object.valuesList,
                            { value: e.target.value },
                          ],
                        },
                      },
                    ],
                  });
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
