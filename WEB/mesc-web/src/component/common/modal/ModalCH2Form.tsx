//style
import * as S from "./ModalCH2Form.styles";
//imgae
import Robot from "../../assets/img/robot.png";
//Recoil
import { useRecoilState } from "recoil";
import { Card } from "../../../state/create/BlockState";
//Component
import { ComponentBtn } from "./ModalComponentBtn";

export const CH2Form = (props: { card: Card }) => {
  //카드 recoil
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
        <S.TopInput placeholder="제목을 입력하세요" value={props.card.name} />
      </S.TopContainer>
      {/* 하단 공간  */}
      <S.BottomContainer>
        {/* 버튼 위 text 공간 */}

        <S.Context placeholder="내용을 입력하세요" value={props.card.content} />
        <ComponentBtn card={card} index={0} />
        <ComponentBtn card={card} index={1} />
      </S.BottomContainer>
    </S.FormContainer>
  );
};
