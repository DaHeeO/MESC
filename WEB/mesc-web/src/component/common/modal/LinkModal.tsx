import * as React from "react";
import { useEffect, useState } from "react";
import { api } from "../../../apis/Api";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { SelectBlockv2 } from "../../Block/Select/SelectBlockv2";
import { InnerBoxContainer } from "./LinkModal.styles";
import { LinkIdState } from "../../../state/linkId";
import { useRecoilState } from "recoil";
import {
  CardState,
  Card,
  ModalCardListState,
} from "../../../state/create/BlockState";
import { AddCardComponent } from "./ModalSelectedItem";

import * as S from "./LinkModal.styles";
import * as C from "../../common/theme";

const style = {
  width: "80%",
  height: "80%",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface LinkModalProps {
  card: Card;
  btnIndex: number;
}

export default function LinkModal(props: LinkModalProps) {
  const [linkId, setLinkId] = useRecoilState(LinkIdState);
  const [cardList, setCardList] = useRecoilState(ModalCardListState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    // props.card 수정

    const updatedCard = { ...props.card };

    // componentList를 복사하여 새로운 배열 생성
    const updatedComponentList = updatedCard.componentList.map((component) => {
      // 원하는 btnIndex의 component를 찾아 복사
      if (component.sequence === props.btnIndex) {
        return {
          ...component,
          object: {
            ...component.object,
            link: linkId,
          },
        };
      }
      // 찾지 않은 경우 그대로 반환
      return component;
    });

    // 새로운 componentList를 설정
    updatedCard.componentList = updatedComponentList;

    // 상태 업데이트
    console.log("updatedCard", updatedCard);

    //api 호출
    api
      .post(`/component/admin/${props.card.id}`, {
        componentList: updatedCard.componentList,
      })
      .then((res) => {
        alert("링크 생성 완료");
      })
      .catch((err) => {
        console.log(err);
      });

    setOpen(false);
  };

  const showCards = cardList.map((card) => {
    return <AddCardComponent card={card} />;
  });

  return (
    <div>
      <S.AddButton onClick={handleOpen}>
        <S.Text size={12} color={C.colors.buttonBlue} weight={500}>
          버튼 {props.btnIndex}
        </S.Text>
      </S.AddButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InnerBoxContainer width="20%">
              <SelectBlockv2 type={"linkModal"} />
            </InnerBoxContainer>
            {/* ====정보=== */}
            <InnerBoxContainer width="50%" height="80%">
              <InnerBoxContainer width="30%" height="50%">
                링크 :
              </InnerBoxContainer>
              <InnerBoxContainer width="70%" height="50%">
                {linkId}
              </InnerBoxContainer>
              {/* {showCards} */}
            </InnerBoxContainer>

            {/* 오른쪽 기존 카드 보여주기 */}
            {/* ====버튼=== */}
            <InnerBoxContainer width="30%" height="20%">
              <Button onClick={handleClose}>저장</Button>
            </InnerBoxContainer>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
