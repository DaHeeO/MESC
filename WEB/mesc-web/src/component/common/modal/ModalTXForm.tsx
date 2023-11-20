// Recoil
import { useRecoilState } from "recoil";
//style
import * as S from "./ModalTxForm.styles";
//Component
import { Card } from "../../../state/create/BlockState";

export const TXForm = (props: { card: Card }) => {
  return (
    <S.FormContainer>
      <S.Input />
      <S.Text size={14} color={"black"}>
        {props.card.content}
      </S.Text>
    </S.FormContainer>
  );
};
