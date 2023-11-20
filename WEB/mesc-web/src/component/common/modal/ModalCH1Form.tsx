//style
import { useEffect } from "react";
import * as S from "./ModalCH1Form.styles";
//Component
//Recoil
//Recoil State
import { Card } from "../../../state/create/BlockState";
// imgae
import Robot from "../../assets/img/robot.png";
import { ComponentBtn } from "./ModalComponentBtn";

export interface Value {
  value?: string;
}

export const CH1Form = (props: { card: Card }) => {
  //카드 recoil
  const { card } = props;

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
        <S.TopInput value={props.card.name} />
      </S.TopContainer>
      {/* 하단 공간  */}
      <S.BottomContainer>
        {/* 버튼 위 text 공간 */}
        <S.Context value={props.card.content} />

        <ComponentBtn card={card} index={0} />
      </S.BottomContainer>
    </S.FormContainer>
  );
};
