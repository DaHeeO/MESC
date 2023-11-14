//style
import * as S from "../../pages/AddBlock/AddStyle";
//recoil
import { useRecoilValue } from "recoil";
import { CardIdState } from "../../state/CardIdState";
//mui
import Button from "@mui/material/Button";
import { AboutContainer } from "../common/About/AboutContainer";
import { SelectLabels } from "../../pages/AddBlock/CardSelect";
// component
import { ComponentIdSwitch } from "../form/SwitchForm";
import { CardBtn } from "../common/About/AboutBtn";

interface AddCardProps {
  id: number;
  name: string;
  content?: string;
  cardType: string;
  clickDelete: () => any;
  clickSave: () => any;
}

export const AddCardComponent = (props: AddCardProps) => {
  const componentId: string = useRecoilValue(CardIdState);
  // reactNode를 반환함
  const component = ComponentIdSwitch({ ComponentId: componentId });

  return (
    <S.CardContainer key={props.id}>
      <S.InnerContainer width="100%" height="85%" flexDirection="column">
        {/* 카드 헤더 */}
        <AboutContainer
          width="100%"
          height="15%"
          justifyContent="center"
          align="center"
          style={{ borderBottom: "1px solid #e0e0e0" }}
        >
          {/* 카드 인덱스 자리_squence */}
          <S.InnerContainer
            width="10%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#e0e0e0" }}
          >
            {props.id}
          </S.InnerContainer>
          {/* 카드 이름 자리_name*/}
          <S.InnerContainer
            width="60%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <input
              type="text"
              placeholder={props.name}
              style={{ width: "92%", height: "70%" }}
            />
          </S.InnerContainer>
          {/* 카드 종류자리_cardType*/}
          <S.InnerContainer
            width="30%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            {/* 카드 type 선택 */}
            <SelectLabels />
          </S.InnerContainer>
        </AboutContainer>
        {/* 카드 내 contentForm */}
        {/* ==================================== */}
        {component}
        {/* ==================================== */}
      </S.InnerContainer>
      <S.InnerContainer
        width="100%"
        height="15%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ borderTop: "1px solid #e0e0e0" }}
      >
        {/* 버튼 자리 */}
        <S.InnerContainer width="50%" height="70%" justifyContent="center">
          <CardBtn
            onClick={props.clickSave}
            tooltip="카드 단일저장"
            content="저장"
            color="primary"
          />
        </S.InnerContainer>
        <S.InnerContainer width="50%" height="70%" justifyContent="center">
          <CardBtn
            onClick={props.clickDelete}
            tooltip="카드 단일삭제"
            content="삭제"
            color="error"
          />
        </S.InnerContainer>
      </S.InnerContainer>
    </S.CardContainer>
  );
};
