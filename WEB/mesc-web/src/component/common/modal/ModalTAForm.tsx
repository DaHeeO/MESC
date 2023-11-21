//style
import * as S from "./ModalTAForm.styles";
import * as C from "../../common/theme";

export const TAForm = () => {
  return (
    <S.FormContainer>
      <S.TAContainer>
        <S.Text size={14} color={C.colors.textBlack} weight={600}>
          이곳은 쿼리문이 들어갈 공간입니다.
        </S.Text>
      </S.TAContainer>
    </S.FormContainer>
  );
};
